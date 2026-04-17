import { cronJobs } from "convex/server";
import { internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.interval(
  "validate pending summaries",
  { minutes: 30 },
  (internal.validationEngine as any).processPendingSummaries
);

export default crons;
