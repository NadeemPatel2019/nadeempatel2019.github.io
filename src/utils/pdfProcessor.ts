import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';
import pdfParse from 'pdf-parse';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export interface ProcessedPDF {
  title: string;
  content: {
    abstract?: string;
    introduction?: string;
    methodology?: string;
    results?: string;
    conclusion?: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  metadata: {
    fileName: string;
    pageCount: number;
    author?: string;
  };
}

export async function readPDFContent(filePath: string): Promise<string> {
  const dataBuffer = fs.readFileSync(filePath);
  const pdfData = await pdfParse(dataBuffer);
  return pdfData.text;
}

export async function processPDF(filePath: string): Promise<ProcessedPDF> {
  // Read the PDF file
  const dataBuffer = fs.readFileSync(filePath);
  const pdfData = await pdfParse(dataBuffer);
  
  // Extract the raw text
  const rawText = pdfData.text;
  
  // Use Gemini to analyze and structure the content
  const prompt = `
    Analyze this research paper and structure it into the following format:
    1. Title
    2. Abstract
    3. Introduction
    4. Methodology
    5. Results
    6. Conclusion
    7. Additional sections (if any)

    Here's the paper content:
    ${rawText}
  `;

  try {
    const result = await model.generateContent([prompt]);
    const structuredContent = await result.response.text();
    
    // Parse the structured content into sections
    // This is a simplified version - you might want to add more sophisticated parsing
    const sections = structuredContent.split('\n\n').map(section => {
      const [title, ...content] = section.split('\n');
      return {
        title: title.trim(),
        content: content.join('\n').trim()
      };
    });

    return {
      title: path.basename(filePath, '.pdf'),
      content: {
        sections: sections,
        // You can add more specific section parsing here
      },
      metadata: {
        fileName: path.basename(filePath),
        pageCount: pdfData.numpages,
      }
    };
  } catch (error) {
    console.error('Error processing PDF with Gemini:', error);
    throw error;
  }
}

export async function generateWebPage(processedPDF: ProcessedPDF): Promise<string> {
  const prompt = `
    Create a well-structured HTML content for a research paper webpage.
    Use proper heading hierarchy, paragraphs, and formatting.
    Include all sections from the paper.
    Make it engaging and readable.

    Here's the paper content:
    ${JSON.stringify(processedPDF.content)}
  `;

  try {
    const result = await model.generateContent([prompt]);
    return await result.response.text();
  } catch (error) {
    console.error('Error generating webpage content:', error);
    throw error;
  }
} 