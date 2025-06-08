import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-4">
              Programmer Writer & Data Enthusiast
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Technical writer, developer advocate, and data enthusiast specializing in AI/ML, data science, and cloud technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="btn-primary" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button className="btn-secondary" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            
            <SocialLinks className="text-brand-navy" />
          </div>
          
          <div className="lg:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-light-blue rounded-lg blur-lg opacity-75"></div>
              <div className="relative rounded-lg overflow-hidden animate-fade-in shadow-xl">
                <img
                  src="/images/pro-pic.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
