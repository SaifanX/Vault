import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  subjects: defineTable({
    name: v.string(),
    totalChapters: v.number(),
    targetScore: v.number(), // Hardcoded 95
  }),
  chapters: defineTable({
    subjectId: v.id("subjects"),
    chapterNumber: v.number(),
    title: v.string(),
    theoryCompleted: v.boolean(),
    inTextQuestionsCompleted: v.boolean(),
    ncertExercisesCompleted: v.boolean(),
    pyqCompleted: v.boolean(),
    frictionScore: v.number(), // 0-10
    nextReviewDate: v.number(), // Unix timestamp
    verificationStatus: v.union(
      v.literal("unattempted"),
      v.literal("pending"),
      v.literal("verified")
    ),
  })
  .index("by_subject", ["subjectId"])
  .index("by_review_date", ["nextReviewDate"]),

  summaries: defineTable({
    chapterId: v.id("chapters"),
    content: v.string(),
    timestamp: v.number(),
    aiVerificationStatus: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("rejected")
    ),
  }),

  dailyMetrics: defineTable({
    date: v.string(), // YYYY-MM-DD
    focusMinutes: v.number(),
    chaptersProcessed: v.number(),
  }),
});
