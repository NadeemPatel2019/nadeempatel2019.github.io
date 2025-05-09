
import { resumeItems } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Resume</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in technical writing and developer advocacy.
          </p>
          <div className="w-20 h-1 bg-brand-purple mx-auto mt-4"></div>
        </div>
        
        <div className="flex justify-center mb-12">
          <Button className="btn-primary" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </a>
          </Button>
        </div>
        
        <div className="space-y-8">
          {resumeItems.map((item) => (
            <Card key={item.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="text-lg text-brand-purple">{item.company}</p>
                  </div>
                  <p className="text-gray-500 mt-1 md:mt-0">{item.duration}</p>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
