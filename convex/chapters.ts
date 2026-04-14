import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getSubjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("subjects").collect();
  },
});

export const getChapters = query({
  args: { subjectId: v.id("subjects") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("chapters")
      .withIndex("by_subject", (q) => q.eq("subjectId", args.subjectId))
      .collect();
  },
});

export const getSRQ = query({
  args: {},
  handler: async (ctx) => {
    const now = Date.now();
    return await ctx.db
      .query("chapters")
      .withIndex("by_review_date")
      .filter((q) => q.lte(q.field("nextReviewDate"), now))
      .collect();
  },
});

export const updateChapterState = mutation({
  args: {
    chapterId: v.id("chapters"),
    field: v.union(
      v.literal("theoryCompleted"),
      v.literal("inTextQuestionsCompleted"),
      v.literal("ncertExercisesCompleted"),
      v.literal("pyqCompleted"),
      v.literal("frictionScore")
    ),
    value: v.any(),
  },
  handler: async (ctx, args) => {
    const chapter = await ctx.db.get(args.chapterId);
    if (!chapter) throw new Error("Chapter not found");

    const update: any = { [args.field]: args.value };

    // If friction score is updated, recalculate nextReviewDate
    if (args.field === "frictionScore") {
      const friction = args.value as number;
      let intervalMs = 0;
      if (friction >= 8) {
        intervalMs = 24 * 60 * 60 * 1000;
      } else if (friction >= 4) {
        intervalMs = 72 * 60 * 60 * 1000;
      } else {
        intervalMs = 168 * 60 * 60 * 1000;
      }
      update.nextReviewDate = Date.now() + intervalMs;
    }

    // If a boolean field is toggled to true, set status to pending for AI validation
    if (typeof args.value === "boolean" && args.value === true) {
      update.verificationStatus = "pending";
    }

    await ctx.db.patch(args.chapterId, update);
    return { success: true, nextReviewDate: update.nextReviewDate };
  },
});
