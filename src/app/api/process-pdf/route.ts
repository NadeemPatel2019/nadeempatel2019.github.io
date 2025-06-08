import { NextResponse } from 'next/server';
import { processPDF, generateWebPage } from '@/utils/pdfProcessor';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const filename = formData.get('filename') as string;
    
    if (!filename) {
      return NextResponse.json({ error: 'No filename provided' }, { status: 400 });
    }

    // Get the full path to the PDF file in the public directory
    const pdfPath = path.join(process.cwd(), 'public', 'msds', filename);

    // Process the PDF
    const processedPDF = await processPDF(pdfPath);
    
    // Generate webpage content
    const webpageContent = await generateWebPage(processedPDF);

    return NextResponse.json({ 
      success: true,
      data: {
        processed: processedPDF,
        webpage: webpageContent
      }
    });

  } catch (error) {
    console.error('Error processing PDF:', error);
    return NextResponse.json({ 
      error: 'Failed to process PDF',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 