import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import bcrypt from "bcryptjs";

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
    if (args.status) {
      return await ctx.db
        .query("accessRequests")
        .withIndex("by_status", (q) => q.eq("status", args.status as any))
        .collect();
    }
    return await ctx.db.query("accessRequests").collect();
  },
});

export const approveRequest = mutation({
  args: {
    requestId: v.id("accessRequests"),
    tempPassword: v.string(),
  },
  handler: async (ctx, args) => {
    const request = await ctx.db.get(args.requestId);
    if (!request) throw new Error("Request not found");

    // 1. Create the user
    const username = request.name.split(" ")[0].toLowerCase() + Math.floor(Math.random() * 1000);
    await ctx.db.insert("users", {
      username,
      name: request.name,
      email: request.email,
      grade: request.grade,
      passwordHash: bcrypt.hashSync(args.tempPassword, 10),
      role: "student",
      passwordChangeRequired: true,
      permissions: ["standard"],
    });

    // 2. Update request status
    await ctx.db.patch(args.requestId, { status: "approved" });

    return { success: true, username };
  },
});
