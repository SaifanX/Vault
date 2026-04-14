# Technical Requirements Document (TRD): The Vault

## 1. System Overview
The Vault is a mechanical academic operating system designed to guarantee a 95%+ CBSE Grade 9 baseline through strict data tracking and algorithmically enforced spaced repetition.

## 2. Technology Stack
* **Frontend:** React (TypeScript), Vite
* **Backend / Database:** Convex (Serverless Functions & Real-time DB)
* **Styling:** Tailwind CSS (for rapid, strict utilitarian UI)
* **Deployment:** Vercel 

## 3. Core Data Architecture (Convex Schema)
The system relies on three primary tables mapped to strict data types.

### 3.1 `subjects` Table
* `name`: string (e.g., "Mathematics", "Science")
* `totalChapters`: number
* `targetScore`: number (Hardcoded baseline: 95)

### 3.2 `chapters` Table
* `subjectId`: id("subjects")
* `chapterNumber`: number
* `title`: string
* `theoryCompleted`: boolean (Default: false)
* `ncertExercisesCompleted`: boolean (Default: false)
* `pyqCompleted`: boolean (Default: false)
* `frictionScore`: number (Range 0-10. 0 = unattempted, 10 = critical failure/high difficulty)
* `nextReviewDate`: number (Unix timestamp. Drives the SRQ algorithm)
* *Indexes:* `by_subject` (subjectId), `by_review_date` (nextReviewDate)

### 3.3 `dailyMetrics` Table
* `date`: string (ISO 8601 format: YYYY-MM-DD)
* `focusMinutes`: number (Aggregated time spent)
* `chaptersProcessed`: number (Count of chapters updated that day)

## 4. Core System Logic & Algorithms

### 4.1 Spaced Repetition Queue (SRQ) Logic
The `nextReviewDate` is calculated dynamically via a Convex mutation when a user updates a chapter's `frictionScore`.
* If `frictionScore` >= 8: `nextReviewDate` = CurrentTime + 24 hours.
* If `frictionScore` 4 to 7: `nextReviewDate` = CurrentTime + 72 hours.
* If `frictionScore` <= 3: `nextReviewDate` = CurrentTime + 168 hours (1 week).

### 4.2 The 5-Minute Compile Rule (Frontend Logic)
A persistent timer component that can be triggered globally. 
* **Function:** Counts down from 300 seconds (5 minutes).
* **Condition:** Must be activated before any `chapter` boolean state can be toggled to `true` (enforcing the micro-commitment before logging the work).

## 5. Required Backend Functions (Convex)
* `mutation: seedNCERTData()` - One-time function to inject the JSON syllabus arrays.
* `query: getSRQ()` - Fetches all chapters where `nextReviewDate` <= CurrentTime, sorted by highest `frictionScore`.
* `query: getMatrix(subjectId)` - Fetches all chapters for a specific subject.
* `mutation: updateChapterState(chapterId, field, value)` - Updates booleans or friction score and recalculates `nextReviewDate`.