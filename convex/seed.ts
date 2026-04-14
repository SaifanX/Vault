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
        await ctx.db.insert("chapters", {
          subjectId,
          chapterNumber: i + 1,
          title: chapters[i],
          theoryCompleted: false,
          inTextQuestionsCompleted: false,
          ncertExercisesCompleted: false,
          pyqCompleted: false,
          frictionScore: 0,
          nextReviewDate: Date.now(), // Initial baseline
          verificationStatus: "unattempted",
        });
      }
    }
    return "Vault Seeding Complete: Grade 9 Academic Matrix Initialized.";
  },
});
