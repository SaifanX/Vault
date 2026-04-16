import { v } from "convex/values";
import { action, internalMutation, internalQuery, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const processPendingSummaries = internalAction({
  args: {},
  handler: async (ctx) => {
    // 1. Get all pending summaries
    const pendingSummaries = await ctx.runQuery(internal.validationEngine.getPendingSummaries);
    
    if (pendingSummaries.length === 0) return;

    // @ts-ignore
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    for (const summary of pendingSummaries) {
      const prompt = `You are an academic validator for a Grade 9 NCERT study tool. 
      The student has submitted a summary for the chapter: "${summary.chapterTitle}".
      Summary: "${summary.content}"
      
      Verify if this summary contains meaningful academic reflection related to the chapter.
      If it is valid, reply with only "VERIFIED".
      If it is too short or irrelevant, reply with "REJECTED".`;

      try {
        const result = await model.generateContent(prompt);
        const response = result.response.text().trim();

        if (response === "VERIFIED") {
          await ctx.runMutation(internal.validationEngine.updateVerificationStatus, {
            chapterId: summary.chapterId,
            summaryId: summary._id,
            status: "verified",
          });
        } else {
          await ctx.runMutation(internal.validationEngine.updateVerificationStatus, {
            chapterId: summary.chapterId,
            summaryId: summary._id,
            status: "unattempted", // Reset or keep as pending with warning? Let's reset for strictness.
          });
        }
      } catch (error) {
        console.error("AI Validation Failed:", error);
      }
    }
  },
});

export const getPendingSummaries = internalQuery({
  args: {},
  handler: async (ctx) => {
    const summaries = await ctx.db
      .query("summaries")
      .filter((q) => q.eq(q.field("aiVerificationStatus"), "pending"))
      .collect();

    return await Promise.all(
      summaries.map(async (s) => {
        const chapter = await ctx.db.get(s.chapterId);
        return { ...s, chapterTitle: chapter?.title || "Unknown" };
      })
    );
  },
});

export const updateVerificationStatus = internalMutation({
  args: {
    chapterId: v.id("chapters"),
    summaryId: v.id("summaries"),
    status: v.union(v.literal("verified"), v.literal("unattempted")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.chapterId, { verificationStatus: args.status });
    await ctx.db.patch(args.summaryId, { 
      aiVerificationStatus: args.status === "verified" ? "approved" : "rejected" 
    });
  },
});
