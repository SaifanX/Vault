import { mutation, query, action } from "./_generated/server";
import { v } from "convex/values";
import bcrypt from "bcryptjs";

export const fixUserMetadata = mutation({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    for (const user of users) {
      if (!user.email || !user.grade) {
        await ctx.db.patch(user._id, {
          email: `${user.username}@vault.os`,
          grade: user.role === "admin" ? "10" : "9",
        });
      }
    }
    return "Metadata fixed";
  },
});

export const seedUsers = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("users").collect();
    if (existing.length > 0) return "Users already seeded";

    const users = [
      {
        username: "admin",
        passwordHash: bcrypt.hashSync("admin_vault", 10),
        name: "Admin",
        email: "admin@vault.os",
        grade: "10",
        role: "admin" as const,
        permissions: ["all"],
      },
      {
        username: "saifan",
        passwordHash: bcrypt.hashSync("saifan_vault", 10),
        name: "Saifan",
        email: "saifan@vault.os",
        grade: "9",
        role: "student" as const,
        permissions: ["standard"],
      },
      {
        username: "faiz",
        passwordHash: bcrypt.hashSync("faiz_vault", 10),
        name: "Faiz",
        email: "faiz@vault.os",
        grade: "8",
        role: "student" as const,
        permissions: ["standard"],
      },
    ];

    for (const user of users) {
      await ctx.db.insert("users", user);
    }

    return "Users seeded successfully";
  },
});

export const login = mutation({
  args: {
    username: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_username", (q) => q.eq("username", args.username))
      .unique();

    if (!user) {
      throw new Error("User not found");
    }

    const isValid = bcrypt.compareSync(args.password, user.passwordHash);
    if (!isValid) {
      throw new Error("Invalid password");
    }

    return {
      userId: user._id,
      name: user.name,
      role: user.role,
      isBanned: user.isBanned ?? false,
      passwordChangeRequired: user.passwordChangeRequired ?? false,
    };
  },
});

export const updatePassword = mutation({
  args: {
    userId: v.id("users"),
    newPassword: v.string(),
  },
  handler: async (ctx, args) => {
    const passwordHash = bcrypt.hashSync(args.newPassword, 10);
    await ctx.db.patch(args.userId, {
      passwordHash,
      passwordChangeRequired: false,
    });
    return "Password updated";
  },
});

export const me = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.userId);
  },
});
