
import { skills } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  return (
    <section id="about" className="bg-brand-soft-blue section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">About Me</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-brand-navy mb-4">
              Hello, I'm Nadeem
            </h3>
            <p className="text-gray-700 mb-4">
              I'm a technical and programmer writer with a strong technical and writing foundation, blending my expertise in documentation, UI/UX design, and cross-functional collaboration to create user-centric technical content.
            </p>
            <p className="text-gray-700 mb-4">
              My background includes authoring and maintaining developer guides, API documentation, and code examples, as well as reviewing UI text for consistency and accuracy. I thrive in collaborative environments, working closely with engineers, product teams, and stakeholders to align documentation with product design and user needs.
            </p>
            <p className="text-gray-700 mb-4">
              Originally from Chicago, Illinois, I studied data science in graduate school and journalism and computer science during undergraduate school at Northwestern University. My interests include medicine (I was pre-med), politics, sociology, and psychology.
            </p>
            <p className="text-gray-700 mb-4">
              During my free time, I enjoy traveling the world, trying new foods, and watching movies. I also enjoy playing, watching, and analyzing sports. Throughout high school, I played basketball competitively and continue to play today for fun. Just going with the flow and trusting the process!
            </p>
          </div>
          
          <div>
            <Card className="p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-white">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
