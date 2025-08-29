import React from 'react';
import { projects } from '../../data/portfolioData';
import { Link } from 'react-router-dom';

const KnightLabProjects = () => {
  const knightLabProject = projects.find(p => p.title === "Knight Lab Projects");

  if (!knightLabProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{knightLabProject.title}</h1>
          <p className="text-xl text-gray-600 mb-12">{knightLabProject.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-12">
          {knightLabProject.details?.services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h2>
                {service.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{link.title}</h3>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <Link 
                      to={link.url || '#'} 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                      target={link.target || "_self"}
                    >
                      {link.title || "Read full project details"} →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black text-white p-8 rounded-lg">
          <div className="text-center mb-8">
            <p className="text-lg italic mb-8" dangerouslySetInnerHTML={{ __html: knightLabProject.quote || '' }}></p>
            <div className="flex justify-center space-x-8">
              <img src="/images/knightlab-dark.png" alt="Knight Lab" className="h-12" />
              <img src="/images/logo-medill-dark.png" alt="Medill School" className="h-12" />
              <img src="/images/logo-mccormick-dark.png" alt="McCormick School" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnightLabProjects; 