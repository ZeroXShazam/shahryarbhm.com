/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shahryar Bahmaei's Portfolio",
  description:
    "A problem-solving, caffeine-fueled developer passionate about building scalable APIs, AI powered vision systems and cryptographic protocols.",
  og: {
    title: "Shahryar Bahmaei Portfolio",
    type: "website",
    url: "https://shahryarbhm.com/",
  },
};

//Home Page
const greeting = {
  title: "Shahryar Bahmaei",
  logo_name: "ShahryarBahmaei",
  nickname: "Shazam",
  subTitle:
    "A problem-solving, caffeine-fueled developer passionate about building scalable APIs, AI powered vision systems and cryptographic protocols. Specialized in backend development, IoT, machine learning and security.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/zeroxshazam/shahryarbhm.com",
  githubProfile: "https://github.com/zeroxshazam",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/zeroxshazam",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shahryarbhm/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shahryarbahmeie@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/zeroxshazam",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=Vn_HXG0AAAAJ&hl=en",
    fontAwesomeIcon: "fa-graduation-cap", // Reference https://fontawesome.com/icons/graduation-cap?style=solid
    backgroundColor: "#4285F4", // Reference https://simpleicons.org/?q=google
  },
];

const skills = {
  data: [
    {
      title: "Smart Contracts & Backend",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building scalable APIs and backend services using NestJS, Node.js, and Express.js",
        "⚡ Experience with TypeScript, PostgreSQL, GraphQL, and REST API design",
        "⚡ Implementing secure authentication flows, logging, and monitoring systems",
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos-solidity",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos-typescript-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "logos-nestjs",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos-nodejs-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos-graphql",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web3 & Blockchain",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building decentralized applications and smart contracts",
        "⚡ Experience with Ethereum ecosystem, L2 scaling, ZKPs, and DeFi protocols",
        "⚡ Implementing on-chain data streaming and cross-chain communication",
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos-ethereum",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Arbitrum",
          fontAwesomeClassname: "logos-arbitrum-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Chainlink",
          fontAwesomeClassname: "logos-chainlink",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "WalletConnect",
          fontAwesomeClassname: "logos-walletconnect",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Zircuit",
          fontAwesomeClassname: "logos-zircuit",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "AI, Hardware & IoT",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building IoT devices and embedded systems with ESP32 and Arduino",
        "⚡ Implementing computer vision models and real-time FFT processing",
        "⚡ Experience with TensorFlow, OpenCV, and smart home automation",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos-opencv",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ESP32",
          fontAwesomeClassname: "logos-esp32",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "logos-arduino",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Infrastructure & Frontend",
      fileName: "DesignImg",
      skills: [
        "⚡ Building scalable infrastructure with Docker, Kubernetes, and CI/CD",
        "⚡ Developing modern frontend applications with React, Next.js, and Tailwind CSS",
        "⚡ Implementing DevOps practices and cloud infrastructure",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos-docker-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos-kubernetes",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "logos-react",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "logos-nextjs-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos-tailwindcss-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "ETHGlobal",
      iconifyClassname: "simple-icons:ethereum",
      style: {
        color: "#627EEA",
      },
      profileLink: "https://ethglobal.com/users/0xshazam",
    },
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/zeroxshazam",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/shahryarbhm/",
    },
    {
      siteName: "Twitter",
      iconifyClassname: "simple-icons:twitter",
      style: {
        color: "#1DA1F2",
      },
      profileLink: "https://twitter.com/zeroxshazam",
    },
    {
      siteName: "Portfolio",
      iconifyClassname: "simple-icons:portfolio",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://shahryarbhm.com",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "TU Wien",
      subtitle: "M.Sc. in Computer Engineering",
      logo_path: "TU Wien_id6ZKs5Upj_0.png",
      alt_name: "TU Wien",
      duration: "Summer 2025 - Present",
      descriptions: [
        "⚡ Currently pursuing Master's degree in Computer Engineering at TU Wien",
        "⚡ Focus on advanced computer engineering and research",
        "⚡ Located in Vienna, Austria",
      ],
      website_link: "https://www.tuwien.at/",
    },
    {
      title: "Shiraz University",
      subtitle: "B.Sc. in Computer Engineering",
      logo_path: "shiraz_uni.jpeg",
      alt_name: "Shiraz University",
      duration: "2016 - 2022",
      descriptions: [
        "⚡ Member of Shiraz University Robotics Association (Namira Team)",
        "⚡ Participated in RoboCup International Competitions (2018-2019)",
        "⚡ Qualified for World Finals in Sydney, Australia; achieved Top 8 rank in Montreal, Canada",
        "⚡ B.Sc. University Entrance Exam: Ranked in top 3% among over 160,000 participants",
        "⚡ NODET Graduate: Studied at the National Organization for Development of Exceptional Talent",
      ],
      website_link: "https://shirazu.ac.ir/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Ethereum Development",
      subtitle: "- Ethereum Foundation",
      logo_path: "github_logo.png",
      certificate_link: "https://ethereum.org/en/developers/",
      alt_name: "Ethereum Foundation",
      color_code: "#8C151599",
    },
    {
      title: "Blockchain Security",
      subtitle: "- ConsenSys Academy",
      logo_path: "github_logo.png",
      certificate_link: "https://consensys.net/academy/",
      alt_name: "ConsenSys Academy",
      color_code: "#00000099",
    },
    {
      title: "IoT Development",
      subtitle: "- Arduino",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.arduino.cc/",
      alt_name: "Arduino",
      color_code: "#0C9D5899",
    },
    {
      title: "Computer Vision",
      subtitle: "- OpenCV",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://opencv.org/",
      alt_name: "OpenCV",
      color_code: "#1F70C199",
    },
    {
      title: "NestJS Development",
      subtitle: "- NestJS",
      logo_path: "github_logo.png",
      certificate_link: "https://nestjs.com/",
      alt_name: "NestJS",
      color_code: "#D83B0199",
    },
    {
      title: "TypeScript",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.typescriptlang.org/",
      alt_name: "Microsoft",
      color_code: "#1F70C199",
    },
    {
      title: "Docker",
      subtitle: "- Docker Inc.",
      logo_path: "github_logo.png",
      certificate_link: "https://www.docker.com/",
      alt_name: "Docker",
      color_code: "#00000099",
    },
    {
      title: "PostgreSQL",
      subtitle: "- PostgreSQL",
      logo_path: "github_logo.png",
      certificate_link: "https://www.postgresql.org/",
      alt_name: "PostgreSQL",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Leadership and Community",
  description:
    "I have worked with evolving startups as a Backend Developer, IoT Engineer, and Full Stack Developer. I love building innovative solutions and am actively involved in the Web3 community.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Leadership",
      work: true,
      experiences: [
        {
          title: "Full Stack Software Engineer",
          company: "Combinder.io",
          company_url: "https://combinder.io/",
          logo_path: "github_logo.png",
          duration: "2025 - present",
          location: "Remote",
          description:
            "Working as a full stack software engineer, developing scalable web applications and services. Building end-to-end solutions using modern technologies and best practices.",
          color: "#4285F4",
        },
        {
          title: "Co-Founder",
          company: "Decycle.io",
          company_url: "https://decycle.io/",
          logo_path: "github_logo.png",
          duration: "2024 - present",
          location: "Remote",
          description:
            "Co-founded Decycle.io, a decentralized recycling ecosystem that creates a closed-loop economy. Built a gamified platform where users earn $TRASH tokens by recycling, stakers fund smart cans, and collectors gather materials—all while making measurable environmental impact worldwide.",
          color: "#0879bf",
        },
        {
          title: "Co-Founder",
          company: "Chromamind.tech",
          company_url: "https://chromamind.tech/",
          logo_path: "github_logo.png",
          duration: "2024 - present",
          location: "Remote",
          description:
            "Co-founded Chromamind.tech, a revolutionary device bridging personal wellness with digital ownership. Built a full-stack solution with custom hardware (ESP32), real-time FFT audio visualization, World Mini App interface, and on-chain logic on Zircuit with Chainlink VRF to create provably rare digital collectibles from personalized light and sound sessions.",
          color: "#1F70C1",
        },
        {
          title: "Organizing Team Member",
          company: "Vienna Blockchain Week",
          company_url: "https://viennablockchainweek.org/",
          logo_path: "github_logo.png",
          duration: "2024 - present",
          location: "Vienna, Austria",
          description:
            "Contributed to the core organizing team for one of Austria's largest international technology conferences, helping coordinate events and logistics.",
          color: "#0879bf",
        },
        {
          title: "Back-End Developer",
          company: "Delinternet",
          company_url: "https://delinternet.com/",
          logo_path: "del_internet.jpg",
          duration: "2023 - 2024",
          location: "Remote",
          description:
            "Worked as a remote software engineer, developing scalable backend systems and tools for international enterprise clients. Developed TypeScript SDKs and backend services using Node.js and Express.js, optimizing API integrations and data handling with PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "IoT and Computer Vision Engineer",
          company: "Offrang",
          company_url: "https://offrang.com/",
          logo_path: "microsoft_logo.png",
          duration: "2022 - 2023",
          location: "Vienna, Austria",
          description:
            "Configured IoT devices with OpenHAB and KNX for smart home automation. Built Dockerized applications for Linux devices and implemented computer vision models (CNN, RCNN, LSTM) for object grasping and human activity recognition.",
          color: "#9b1578",
        },
        {
          title: "Full Stack Developer",
          company: "Emigral",
          company_url: "https://emigral.com/",
          logo_path: "github_logo.png",
          duration: "2020 - 2022",
          location: "Vienna, Austria",
          description:
            "Developed web applications using NestJS, MongoDB, and React Native, focusing on performance and UI/UX design. Implemented a Redis-based queuing system for efficient task management.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects showcase a diverse range of technologies from IoT and computer vision to blockchain and Web3 applications. I specialize in building end-to-end solutions that solve real-world problems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "namira-soccer-2020",
      name: "Namira Soccer 2D Simulation Team Description Paper 2020",
      createdAt: "2020-06-15T00:00:00Z",
      description:
        "Co-author of team description paper for RoboCup 2D Soccer Simulation League",
      url: "https://robocup.org/",
    },
  ],
};

// Startup Projects
const bigProjects = {
  title: "Featured Projects",
  subtitle: "Innovative solutions built with cutting-edge technology",
  projects: [
    {
      image: "projects_image.svg",
      link: "https://decycle.io",
      title: "Decycle",
      description:
        "IoT-powered smart trash can with automatic waste separation and blockchain rewards",
    },
    {
      image: "projects_image.svg",
      link: "https://chromamind.tech",
      title: "ChromaMind",
      description:
        "Bio-interface device for personalized wellness experiences with NFT collectibles",
    },
    {
      image: "projects_image.svg",
      link: "https://vector.eth",
      title: "Vector",
      description:
        "IoT-powered on-chain shipping monitor with real-time sensor data streaming",
    },
    {
      image: "projects_image.svg",
      link: "https://telegramhub.eth",
      title: "TelegramHub",
      description:
        "Decentralized data vault with encrypted storage on Avail blockchain",
    },
    {
      image: "projects_image.svg",
      link: "https://aivs.eth",
      title: "AiVS",
      description:
        "Decentralized justice system with multi-AI agents on EigenLayer",
    },
    {
      image: "projects_image.svg",
      link: "https://wenpay.eth",
      title: "WenPay",
      description:
        "NFC-enabled stablecoin wallet with KYC compliance and secure operations",
    },
    {
      image: "projects_image.svg",
      link: "https://zking.eth",
      title: "ZKing",
      description:
        "Privacy-preserving review system using Zero-Knowledge Proofs",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shahryar.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web3, IoT, Computer Vision, Backend Development, and Blockchain applications.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blog.shahryarbhm.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Milky Way Galaxy, Solar System, Planet Earth, Europe, Austria, Vienna",
    locality: "Vienna",
    country: "Austria",
    region: "Vienna",
    postalCode: "1040",
    streetAddress: "Milky Way Galaxy",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Vienna",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  bigProjects,
  contactPageData,
};
