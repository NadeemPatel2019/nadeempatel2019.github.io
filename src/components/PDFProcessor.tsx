import { useState, useEffect } from 'react';
import { paperStorage } from '@/utils/paperStorage';

interface ProcessedContent {
  processed: {
    title: string;
    content: {
      sections: {
        title: string;
        content: string;
      }[];
    };
    metadata: {
      fileName: string;
      pageCount: number;
    };
  };
  webpage: string;
}

interface PDFProcessorProps {
  onProcessed?: (paperTitle: string) => void;
}

const MSDS_PAPERS = [
  'MSDS 498 - Patel_Assignment_3.pdf',
  'MSDS 475 - Patel_Assignment_10.pdf',
  'MSDS 458 - Patel_A2_Report.pdf',
  'MSDS 460 - Patel_Final_Project_Paper.pdf',
  'MSDS 457 - Final_Project_Report.pdf',
  'MSDS 456 - Final Project.pdf',
  'MSDS 453 - Creating Chatbot.pdf',
  'MSDS 422 - Patel_Assignment_6.pdf'
];

export default function PDFProcessor({ onProcessed }: PDFProcessorProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedContent, setProcessedContent] = useState<ProcessedContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<string>('');

  const handlePaperSelect = async (paperName: string) => {
    setSelectedPaper(paperName);
    setIsProcessing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('filename', paperName);

      const response = await fetch('/api/process-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to process PDF');
      }

      const data = await response.json();
      const slug = paperStorage.savePaper(data.data.processed);
      setProcessedContent(data.data);
      if (slug) {
        onProcessed?.(data.data.processed.title);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {MSDS_PAPERS.map((paper) => (
          <button
            key={paper}
            onClick={() => handlePaperSelect(paper)}
            disabled={isProcessing}
            className={`text-left p-4 rounded-lg border transition-colors ${
              selectedPaper === paper
                ? 'border-brand-olive bg-brand-olive/10'
                : 'border-gray-200 hover:border-brand-olive'
            }`}
          >
            <h3 className="font-medium text-brand-navy">{paper.replace('.pdf', '')}</h3>
          </button>
        ))}
      </div>

      {isProcessing && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-olive mx-auto"></div>
          <p className="mt-2 text-gray-600">Processing PDF...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          {error}
        </div>
      )}

      {processedContent && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-brand-navy mb-4">
            {processedContent.processed.title}
          </h2>
          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: processedContent.webpage }} />
          </div>
        </div>
      )}
    </div>
  );
} 