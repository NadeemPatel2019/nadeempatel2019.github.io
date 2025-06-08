import { useState } from "react";
import { projects } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Portfolio & Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my work in technical writing, journalism, and data science.
          </p>
          <div className="w-20 h-1 bg-brand-olive mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-brand-soft-green">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-brand-olive hover:text-brand-light-olive font-medium inline-flex items-center transition-colors"
                >
                  {project.title === "Stats Perform Sports Analytics" 
                    ? "View Sports Analysis"
                    : project.title === "AWS Marketing Blog Posts"
                    ? "View Marketing Posts"
                    : project.title === "ABC7 Eyewitness News"
                    ? "View News Articles"
                    : project.title === "Knight Lab Projects"
                    ? "View Projects"
                    : project.title === "Data Science Projects"
                    ? "View Projects"
                    : "View Documentation"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-brand-navy mb-4">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              {selectedProject.description && 
                !["AWS Technical Documentation", "AWS Marketing Blog Posts", "Stats Perform Sports Analytics", "ABC7 Eyewitness News", "Data Science Projects", "Knight Lab Projects"].includes(selectedProject.title) && (
                <p className="text-gray-600 mb-8">{selectedProject.description}</p>
              )}
              
              {selectedProject.fullDescription && (
                <p className="text-gray-600 mb-8">{selectedProject.fullDescription}</p>
              )}
              
              {selectedProject.details?.services.map((service) => (
                <div key={service.name} className="mt-8">
                  {selectedProject.title === "Data Science Projects" ? (
                    <>
                      <h3 className="text-xl font-semibold text-brand-navy mb-4">{service.name}</h3>
                      <div className="space-y-3">
                        {service.links.map((link, linkIndex) => (
                          <div key={linkIndex}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              {link.title}
                            </a>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : selectedProject.title === "Stats Perform Sports Analytics" ? (
                    service.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="mb-8">
                        <h4 className="text-xl font-semibold text-brand-navy mb-4 mt-8">{link.title}</h4>
                        <div className="flex items-start gap-6">
                          <div className="w-2/5">
                            <img
                              src={
                                link.title === "NBA Draft Model Analysis" ? "/images/nbadraft-stats-perform.jpg" :
                                link.title === "NBA All-Star Game Snubs" ? "/images/allstar-stats-perform.jpg" :
                                "/images/49ers-vs-Vikings-stats-perform.png"
                              }
                              alt={link.title}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                          <div className="w-3/5">
                            <div className="mb-4 text-gray-600">
                              "{link.description}"
                            </div>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-700 transition-colors"
                            >
                              Read full article
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : selectedProject.title === "Knight Lab Projects" ? (
                    <>
                      <h3 className="text-xl font-semibold text-brand-navy mb-4">{service.name}</h3>
                      {service.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="mb-8">
                          <p className="text-gray-600 mb-4">{link.description}</p>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition-colors"
                          >
                            Read full project details
                          </a>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold text-brand-navy mb-4">{service.name}</h3>
                      <div className="space-y-3">
                        {service.links.map((link, linkIndex) => (
                          <div key={linkIndex}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              {link.title}
                            </a>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}

              {selectedProject.title === "AWS Technical Documentation" && (
                <>
                  <div className="mb-8">
                    <p className="text-gray-600">
                      As a programmer writer, I work with service team members, including engineers, designers, managers, internal and 
                      external partners and other writers. Through a collaborative effort, I develop, update and maintain technical 
                      documentation for multiple verticals. I also write and edit UI text (headings, UI strings, error messages, etc.) 
                      that is intuitive and consistent. Additionally, I review designs and test upcoming features to provide feedback 
                      as an advocate for customers.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-brand-navy mb-4">Amazon Q Developer</h3>
                      <div className="space-y-3">
                        <div>
                          <a href="https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line.html" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 transition-colors">
                            Using Amazon Q Developer on the command line
                          </a>
                        </div>
                        <div>
                          <a href="https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/gitlab-with-amazon-q.html" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 transition-colors">
                            GitLab Duo with Amazon Q
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-brand-navy mb-4">Amazon CodeCatalyst</h3>
                      <div className="space-y-3">
                        <div>
                          <a href="https://docs.aws.amazon.com/codecatalyst/latest/adk/action-development-intro.html" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 transition-colors">
                            Developing workflow actions for Amazon CodeCatalyst (full Developer Guide)
                          </a>
                        </div>
                        <div>
                          <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/blueprints.html" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 transition-colors">
                            Set up CodeCatalyst projects with blueprints (User Guide)
                          </a>
                        </div>
                        <div>
                          <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/extensions.html" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 transition-colors">
                            Add functionality to projects with extensions in CodeCatalyst (User Guide)
                          </a>
                        </div>
                        <div>
                          <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/search.html" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 transition-colors">
                            Search for code, issues, projects, and users in CodeCatalyst (User Guide)
                          </a>
                        </div>
                        <div>
                          <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/troubleshooting-search.html" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 transition-colors">
                            Troubleshooting problems with search in CodeCatalyst (User Guide)
                          </a>
                        </div>
                        <div>
                          <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/troubleshooting-extensions.html" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 transition-colors">
                            Troubleshooting problems with extensions (User Guide)
                          </a>
                        </div>
                        <div>
                          <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/getting-started-project-assistance.html#getting-started-project-assistance-create-apply-bp" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 transition-colors">
                            Using Amazon Q to choose a blueprint when creating a project or adding functionality (User Guide)
                          </a>
                        </div>
                        <div>
                          <a href="https://docs.aws.amazon.com/codecatalyst/latest/adminguide/managing-billing.html" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 transition-colors">
                            Administering billing (Administrator Guide)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {selectedProject.quote && selectedProject.logo && selectedProject.title !== "Knight Lab Projects" && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-gray-600 italic" dangerouslySetInnerHTML={{ __html: selectedProject.quote }}></p>
                  <div className="mt-4">
                    <img 
                      src={selectedProject.logo}
                      alt={`${selectedProject.title} Logo`}
                      className="h-12 object-contain"
                    />
                  </div>
                </div>
              )}

              {selectedProject.title === "Knight Lab Projects" && (
                <>
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-gray-600 italic">
                      The Northwestern University <a href="https://knightlab.northwestern.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">Knight Lab</a> is a team of technologists and journalists working at advancing news media innovation through exploration and experimentation.
                    </p>
                  </div>
                  <div className="mt-8 bg-black p-8 rounded-lg">
                    <div className="flex justify-center space-x-8">
                      <img src="/images/knightlab-dark.png" alt="Knight Lab" className="h-12" />
                      <img src="/images/logo-medill-dark.png" alt="Medill School" className="h-12" />
                      <img src="/images/logo-mccormick-dark.png" alt="McCormick School" className="h-12" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Portfolio;
