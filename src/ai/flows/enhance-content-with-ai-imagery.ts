'use server';
/**
 * @fileOverview A content enhancement AI agent that suggests relevant stock photos based on the manually entered text for each section.
 *
 * - enhanceContentWithAIImagery - A function that handles the content enhancement process.
 * - EnhanceContentInput - The input type for the enhanceContentWithAIImagery function.
 * - EnhanceContentOutput - The return type for the enhanceContentWithAIImagery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceContentInputSchema = z.object({
  sectionName: z.string().describe('The name of the section to enhance (e.g., About Us, Rooms, Amenities).'),
  textContent: z.string().describe('The manually entered text content for the section.'),
});
export type EnhanceContentInput = z.infer<typeof EnhanceContentInputSchema>;

const EnhanceContentOutputSchema = z.object({
  suggestedPhotoDescription: z.string().describe('A description of a stock photo that would visually enhance the section.'),
  suggestedPhotoKeywords: z.array(z.string()).describe('Keywords to use when searching for a stock photo.'),
});
export type EnhanceContentOutput = z.infer<typeof EnhanceContentOutputSchema>;

export async function enhanceContentWithAIImagery(input: EnhanceContentInput): Promise<EnhanceContentOutput> {
  return enhanceContentWithAIImageryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceContentWithAIImageryPrompt',
  input: {schema: EnhanceContentInputSchema},
  output: {schema: EnhanceContentOutputSchema},
  prompt: `You are an AI assistant that helps content managers find relevant stock photos for their website sections.

  Based on the section name and the manually entered text content, you will suggest a description of a stock photo that would visually enhance the section, and keywords to use when searching for a stock photo.

  Section Name: {{{sectionName}}}
  Text Content: {{{textContent}}}

  Here are the instructions:
  1. Think step by step, and extract keywords from the section name and text content to understand the context.
  2. Suggest a photo description which will help the content manager find a visually appealing photo.
  3. Respond with a list of keywords to use when searching for a stock photo.
`,
});

const enhanceContentWithAIImageryFlow = ai.defineFlow(
  {
    name: 'enhanceContentWithAIImageryFlow',
    inputSchema: EnhanceContentInputSchema,
    outputSchema: EnhanceContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
