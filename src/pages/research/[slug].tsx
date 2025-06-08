import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ProcessedPDF } from '@/utils/pdfProcessor';
import { paperStorage } from '@/utils/paperStorage';

export default function ResearchPaper() {
  const router = useRouter();
  const { slug } = router.query;
  const [paperContent, setPaperContent] = useState<ProcessedPDF | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof slug === 'string') {
      const paper = paperStorage.getPaper(slug);
      setPaperContent(paper);
      setIsLoading(false);
    }
  }, [slug]);

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
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Paper not found</h1>
        <p className="text-gray-600">The requested research paper could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-brand-navy mb-4">{paperContent.title}</h1>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-brand-navy mb-2">Metadata</h2>
          <p className="text-gray-600">
            Pages: {paperContent.metadata.pageCount}
            {paperContent.metadata.author && ` | Author: ${paperContent.metadata.author}`}
          </p>
        </div>

        <div className="prose max-w-none">
          {paperContent.content.abstract && (
            <section>
              <h2 className="text-xl font-semibold text-brand-navy mb-3">Abstract</h2>
              <p className="text-gray-700">{paperContent.content.abstract}</p>
            </section>
          )}

          {paperContent.content.introduction && (
            <section className="mt-6">
              <h2 className="text-xl font-semibold text-brand-navy mb-3">Introduction</h2>
              <p className="text-gray-700">{paperContent.content.introduction}</p>
            </section>
          )}

          {paperContent.content.methodology && (
            <section className="mt-6">
              <h2 className="text-xl font-semibold text-brand-navy mb-3">Methodology</h2>
              <p className="text-gray-700">{paperContent.content.methodology}</p>
            </section>
          )}

          {paperContent.content.results && (
            <section className="mt-6">
              <h2 className="text-xl font-semibold text-brand-navy mb-3">Results</h2>
              <p className="text-gray-700">{paperContent.content.results}</p>
            </section>
          )}

          {paperContent.content.conclusion && (
            <section className="mt-6">
              <h2 className="text-xl font-semibold text-brand-navy mb-3">Conclusion</h2>
              <p className="text-gray-700">{paperContent.content.conclusion}</p>
            </section>
          )}

          {paperContent.content.sections.map((section, index) => (
            <section key={index} className="mt-6">
              <h2 className="text-xl font-semibold text-brand-navy mb-3">{section.title}</h2>
              <p className="text-gray-700">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
} 