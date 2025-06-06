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
    fullDescription: "As a programmer writer, I work with service team members, including engineers, designers, managers, internal and external partners and other writers. Through a collaborative effort, I develop, update and maintain technical documentation for multiple verticals. I also write and edit UI text (headings, UI strings, error messages, etc.) that is intuitive and consistent. Additionally, I review designs and test upcoming features to provide feedback as an advocate for customers.",
    image: "/images/tech-doc.png",
    tags: ["Technical Writing", "Documentation", "AWS", "API Documentation", "DevOps", "Cloud", "UI/UX Writing", "AI/ML", "Developer Education", "Content Strategy"],
    link: "https://docs.aws.amazon.com/",
    details: {
      services: [
        {
          name: "Amazon Q Developer",
          links: [
            {
              title: "Using Amazon Q Developer on the command line",
              url: "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line.html",
              description: "This link provides instructions on how to use Amazon Q Developer on the command line."
            },
            {
              title: "GitLab Duo with Amazon Q",
              url: "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/gitlab-with-amazon-q.html",
              description: "This link provides information about using GitLab with Amazon Q."
            }
          ]
        },
        {
          name: "Amazon CodeCatalyst",
          links: [
            {
              title: "Developing workflow actions for Amazon CodeCatalyst (full Developer Guide)",
              url: "https://docs.aws.amazon.com/codecatalyst/latest/adk/action-development-intro.html",
              description: "This link provides a comprehensive guide to developing workflow actions for Amazon CodeCatalyst."
            },
            {
              title: "Set up CodeCatalyst projects with blueprints (User Guide)",
              url: "https://docs.aws.amazon.com/codecatalyst/latest/userguide/blueprints.html",
              description: "This link provides instructions on setting up CodeCatalyst projects with blueprints."
            },
            {
              title: "Add functionality to projects with extensions in CodeCatalyst (User Guide)",
              url: "https://docs.aws.amazon.com/codecatalyst/latest/userguide/extensions.html",
              description: "This link provides information about adding functionality to projects with extensions in CodeCatalyst."
            },
            {
              title: "Search for code, issues, projects, and users in CodeCatalyst (User Guide)",
              url: "https://docs.aws.amazon.com/codecatalyst/latest/userguide/search.html",
              description: "This link provides instructions on searching for code, issues, projects, and users in CodeCatalyst."
            },
            {
              title: "Troubleshooting problems with search in CodeCatalyst (User Guide)",
              url: "https://docs.aws.amazon.com/codecatalyst/latest/userguide/troubleshooting-search.html",
              description: "This link provides troubleshooting tips for search in CodeCatalyst."
            },
            {
              title: "Troubleshooting problems with extensions (User Guide)",
              url: "https://docs.aws.amazon.com/codecatalyst/latest/userguide/troubleshooting-extensions.html",
              description: "This link provides troubleshooting tips for extensions in CodeCatalyst."
            },
            {
              title: "Using Amazon Q to choose a blueprint when creating a project or adding functionality (User Guide)",
              url: "https://docs.aws.amazon.com/codecatalyst/latest/userguide/getting-started-project-assistance.html#getting-started-project-assistance-create-apply-bp",
              description: "This link provides instructions on using Amazon Q to choose a blueprint when creating a project or adding functionality."
            },
            {
              title: "Administering billing (Administrator Guide)",
              url: "https://docs.aws.amazon.com/codecatalyst/latest/adminguide/managing-billing.html",
              description: "This link provides information about administering billing for Amazon CodeCatalyst."
            }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "AWS Marketing Blog Posts",
    description: "Authored marketing blog posts for AWS services, highlighting new features and capabilities in Amazon CodeCatalyst and Amazon Q.",
    fullDescription: "As a programmer writer at AWS, I create marketing blog posts that announce new features and capabilities. These posts focus on Amazon CodeCatalyst and Amazon Q, helping customers understand and leverage new functionalities in their development workflows.",
    image: "/images/aws-marketing.jpg",
    tags: ["Technical Writing", "Marketing", "AWS", "DevOps", "Cloud", "Content Strategy", "AI/ML", "Developer Relations"],
    link: "https://aws.amazon.com/blogs/",
    details: {
      services: [
        {
          name: "Amazon CodeCatalyst Blog Posts",
          links: [
            {
              title: "Amazon CodeCatalyst now allows conversion of source repositories to custom blueprints",
              url: "https://aws.amazon.com/about-aws/whats-new/2024/06/amazon-codecatalyst-conversion-source-repositories-custom-blueprints/",
              description: "This link provides information about the new feature in Amazon CodeCatalyst."
            },
            {
              title: "Amazon CodeCatalyst now supports GitHub Cloud and Bitbucket Cloud with Amazon Q",
              url: "https://aws.amazon.com/about-aws/whats-new/2024/06/amazon-codecatalyst-github-cloud-bitbucket-cloud-q/",
              description: "This link provides information about the new feature in Amazon CodeCatalyst."
            },
            {
              title: "CodeCatalyst allows customers to use Amazon Q Developer to choose a blueprint",
              url: "https://aws.amazon.com/about-aws/whats-new/2024/06/amazon-codecatalyst-amazon-q-blueprint/",
              description: "This link provides information about the new feature in Amazon CodeCatalyst."
            },
            {
              title: "Amazon CodeCatalyst now supports Bitbucket Cloud source code repositories",
              url: "https://aws.amazon.com/about-aws/whats-new/2024/06/amazon-codecatalyst-bitbucket-cloud-source-code-repositories/",
              description: "This link provides information about the new feature in Amazon CodeCatalyst."
            },
            {
              title: "Introducing the AWS PDK blueprints in Amazon CodeCatalyst",
              url: "https://aws.amazon.com/about-aws/whats-new/2024/04/aws-pdk-blueprints-amazon-codecatalyst/",
              description: "This link provides information about the new feature in Amazon CodeCatalyst."
            }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "ABC7 Eyewitness News Coverage",
    description: "Produced and wrote news articles covering breaking news, weather, health, sports, and community events across Chicago and surrounding areas.",
    fullDescription: "As a digital producer at ABC7 Chicago, I wrote and edited news articles covering a wide range of topics from breaking news to community events. I transformed reporter scripts, official statements, and reports into engaging web content while maintaining journalistic integrity and AP style guidelines.",
    image: "/images/news.webp",
    tags: ["Journalism", "Digital Media", "Content Writing", "Breaking News", "AP Style", "Web Content", "News Production", "Community Coverage"],
    link: "https://abc7chicago.com/",
    details: {
      services: [
        {
          name: "Breaking News & Public Safety",
          links: [
            {
              title: "Naperville residents share harrowing tornado stories after severe storms strike overnight",
              url: "https://abc7chicago.com/weather/naperville-residents-reflect-on-experience-face-major-damage-following-overnight-tornado/10816587/",
              description: "This link provides information about the tornado incident in Naperville."
            },
            {
              title: "Rockton Chemtool explosion causes major fire, smoke at chemical plant; evacuation ordered in area",
              url: "https://abc7chicago.com/rockton-chemical-plant-explosion-causes-major-fire-smoke/10788212/",
              description: "This link provides information about the chemical plant explosion in Rockton."
            },
            {
              title: "Search continues for boy, 12, with autism last seen on video leaving Hammond hotel",
              url: "https://abc7chicago.com/missing-boy-autism-hammond-indiana-hotel/10643645/",
              description: "This link provides information about the missing boy with autism in Hammond."
            },
            {
              title: "Fatal police-involved shooting in Little Village leaves 1 dead, 1 in custody",
              url: "https://abc7chicago.com/1-dead-1-in-custody-after-police-involved-shooting-in-little-village/10456094/",
              description: "This link provides information about the fatal police-involved shooting in Little Village."
            },
            {
              title: "Nearly 40 guns stolen from Winthrop Harbor store, robbers likely visited store before, police say",
              url: "https://abc7chicago.com/nearly-40-guns-stolen-from-winthrop-harbor-store-police-say/7832566/",
              description: "This link provides information about the theft of guns from Winthrop Harbor."
            },
            {
              title: "Lake County mothers hold rally against police brutality in Waukegan",
              url: "https://abc7chicago.com/community-events/lake-county-mothers-hold-rally-against-police-brutality/7527720/",
              description: "This link provides information about the rally against police brutality in Waukegan."
            }
          ]
        },
        {
          name: "Health & COVID-19",
          links: [
            {
              title: "Illinois COVID-19 Update: IL reports 2,942 new coronavirus cases, 16 deaths",
              url: "https://abc7chicago.com/health/il-reports-2942-new-covid-cases-16-deaths/10507735/",
              description: "This link provides information about the COVID-19 update in Illinois."
            },
            {
              title: "Chicago COVID-19 vaccine distribution improves among residents of color, Mayor Lightfoot says",
              url: "https://abc7chicago.com/covid-vaccine-illinois-chicago-weather-mayor-lori-lightfoot/10353185/",
              description: "This link provides information about the COVID-19 vaccine distribution in Chicago."
            },
            {
              title: "COVID vaccine supersite opens at Malcolm X College for non-hospital health care workers",
              url: "https://abc7chicago.com/health/covid-vaccine-supersite-opens-at-malcolm-x-college/9165674/",
              description: "This link provides information about the COVID-19 vaccine supersite at Malcolm X College."
            },
            {
              title: "Chicago minority communities skeptical about COVID-19 vaccine",
              url: "https://abc7chicago.com/health/minority-communities-skeptical-about-covid-19-vaccine/8616935/",
              description: "This link provides information about the skepticism about the COVID-19 vaccine in Chicago."
            },
            {
              title: "Investigations underway at Illinois Veterans Home in LaSalle after 27 COVID-19 deaths",
              url: "https://abc7chicago.com/health/investigations-underway-at-illinois-veterans-home-in-lasalle-after-27-covid-19-deaths/8235278/",
              description: "This link provides information about the investigations at the Illinois Veterans Home."
            },
            {
              title: "Expert provides easy ways to incorporate heart-healthy foods",
              url: "https://abc7chicago.com/food/finding-easy-ways-to-incorporate-heart-healthy-foods/10353586/",
              description: "This link provides information about incorporating heart-healthy foods."
            },
            {
              title: "Consumer Reports: How to find affordable medication, avoid health coverage issues",
              url: "https://abc7chicago.com/health/consumer-reports-find-affordable-medication-avoid-coverage-issues/9139939/",
              description: "This link provides information about finding affordable medication and avoiding health coverage issues."
            }
          ]
        },
        {
          name: "Weather & Environment",
          links: [
            {
              title: "Winter Storm Watch in effect through Tuesday for Chicago area, suburban counties",
              url: "https://abc7chicago.com/weather/up-to-1-ft-snow-expected-in-some-areas-in-coming-days/9963230/",
              description: "This link provides information about the Winter Storm Watch in effect for the Chicago area."
            },
            {
              title: "Dangerous Lake Michigan waves knock down bicyclist along Lakefront Trail",
              url: "https://abc7chicago.com/weather/big-waves-knock-down-bicyclist-along-bike-trail/8387273/",
              description: "This link provides information about the dangerous waves on Lake Michigan."
            },
            {
              title: "Chicago recycling ordinance not enforced, IG audit shows; city made 'no attempt' to enforce",
              url: "https://abc7chicago.com/community-events/city-made-no-attempt-to-enforce-recycling-ordinance-city-inspector-general/8472355/",
              description: "This link provides information about the recycling ordinance in Chicago."
            },
            {
              title: "Boil order lifted for Beverly Morgan Park after South Side pumping station goes offline",
              url: "https://abc7chicago.com/chicago-water-pump-south-side-beverly/10593403/",
              description: "This link provides information about the boil order lifted for Beverly Morgan Park."
            }
          ]
        },
        {
          name: "Sports & Entertainment",
          links: [
            {
              title: "Chicago White Sox welcoming fans back at Guaranteed Rate Field for 1st time since 2019 for home opener",
              url: "https://abc7chicago.com/chicago-white-sox-home-opener-guaranteed-rate-field-news/10497280/",
              description: "This link provides information about the home opener for the Chicago White Sox."
            },
            {
              title: "Chicago Cubs Opening Day 2021: Wrigley Field welcomes back fans for first time in 2 years",
              url: "https://abc7chicago.com/sports/cubs-hosting-fans-for-first-time-in-2-years-for-opening-day-/10466796/",
              description: "This link provides information about the Chicago Cubs Opening Day 2021."
            },
            {
              title: "NCAA Tournament: Loyola Ramblers to take on Oregon State in Sweet 16 after upset win over Illinois",
              url: "https://abc7chicago.com/ncaa-tournament-2021-loyola-chicago-basketball-illinois-schedule/10440141/",
              description: "This link provides information about the NCAA Tournament game between Loyola and Oregon State."
            },
            {
              title: "IHSA sets schedule for remainder of 2021 school year as COVID metrics improve",
              url: "https://abc7chicago.com/sports/ihsa-sets-schedule-for-remainder-of-school/10073299/",
              description: "This link provides information about the IHSA schedule for the remainder of the 2021 school year."
            }
          ]
        },
        {
          name: "Community & Culture",
          links: [
            {
              title: "Chicago area nonprofit organization works to create first aid station in Uganda",
              url: "https://abc7chicago.com/chicago-il-non-profit-organization-first-aid-uganda/10775181/",
              description: "This link provides information about the Chicago area nonprofit organization working to create a first aid station in Uganda."
            },
            {
              title: "Our Chicago: Mentoring children, keeping them safe from violence",
              url: "https://abc7chicago.com/our-chicago-mentoring-children-keeping-them-safe-from-violence/10709598/",
              description: "This link provides information about mentoring children and keeping them safe from violence."
            },
            {
              title: "Obama Foundation unveils excerpt to be displayed on exterior of presidential center on South Side",
              url: "https://abc7chicago.com/society/excerpt-for-obama-presidential-center-museum-unveiled-/10395259/",
              description: "This link provides information about the Obama Presidential Center Museum unveiling an excerpt."
            },
            {
              title: "'Gateway' mural aims to beautify Englewood commercial district on South Side",
              url: "https://abc7chicago.com/community-events/gateway-mural-aims-to-beautify-englewood-commercial-district/7525681/",
              description: "This link provides information about the 'Gateway' mural in Englewood."
            },
            {
              title: "Chicago Latino Theater Alliance drive-in event supports artists during COVID-19 pandemic",
              url: "https://abc7chicago.com/community-events/chicago-latino-theater-alliance-drive-in-event-supports-struggling-artists/7003742/",
              description: "This link provides information about the Chicago Latino Theater Alliance drive-in event supporting struggling artists during the COVID-19 pandemic."
            },
            {
              title: "Mayor Lightfoot shares video on safely celebrating Halloween 2020 amid coronavirus pandemic",
              url: "https://abc7chicago.com/community-events/mayor-lightfoot-shares-video-on-safely-celebrating-halloween-2020/7340095/",
              description: "This link provides information about the video shared by Mayor Lightfoot on safely celebrating Halloween 2020."
            }
          ]
        },
        {
          name: "Education & Politics",
          links: [
            {
              title: "CPS parents express frustration, concerns amid battle between CTU, district over students returning to classrooms during COVID",
              url: "https://abc7chicago.com/education/cps-parents-express-concerns-amid-battle-between-ctu-district/10073787/",
              description: "This link provides information about the concerns of CPS parents regarding students returning to classrooms during COVID."
            },
            {
              title: "Evanston protestors demand Northwestern University abolish police department",
              url: "https://abc7chicago.com/education/protestors-demand-northwestern-university-abolish-police-department-/7173368/",
              description: "This link provides information about the protestors demanding Northwestern University abolish its police department."
            },
            {
              title: "Illinois tax amendment fact check sheds light on proposal, BGA says",
              url: "https://abc7chicago.com/politics/il-tax-amendment-fact-check-sheds-light-on-proposal-bga/6915401/",
              description: "This link provides information about the Illinois tax amendment fact check and the BGA's stance."
            },
            {
              title: "President Trump, Joe Biden hold rallies in battleground states ahead of Election Day",
              url: "https://abc7chicago.com/politics/trump-supporters-rod-blagojevich-show-support-at-il-gop-rally/7558007/",
              description: "This link provides information about the rallies held by President Trump and Joe Biden in battleground states ahead of Election Day."
            }
          ]
        }
      ]
    }
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
