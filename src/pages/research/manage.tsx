import { useState } from 'react';
import PDFProcessor from '@/components/PDFProcessor';

export default function ManageResearch() {
  const [processedPapers, setProcessedPapers] = useState<string[]>([]);

  const handlePaperProcessed = (paperTitle: string) => {
    setProcessedPapers(prev => [...prev, paperTitle]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-brand-navy mb-8">Process Research Papers</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-brand-navy mb-4">Upload Papers</h2>
        <PDFProcessor onProcessed={handlePaperProcessed} />
      </div>

      {processedPapers.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-brand-navy mb-4">Processed Papers</h2>
          <ul className="space-y-2">
            {processedPapers.map((paper, index) => (
              <li key={index} className="text-gray-600">
                ✓ {paper}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 