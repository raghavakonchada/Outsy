
import "dotenv/config";
import express from "express";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;

const allowedCategories = [
  "Connect",
  "Feel",
  "Discover",
  "Care",
  "Recharge"
];

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    aiConfigured: Boolean(ai)
  });
});

app.post("/api/missions", async (req, res) => {
  try {
    const {
      category = "Recharge",
      duration = 10,
      difficulty = "Gentle"
    } = req.body ?? {};

    if (!allowedCategories.includes(category)) {
      return res.status(400).json({ error: "Invalid mission category." });
    }

    const minutes = Number(duration);

    if (!Number.isFinite(minutes) || minutes < 2 || minutes > 120) {
      return res.status(400).json({
        error: "Duration must be between 2 and 120 minutes."
      });
    }

    if (!["Gentle", "Moderate", "Adventurous"].includes(difficulty)) {
      return res.status(400).json({ error: "Invalid difficulty." });
    }

    if (!ai) {
      return res.status(503).json({
        error: "AI is not configured. Check the server .env file."
      });
    }

    const prompt = `
You are Outsy, a friendly AI companion that encourages people to
spend less time scrolling and more time experiencing the real world.

Create exactly one practical, safe, offline mission.

Category: ${category}
Duration: ${minutes} minutes
Difficulty: ${difficulty}

Categories:
Connect = friendly, respectful human interaction.
Feel = mindfulness and noticing nature through the senses.
Discover = observing plants, insects, or the local environment.
Care = a small act of kindness or responsible care for living things.
Recharge = a screen-free break, movement, or quiet outdoor time.

Safety rules:
- Never require spending money, sharing personal information, or using a phone during the mission.
- Do not encourage approaching, touching, feeding, or disturbing unknown animals or insects.
- Keep the mission accessible and appropriate for a beginner.
- Offer an indoor alternative if going outdoors is impractical.
- Do not promise medical or mental-health benefits.

Return only valid JSON with these fields:
{
  "title": "Short mission title",
  "description": "Friendly introduction, 1-2 sentences",
  "duration": ${minutes},
  "difficulty": "${difficulty}",
  "category": "${category}",
  "steps": ["Step 1", "Step 2", "Step 3"],
  "reflection": "One short question to reflect on afterward"
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt
    });

    const raw = response.text?.trim();

    if (!raw) {
      throw new Error("The AI returned an empty response.");
    }

    const cleaned = raw
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "");

    const mission = JSON.parse(cleaned);

    if (
      typeof mission.title !== "string" ||
      typeof mission.description !== "string" ||
      !Array.isArray(mission.steps) ||
      mission.steps.length === 0 ||
      typeof mission.reflection !== "string"
    ) {
      throw new Error("The AI returned an invalid mission format.");
    }

    res.json({ mission });
  } catch (error) {
    console.error("Mission generation failed:", error.message);
    res.status(502).json({
      error: "Outsy couldn't generate a mission right now. Please try again."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Outsy AI backend running at http://localhost:${PORT}`);
  console.log(`Gemini configured: ${Boolean(ai)}`);
});
