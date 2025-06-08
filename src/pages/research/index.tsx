import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProcessedPDF } from '@/utils/pdfProcessor';
import { paperStorage } from '@/utils/paperStorage';

export default function ResearchPapers() {
  const [papers, setPapers] = useState<ProcessedPDF[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedPapers = paperStorage.getAllPapers();
    setPapers(loadedPapers);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-olive"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-brand-navy">Research Papers</h1>
        <Link 
          href="/research/manage"
          className="bg-brand-olive hover:bg-brand-light-olive text-white px-4 py-2 rounded-md transition-colors"
        >
          Manage Papers
        </Link>
      </div>

      {papers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No research papers have been uploaded yet.</p>
          <Link 
            href="/research/manage"
            className="text-brand-olive hover:text-brand-light-olive mt-4 inline-block"
          >
            Upload your first paper
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {papers.map((paper, index) => {
            const slug = paper.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <Link 
                key={index}
                href={`/research/${slug}`}
                className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold text-brand-navy mb-2">{paper.title}</h2>
                {paper.content.abstract && (
                  <p className="text-gray-600 line-clamp-3">{paper.content.abstract}</p>
                )}
                <div className="mt-4 text-sm text-gray-500">
                  {paper.metadata.author && <span>By {paper.metadata.author} • </span>}
                  <span>{paper.metadata.pageCount} pages</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
} 