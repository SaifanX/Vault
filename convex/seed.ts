import { mutation } from "./_generated/server";

export const seedNCERTData = mutation({
  args: {},
  handler: async (ctx) => {
    // Subjects definition
    const subjectList = [
      { name: "Mathematics", totalChapters: 12 },
      { name: "Science", totalChapters: 12 },
      { name: "History", totalChapters: 5 },
      { name: "Geography", totalChapters: 6 },
      { name: "Civics", totalChapters: 5 },
      { name: "Economics", totalChapters: 4 },
    ];

    for (const sub of subjectList) {
      const subjectId = await ctx.db.insert("subjects", {
        name: sub.name,
        totalChapters: sub.totalChapters,
        targetScore: 95,
      });

      // Chapter Data (Rationalized 2024-25)
      let chapters: string[] = [];
      if (sub.name === "Mathematics") {
        chapters = [
          "Number Systems", "Polynomials", "Coordinate Geometry", 
          "Linear Equations in Two Variables", "Introduction to Euclid's Geometry",
          "Lines and Angles", "Triangles", "Quadrilaterals", "Circles",
          "Heron's Formula", "Surface Areas and Volumes", "Statistics"
        ];
      } else if (sub.name === "Science") {
        chapters = [
          "Matter in Our Surroundings", "Is Matter Around Us Pure", "Atoms and Molecules",
          "Structure of the Atom", "The Fundamental Unit of Life", "Tissues",
          "Motion", "Force and Laws of Motion", "Gravitation", "Work and Energy",
          "Sound", "Improvement in Food Resources"
        ];
      } else if (sub.name === "History") {
        chapters = [
          "The French Revolution", "Socialism in Europe and the Russian Revolution",
          "Nazism and the Rise of Hitler", "Forest Society and Colonialism",
          "Pastoralists in the Modern World"
        ];
      } else if (sub.name === "Geography") {
        chapters = [
          "India – Size and Location", "Physical Features of India", "Drainage",
          "Climate", "Natural Vegetation and Wildlife", "Population"
        ];
      } else if (sub.name === "Civics") {
        chapters = [
          "What is Democracy? Why Democracy?", "Constitutional Design",
          "Electoral Politics", "Working of Institutions", "Democratic Rights"
        ];
      } else if (sub.name === "Economics") {
        chapters = [
          "The Story of Village Palampur", "People as Resource",
          "Poverty as a Challenge", "Food Security in India"
        ];
      }

      for (let i = 0; i < chapters.length; i++) {
        // 2024-25 NCERT Link Pattern
        let resourceUrl = "";
        const chNum = (i + 1).toString().padStart(2, "0");
        if (sub.name === "Mathematics") resourceUrl = `https://ncert.nic.in/textbook/pdf/iemh1${chNum}.pdf`;
        if (sub.name === "Science") resourceUrl = `https://ncert.nic.in/textbook/pdf/iesc1${chNum}.pdf`;

        await ctx.db.insert("chapters", {
          subjectId,
          chapterNumber: i + 1,
          title: chapters[i],
          theoryCompleted: false,
          inTextQuestionsCompleted: false,
          ncertExercisesCompleted: false,
          pyqCompleted: false,
          frictionScore: 0,
          nextReviewDate: Date.now(),
          verificationStatus: "unattempted",
          resourceUrl: resourceUrl || undefined,
        });
      }
    }
    return "Vault Seeding Complete: Grade 9 Academic Matrix Initialized.";
  },
});
import bcrypt from "bcryptjs";
import { v } from "convex/values";

export const setupFirstAdmin = mutation({
  args: {
    username: v.string(), // e.g. "saifan"
    password: v.string(), // e.g. "Saifan1234"
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    // 1. Check if admin already exists to prevent duplication
    const existing = await ctx.db
      .query("users")
      .withIndex("by_role", (q) => q.eq("role", "admin"))
      .first();
    
    if (existing) throw new Error("Admin already initialized.");

    // 2. Create the User Record
    const userId = await ctx.db.insert("users", {
        name: args.name,
        email: args.email,
        username: args.username,
        role: "admin",
        grade: "10",
        isBanned: false,
    });

    // 3. Create the Password Account
    const hashed = bcrypt.hashSync(args.password, 10);
    await ctx.db.insert("accounts", {
        userId: userId as any,
        provider: "password",
        providerAccountId: args.email,
        secret: hashed,
    });

    return { success: true, message: "Dictator Admin Ready. Log in with your credentials." };
  },
});
