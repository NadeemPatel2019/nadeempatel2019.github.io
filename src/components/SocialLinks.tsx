import { Github, Linkedin, Twitter } from "lucide-react";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a
        href="https://github.com/NadeemPatel2019"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:opacity-80 transition-opacity"
      >
        <Github size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/nadeem-patel/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:opacity-80 transition-opacity"
      >
        <Linkedin size={20} />
      </a>
      {/* Commented out Twitter link as requested
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:opacity-80 transition-opacity"
      >
        <Twitter size={20} />
      </a>
      */}
    </div>
  );
};

export default SocialLinks;
