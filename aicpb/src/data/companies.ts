export interface Company {
  id: string;
  name: string;
  description: string;
  slug: string;
  mau: number;
  mauChange: number;
  websiteViews: number;
  avgTimeOnSite: string;
  logo?: string;
  tags: string[];
  category: string;
  financials: Financial[];
  employees: Employee[];
  news: NewsItem[];
}

export interface Financial {
  announcedDate: string;
  transactionName: string;
  numberOfInvestors: number;
  moneyRaised: string;
  leadInvestors: string[];
}

export interface Employee {
  name: string;
  currentRole: string;
  previousRoles: string[];
  education: string;
}

export interface NewsItem {
  title: string;
  date: string;
  summary: string;
  link: string;
}

export const companies: Company[] = [
  {
    id: "1",
    name: "OpenAI",
    description: "AI research and deployment company behind ChatGPT and GPT models",
    slug: "openai",
    mau: 180000000,
    mauChange: 15.2,
    websiteViews: 1200000000,
    avgTimeOnSite: "8:45",
    category: "General",
    tags: ["AI", "Language Models", "Research"],
    financials: [
      {
        announcedDate: "2023-01-23",
        transactionName: "Series C",
        numberOfInvestors: 3,
        moneyRaised: "$10.3B",
        leadInvestors: ["Microsoft", "Khosla Ventures"]
      }
    ],
    employees: [
      {
        name: "Sam Altman",
        currentRole: "CEO",
        previousRoles: ["President of Y Combinator"],
        education: "Stanford University"
      }
    ],
    news: [
      {
        title: "OpenAI releases GPT-4 Turbo",
        date: "2024-11-06",
        summary: "New model with improved performance and lower costs",
        link: "https://openai.com/blog/gpt-4-turbo"
      }
    ]
  },
  {
    id: "2",
    name: "Anthropic",
    description: "AI safety company focused on developing safe, beneficial AI systems",
    slug: "anthropic",
    mau: 25000000,
    mauChange: 45.8,
    websiteViews: 150000000,
    avgTimeOnSite: "6:30",
    category: "General",
    tags: ["AI Safety", "Large Language Models", "Research"],
    financials: [
      {
        announcedDate: "2023-05-22",
        transactionName: "Series C",
        numberOfInvestors: 2,
        moneyRaised: "$450M",
        leadInvestors: ["Spark Capital", "Google"]
      }
    ],
    employees: [
      {
        name: "Dario Amodei",
        currentRole: "CEO",
        previousRoles: ["VP of Research at OpenAI"],
        education: "Princeton University"
      }
    ],
    news: [
      {
        title: "Anthropic launches Claude 3",
        date: "2024-03-04",
        summary: "New family of AI models with enhanced capabilities",
        link: "https://anthropic.com/news/claude-3-family"
      }
    ]
  },
  {
    id: "3",
    name: "Midjourney",
    description: "AI-powered image generation platform for creative professionals",
    slug: "midjourney",
    mau: 16000000,
    mauChange: 12.3,
    websiteViews: 45000000,
    avgTimeOnSite: "12:15",
    category: "Growth",
    tags: ["Image Generation", "Creative AI", "Art"],
    financials: [],
    employees: [
      {
        name: "David Holz",
        currentRole: "CEO & Founder",
        previousRoles: ["Co-founder of Leap Motion"],
        education: "University of North Carolina"
      }
    ],
    news: [
      {
        title: "Midjourney v6 now available",
        date: "2024-01-15",
        summary: "Enhanced image quality and new features for creative workflows",
        link: "https://midjourney.com/v6"
      }
    ]
  },
  {
    id: "4",
    name: "Stability AI",
    description: "Open-source AI company behind Stable Diffusion and other generative models",
    slug: "stability-ai",
    mau: 8500000,
    mauChange: -5.2,
    websiteViews: 32000000,
    avgTimeOnSite: "7:20",
    category: "Downloads",
    tags: ["Open Source", "Image Generation", "Generative AI"],
    financials: [
      {
        announcedDate: "2022-10-17",
        transactionName: "Series A",
        numberOfInvestors: 5,
        moneyRaised: "$101M",
        leadInvestors: ["Coatue", "Lightspeed Venture Partners"]
      }
    ],
    employees: [
      {
        name: "Emad Mostaque",
        currentRole: "Former CEO",
        previousRoles: ["Hedge Fund Manager"],
        education: "Oxford University"
      }
    ],
    news: [
      {
        title: "Stability AI releases SDXL Turbo",
        date: "2023-11-28",
        summary: "Faster image generation with improved quality",
        link: "https://stability.ai/news/sdxl-turbo"
      }
    ]
  },
  {
    id: "5",
    name: "Runway",
    description: "AI-powered creative tools for video editing and generation",
    slug: "runway",
    mau: 4200000,
    mauChange: 28.7,
    websiteViews: 18000000,
    avgTimeOnSite: "15:45",
    category: "Subscription Revenue",
    tags: ["Video Generation", "Creative Tools", "AI"],
    financials: [
      {
        announcedDate: "2023-06-29",
        transactionName: "Series D",
        numberOfInvestors: 4,
        moneyRaised: "$141M",
        leadInvestors: ["Google Ventures", "Felicis"]
      }
    ],
    employees: [
      {
        name: "Cristóbal Valenzuela",
        currentRole: "CEO & Co-founder",
        previousRoles: ["Designer at Facebook"],
        education: "Universidad Católica de Chile"
      }
    ],
    news: [
      {
        title: "Runway introduces Gen-3 Alpha",
        date: "2024-06-17",
        summary: "Next-generation video synthesis model with improved fidelity",
        link: "https://runway.com/gen-3"
      }
    ]
  }
];