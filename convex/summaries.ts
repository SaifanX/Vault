import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createSummary = mutation({
  args: {
    chapterId: v.id("chapters"),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const summaryId = await ctx.db.insert("summaries", {
      chapterId: args.chapterId,
      content: args.content,
      timestamp: Date.now(),
      aiVerificationStatus: "pending",
    });

    // We also set the chapter to pending status
    await ctx.db.patch(args.chapterId, {
      verificationStatus: "pending",
    });

    return summaryId;
  },
});
