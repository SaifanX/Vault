import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const schema = defineSchema({
  ...authTables,
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
    userId: v.optional(v.id("users")), // Track who submitted the summary
    chapterId: v.id("chapters"),
    content: v.string(),
    timestamp: v.number(),
    aiVerificationStatus: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("rejected")
    ),
  }).index("by_ai_status", ["aiVerificationStatus"]),

  dailyMetrics: defineTable({
    userId: v.optional(v.id("users")),
    date: v.string(), // YYYY-MM-DD
    focusMinutes: v.number(),
    chaptersProcessed: v.number(),
  }),

  // We override the default users table to add our proprietary OS fields
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    // OS Specific Fields
    username: v.optional(v.string()),
    grade: v.optional(v.string()), // "8", "9", or "10"
    role: v.optional(v.union(v.literal("admin"), v.literal("student"))),
    isBanned: v.optional(v.boolean()),
    passwordChangeRequired: v.optional(v.boolean()),
    permissions: v.optional(v.array(v.string())),
    tokenIdentifier: v.optional(v.string()),
  })
  .index("by_username", ["username"])
  .index("by_role", ["role"])
  .index("by_tokenIdentifier", ["tokenIdentifier"]),

  accessRequests: defineTable({
    name: v.string(),
    email: v.string(),
    grade: v.string(),
    status: v.union(v.literal("pending"), v.literal("approved"), v.literal("rejected")),
    timestamp: v.number(),
  }).index("by_status", ["status"]),
});

export default schema;
