import { readPDFContent } from '../utils/pdfProcessor';
import path from 'path';

async function main() {
  const pdfPath = path.join(process.cwd(), 'public', 'msds', 'MSDS 498 - Patel_Assignment_3.pdf');
  try {
    const content = await readPDFContent(pdfPath);
    console.log('First 1000 characters of PDF content:');
    console.log(content.substring(0, 1000));
  } catch (error) {
    console.error('Error reading PDF:', error);
  }
}

main(); 