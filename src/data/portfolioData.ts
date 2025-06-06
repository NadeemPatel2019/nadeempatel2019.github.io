export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  link: string;
  details?: {
    services: {
      name: string;
      links: {
        title: string;
        url?: string;
        description?: string;
      }[];
    }[];
  };
  quote?: string;
  logo?: string;
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
    title: "AWS Technical Documentation",
    description: "Develop and maintain technical documentation for AWS services, focusing on user experience and clarity across multiple verticals including AI/ML and code services.",
    fullDescription: "",
    image: "/images/tech-doc.png",
    tags: ["Technical Writing", "Documentation", "AWS", "API Documentation", "DevOps", "Cloud", "UI/UX Writing", "AI/ML", "Developer Education", "Content Strategy"],
    link: "https://docs.aws.amazon.com/",
    quote: "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally.",
    logo: "/images/aws.png"
  },
  {
    id: 4,
    title: "Stats Perform Sports Analytics",
    description: "Authored data-driven sports articles analyzing player performance, game statistics, and predictive models across NBA and NFL.",
    fullDescription: "As a content writer at Stats Perform, I produced in-depth sports analytics articles combining statistical analysis with compelling storytelling. Using proprietary data and AI-driven insights, I covered NBA Draft predictions, All-Star selections, and NFL playoff matchups.",
    image: "/images/sports-analytics.jpg",
    tags: ["Sports Analytics", "Data Analysis", "Content Writing", "NBA", "NFL", "Statistical Analysis", "Sports Journalism", "Data Storytelling"],
    link: "https://www.statsperform.com/",
    details: {
      services: [
        {
          name: "NBA Analysis",
          links: [
            {
              title: "NBA Draft Model Analysis",
              url: "https://www.statsperform.com/resource/stats-performs-nba-draft-model-an-inside-look-at-rankings-and-comparisons-using-proprietary-analysis/",
              description: "At 6-foot-5 and 225 pounds, Anthony Edwards is a big guard with the build and athleticism of O.J. Mayo but with the height and ballhandling of D'Angelo Russell. Though Mayo and Russell shot at least 44% from behind the arc in college, Edwards is shooting only 30.5% from 3. That hasn't stopped him from putting them up, as he ranks third in the SEC with 197 attempts."
            },
            {
              title: "NBA All-Star Game Snubs",
              url: "https://www.statsperform.com/resource/left-out-in-the-chicago-cold-stats-performs-all-star-game-snubs/",
              description: "With so much talent and so few spots, there's always going to be a heated debate over which players deserve the honor of playing in the NBA All-Star Game.\n\nBeal is probably the most deserving player not to make it considering the level of production he has achieved and the load he has carried."
            }
          ]
        },
        {
          name: "NFL Analysis",
          links: [
            {
              title: "NFL Playoff Matchup Analysis",
              url: "https://www.statsperform.com/resource/stats-performs-nfl-playoff-matchup-to-watch-vikings-at-49ers/",
              description: "When the Minnesota Vikings and San Francisco 49ers kick off the divisional round of the playoffs on Saturday, expect the 49ers to make things difficult on the Vikings' offense.\n\nSpecifically, Minnesota's offensive line should have its hands full against a San Francisco front four that was Stats Perform's top pass-rushing line during the regular season. The 49ers' defense generates some form of pressure on 63.4% of pass-rushing opportunities, by far the highest of any remaining playoff team."
            }
          ]
        }
      ]
    },
    quote: "Stats Perform unlocks what was once immeasurable in sport by combining trusted sports data and storytelling capabilities with our AI innovation center.",
    logo: "/images/stats-perform.png"
  },
  {
    id: 5,
    title: "Cloud Migration Guide",
    description: "Created comprehensive documentation for migrating legacy systems to modern cloud architecture.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Cloud", "DevOps", "Technical Writing"],
    link: "#"
  },
  {
    id: 6,
    title: "Data Science Tutorial Series",
    description: "Produced a series of video tutorials explaining complex data science concepts for beginners.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Data Science", "Education", "Video"],
    link: "#"
  },
  {
    id: 7,
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
