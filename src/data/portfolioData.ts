
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
    title: "Senior Developer Advocate",
    company: "Notable Tech Company",
    duration: "2023 - Present",
    description: [
      "Lead developer relations initiatives across AI, cloud, and data science products",
      "Created technical content including documentation, tutorials, and video series",
      "Represented the company at 15+ industry conferences globally"
    ]
  },
  {
    id: 2,
    title: "Technical Writer & Content Strategist",
    company: "Cloud Provider",
    duration: "2021 - 2023",
    description: [
      "Developed comprehensive documentation for cloud infrastructure products",
      "Redesigned the developer portal increasing engagement by 45%",
      "Collaborated with engineering teams to improve API documentation"
    ]
  },
  {
    id: 3,
    title: "Documentation Engineer",
    company: "Data Science Platform",
    duration: "2019 - 2021",
    description: [
      "Built automated documentation systems for data science tools",
      "Created interactive tutorials for complex machine learning workflows",
      "Managed a team of technical writers across multiple product lines"
    ]
  }
];

export const skills = [
  "Technical Writing", "Developer Relations", "Documentation", "API Documentation",
  "Content Strategy", "Public Speaking", "Data Science", "AI/ML", "Cloud Technologies",
  "Community Building", "Technical Education", "Python", "JavaScript", "Git"
];
