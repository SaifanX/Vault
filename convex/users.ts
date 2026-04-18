import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import bcrypt from "bcryptjs";

/**
 * Returns the current authenticated user's profile.
 */
export const me = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    return await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();
  },
});

/**
 * List all users (Admin only).
 */
export const listUsers = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated");

    const caller = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();

    if (!caller || caller.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    return await ctx.db.query("users").collect();
  },
});

/**
 * Ban or unban a user (Admin only).
 */
export const toggleBan = mutation({
  args: {
    userId: v.id("users"),
    isBanned: v.boolean(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated");

    const caller = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();

    if (!caller || caller.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    await ctx.db.patch(args.userId, { isBanned: args.isBanned });
    return "User status updated";
  },
});

/**
 * Updates the password for the current user.
 * This is a secure bridge to the Convex Auth 'accounts' table.
 */
export const updatePassword = mutation({
  args: {
    newPassword: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated");

    const user = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();

    if (!user) throw new Error("User profile not found");

    // Find the associated password account
    const account = await ctx.db
      .query("accounts")
      .withIndex("by_userId_provider", (q) => 
        q.eq("userId", user._id as any).eq("provider", "password")
      )
      .unique();

    if (!account) throw new Error("Authentication account not found");

    // Hash and update using bcrypt (standard for Convex Auth Password provider)
    const hashed = bcrypt.hashSync(args.newPassword, 10);
    await ctx.db.patch(account._id, { secret: hashed });
    
    // Clear the 'force change' flag if it was set
    await ctx.db.patch(user._id, { passwordChangeRequired: false });

    return "Security credentials updated";
  },
});

/**
 * Creates or updates a user profile after a successful login.
 */
export const syncUser = mutation({
  args: {
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    username: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated");

    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();

    if (existingUser) {
      await ctx.db.patch(existingUser._id, {
        name: args.name ?? existingUser.name,
        email: args.email ?? existingUser.email,
        username: args.username ?? existingUser.username,
      });
      return existingUser._id;
    } else {
      // Logic for linking pre-created users
      const preCreatedUser = await ctx.db
        .query("users")
        .filter((q) => 
          q.and(
            q.or(
              q.eq(q.field("email"), identity.email),
              q.eq(q.field("username"), identity.nickname)
            ),
            q.eq(q.field("tokenIdentifier"), undefined)
          )
        )
        .unique();

      if (preCreatedUser) {
        await ctx.db.patch(preCreatedUser._id, {
          tokenIdentifier: identity.tokenIdentifier,
          name: identity.name ?? preCreatedUser.name,
        });
        return preCreatedUser._id;
      }

      // Default fallback
      return await ctx.db.insert("users", {
        tokenIdentifier: identity.tokenIdentifier,
        name: identity.name ?? args.name ?? "New User",
        email: identity.email ?? args.email,
        username: args.username,
        role: "student",
        grade: "9",
        isBanned: false,
      });
    }
  },
});
