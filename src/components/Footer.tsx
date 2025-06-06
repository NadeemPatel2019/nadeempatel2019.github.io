import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Nadeem Patel</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Technical writer and developer advocate specializing in AI/ML, data science, and cloud technologies.
            </p>
            <SocialLinks className="text-white" />
          </div>
          
          <div className="md:text-right">
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Nadeem Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
