import { GoogleGenAI } from "@google/genai";
import { JDRequest } from "../types";

// Initialize the Gemini API client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateJobDescription = async (request: JDRequest): Promise<string> => {
  try {
    const prompt = `
      Act as a senior talent consultant for the Oil & Gas industry in the GCC.
      Write a professional, attractive, and formatted Job Description for the following role:
      
      Role Title: ${request.title}
      Seniority Level: ${request.level}
      Location: ${request.location}
      Key Skills/Focus: ${request.skills}
      
      Company Tone: Authoritative, Global, Efficient, Safety-First.
      Structure:
      1. Role Overview
      2. Key Responsibilities
      3. Requirements (Education & Experience)
      4. What We Offer
      
      Format the output in clean Markdown.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }, // Minimize latency for this interactive tool
        temperature: 0.7,
      }
    });

    return response.text || "Unable to generate description. Please try again.";
  } catch (error) {
    console.error("Error generating JD:", error);
    return "An error occurred while communicating with the AI service. Please ensure your API key is valid.";
  }
};