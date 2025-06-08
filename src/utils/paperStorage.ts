import { ProcessedPDF } from './pdfProcessor';

// In a real application, this would be a database
// For now, we'll use localStorage in the browser
export const paperStorage = {
  savePaper: (paper: ProcessedPDF) => {
    if (typeof window !== 'undefined') {
      const papers = JSON.parse(localStorage.getItem('research-papers') || '{}');
      const slug = paper.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      papers[slug] = paper;
      localStorage.setItem('research-papers', JSON.stringify(papers));
      return slug;
    }
    return null;
  },

  getPaper: (slug: string): ProcessedPDF | null => {
    if (typeof window !== 'undefined') {
      const papers = JSON.parse(localStorage.getItem('research-papers') || '{}');
      return papers[slug] || null;
    }
    return null;
  },

  getAllPapers: (): ProcessedPDF[] => {
    if (typeof window !== 'undefined') {
      const papers = JSON.parse(localStorage.getItem('research-papers') || '{}');
      return Object.values(papers);
    }
    return [];
  },

  deletePaper: (slug: string): boolean => {
    if (typeof window !== 'undefined') {
      const papers = JSON.parse(localStorage.getItem('research-papers') || '{}');
      if (papers[slug]) {
        delete papers[slug];
        localStorage.setItem('research-papers', JSON.stringify(papers));
        return true;
      }
    }
    return false;
  }
}; 