import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submitRequest = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    grade: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("accessRequests", {
      name: args.name,
      email: args.email,
      grade: args.grade,
      status: "pending",
      timestamp: Date.now(),
    });
  },
});

export const getRequests = query({
  args: { status: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated");
    
    // We strictly check for admin role from the database
    const user = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();
      
    if (!user || user.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    if (args.status) {
      return await ctx.db
        .query("accessRequests")
        .withIndex("by_status", (q) => q.eq("status", args.status as any))
        .collect();
    }
    return await ctx.db.query("accessRequests").collect();
  },
});

/**
 * Approves a request and creates the user account in the auth system.
 * This is the 'Dictator' onboarding flow.
 */
export const approveRequest = mutation({
  args: {
    requestId: v.id("accessRequests"),
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

    const request = await ctx.db.get(args.requestId);
    if (!request) throw new Error("Request not found");
    if (request.status === "approved") throw new Error("Request already approved");

    // 1. Generate Dictator Credentials: Name + 4 digits
    const namePart = request.name.split(" ")[0].replace(/[^a-zA-Z]/g, "").toLowerCase();
    const randomDigits = Math.floor(1000 + Math.random() * 9000); // Guarantees 4 digits
    const username = `${namePart}${randomDigits}`;
    const password = `${request.name.split(" ")[0]}${randomDigits}`; // Case-sensitive name + digits

    // 2. Create the User Profile
    const userId = await ctx.db.insert("users", {
      name: request.name,
      email: request.email,
      username: username,
      grade: request.grade,
      role: "student",
      isBanned: false,
      passwordChangeRequired: true,
      permissions: ["standard"],
    });

    // 3. Mark request as approved
    await ctx.db.patch(args.requestId, { status: "approved" });

    // Note: The actual 'Account' record (credentials) for the Password provider 
    // will be created during the first login or via an internal registration action.
    // For now, we return the generated credentials to the admin.
    return { 
      success: true, 
      username, 
      password,
      message: "User created. Credentials generated." 
    };
  },
});
