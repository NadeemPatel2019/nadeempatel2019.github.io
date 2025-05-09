
import { skills } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  return (
    <section id="about" className="bg-brand-soft-gray section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">About Me</h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-brand-navy mb-4">
              Hello, I'm [YourName]
            </h3>
            <p className="text-gray-700 mb-4">
              I'm a technical writer and developer advocate with expertise in AI/ML, data science, and cloud technologies. With over [X] years of experience, I've helped bridge the gap between complex technical concepts and the people who use them.
            </p>
            <p className="text-gray-700 mb-4">
              My work involves creating clear, concise documentation, engaging tutorials, and impactful educational content. I'm passionate about building developer communities and helping technologists communicate effectively.
            </p>
            <p className="text-gray-700 mb-6">
              I've worked with leading companies in the tech industry, including [Notable Company 1], [Notable Company 2], and [Notable Company 3], where I've developed comprehensive documentation strategies, built developer communities, and represented these companies at technical conferences globally.
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
