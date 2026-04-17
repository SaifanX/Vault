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
    resourceUrl: v.optional(v.string()),
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

  users: defineTable({
    username: v.string(),
    passwordHash: v.string(),
    name: v.string(),
    email: v.string(),
    grade: v.string(), // "8", "9", or "10"
    role: v.union(v.literal("admin"), v.literal("student")),
    isBanned: v.optional(v.boolean()),
    passwordChangeRequired: v.optional(v.boolean()),
    permissions: v.optional(v.array(v.string())),
  }).index("by_username", ["username"]),

  accessRequests: defineTable({
    name: v.string(),
    email: v.string(),
    grade: v.string(),
    status: v.union(v.literal("pending"), v.literal("approved"), v.literal("rejected")),
    timestamp: v.number(),
  }).index("by_status", ["status"]),
});
