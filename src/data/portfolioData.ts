
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
}

export interface ResumeItem {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Documentation Platform",
    description: "Designed and implemented a documentation platform that uses AI to improve searchability and user experience.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["AI/ML", "Documentation", "UX Design"],
    link: "#"
  },
  {
    id: 2,
    title: "Cloud Migration Guide",
    description: "Created comprehensive documentation for migrating legacy systems to modern cloud architecture.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Cloud", "DevOps", "Technical Writing"],
    link: "#"
  },
  {
    id: 3,
    title: "Data Science Tutorial Series",
    description: "Produced a series of video tutorials explaining complex data science concepts for beginners.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Data Science", "Education", "Video"],
    link: "#"
  },
  {
    id: 4,
    title: "Developer Community Platform",
    description: "Built and managed a community platform for developers to share resources and collaborate on projects.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Community", "Full Stack", "UX Design"],
    link: "#"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Technical Documentation in the AI Era",
    excerpt: "How AI is transforming the way we create, manage, and consume technical documentation.",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Building Developer Communities That Last",
    excerpt: "Strategies for creating thriving, inclusive communities for technical audiences.",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Data Visualization Techniques for Technical Writers",
    excerpt: "How to effectively communicate complex data in your technical content.",
    date: "March 22, 2025",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

export const resumeItems: ResumeItem[] = [
  {
    id: 1,
    title: "Programmer Writer II, AI/ML & Code Services",
    company: "Amazon Web Services (AWS)",
    duration: "April 2022 - Present",
    description: [
      "Collaborate with engineers, designers, and product teams to develop and maintain technical documentation, UI text, and code examples",
      "Lead content strategy initiatives focused on optimizing documentation through data-driven insights, managing a team of six",
      "Advocate for users by testing features, providing feedback, and using version control (Git) to manage documentation as code"
    ]
  },
  {
    id: 2,
    title: "Technical Writer",
    company: "Saggezza",
    duration: "August 2021 - March 2022",
    description: [
      "Documented and edited technical content for internal tools and services used by developers and engineers",
      "Uplifted content from Confluence to edit, structure, and publish to official internal documentation source for over 120 guides",
      "Used GitLab, Markdown and VS Code to review, edit, and publish documentation as code"
    ]
  },
  {
    id: 3,
    title: "Digital Producer/Writer/Editor",
    company: "ABC7 News/WLS-TV",
    duration: "October 2020 - August 2021",
    description: [
      "Transformed reporter scripts, official statements, and reports into digestible web content, adhering to AP style",
      "Managed multiple content channels simultaneously including website, mobile app, and social media",
      "Implemented SEO strategies using analytics tools like Google Trends and Adobe Experience Cloud to optimize content performance"
    ]
  }
];

export const skills = [
  "Technical Writing", "Developer Relations", "Documentation", "API Documentation",
  "Content Strategy", "Public Speaking", "Data Science", "AI/ML", "Cloud Technologies",
  "Community Building", "Technical Education", "Python", "JavaScript", "Git"
];
