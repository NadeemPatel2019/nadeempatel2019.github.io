import { useEffect, useState } from 'react';
import { ProcessedPDF } from '@/utils/pdfProcessor';
import { paperStorage } from '@/utils/paperStorage';

export default function MSDS498Assignment3() {
  const [paperContent, setPaperContent] = useState<ProcessedPDF | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const slug = 'msds-498-patel-assignment-3';
    const paper = paperStorage.getPaper(slug);
    setPaperContent(paper);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-olive"></div>
      </div>
    );
  }

  if (!paperContent) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Paper Processing Required</h1>
        <p className="text-gray-600">This paper needs to be processed first. Please visit the research management page to process it.</p>
        <a 
          href="/research/manage" 
          className="mt-4 inline-block text-brand-olive hover:text-brand-light-olive"
        >
          Go to Research Management →
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <nav className="mb-8">
        <a 
          href="/research" 
          className="text-brand-olive hover:text-brand-light-olive inline-flex items-center"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Back to Research Papers
        </a>
      </nav>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-brand-navy mb-4">
          {paperContent.title}
        </h1>
        
        <div className="bg-brand-soft-blue p-4 rounded-lg mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">
                <span className="font-semibold">Pages:</span> {paperContent.metadata.pageCount}
              </p>
              {paperContent.metadata.author && (
                <p className="text-gray-600">
                  <span className="font-semibold">Author:</span> {paperContent.metadata.author}
                </p>
              )}
            </div>
            <a 
              href="/msds/MSDS 498 - Patel_Assignment_3.pdf" 
              target="_blank" 
              className="bg-brand-olive hover:bg-brand-light-olive text-white px-4 py-2 rounded-md transition-colors inline-flex items-center"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download PDF
            </a>
          </div>
        </div>

        {paperContent.content.abstract && (
          <section>
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">Abstract</h2>
            <div className="text-gray-700 mb-8">
              {paperContent.content.abstract}
            </div>
          </section>
        )}

        {paperContent.content.introduction && (
          <section>
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">Introduction</h2>
            <div className="text-gray-700 mb-8">
              {paperContent.content.introduction}
            </div>
          </section>
        )}

        {paperContent.content.methodology && (
          <section>
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">Methodology</h2>
            <div className="text-gray-700 mb-8">
              {paperContent.content.methodology}
            </div>
          </section>
        )}

        {paperContent.content.results && (
          <section>
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">Results</h2>
            <div className="text-gray-700 mb-8">
              {paperContent.content.results}
            </div>
          </section>
        )}

        {paperContent.content.conclusion && (
          <section>
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">Conclusion</h2>
            <div className="text-gray-700 mb-8">
              {paperContent.content.conclusion}
            </div>
          </section>
        )}

        {paperContent.content.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              {section.title}
            </h2>
            <div className="text-gray-700 mb-8">
              {section.content}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
} 