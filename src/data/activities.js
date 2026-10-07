export const activities = [
  {
    id: 0,
    slug: 'iskolar-express-egov-hackathon-2026',
    name: 'Iskolar Express - eGov Hackathon 2026',
    description: "Our team's eGov Hackathon solution—Iskolar Express, a centralized web-app scholarship management platform that streamlines stipend processing from submission to release by allowing students to find a suitable scholarship for their needs and conveniently apply online.",
    readTimeMinutes: 5,
    length: 'July 2026',
    
    thumbnail: {
      url: iskolarExpressThumbnail,
      mp4Url: '/animations/iskolarAnimation.mp4',
      webmUrl: '/animations/iskolarAnimation.webm',
      alt: `eGov Hackathon 2026`,
    },

    intro: {
      url: iskolarExpressMain,
      // mp4Url: 'iskolarAnimation.mp4',
      // webmUrl: 'iskolarAnimation.webm',
      alt: 'Intro visual description',
    },

    tags: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'React', category: 'Frontend' },
      { name: 'Supabase', category: 'Database' },
    ],
    cta: {
      label: 'View Event Coverage',
      url: 'https://mb.com.ph/2026/07/22/egovph-hackathon-opens-government-innovation-to-filipino-tech-talents',
      isExternal: true,
    },
    callout: {
      isNDA: false,
      ndaMessage: '',
    },
    
    roles: [
      {
        title: 'UI/UX Designer', 
        tasks: ['UX Benchmarking', 'Design System Creation', 'Wireframing', 'Prototyping', 'UI Design'],
        tools: ['Figma'],
      },
      {
        title: 'Graphic Designer', 
        tasks: ['Logo Design', 'Brand Identity', 'Short Animation Demo (used as a part of the actual presentation video)'],
        tools: ['Affinity Designer', 'Rive'],
      },
    ],
    
    sections: [
      {
        id: 'project',
        title: 'Background & Design Process',
        description: "As the sole designer on our team, I was tasked with designing role-tailored UI where features and permissions are tied to roles and workflows within a strict, single-sprint timeframe (~1–2 weeks).\n\nFrom the lessons learned from past projects, I shifted away from assumption-led decisions. Before jumping into wireframes, we conducted a rapid, informal UX benchmark of competitor platforms and adjacent systems sharing our core functional principles; adhering to a fundamental UX design principle—Jakob's Law.\n\n'Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know' (Yablonski, n.d., Key Takeaways section, para. 1). This informed our design decisions, ensuring that our solution was both innovative and aligned with established usability norms, one of these are:\n\n1.) Common patterns and user expectations - Instead of reinventing interaction patterns, we identified common conventions across these systems. By adopting established UX patterns, we ensured that users across all 4 roles could navigate the platform with zero learning curve.",
        images: [
          {
            url: iskolarExpressAdminLogin,
            alt: 'Admin Side Preview',
            caption: 'Figure 1: Admin Side Preview',
          },
          {
            url: iskolarExpressOverview,
            alt: 'Mobile Application Preview',
            caption: 'Figure 1.1: Mobile Application Preview',
          },
        ],
      },
    ],
    
    cards: [
      {
        title: 'Preserving UX Amidst Expanding Complexity',
        description: 'When shifting requirements expanded our feature set late in the project, I prevented layout issues and revisions by establishing modular UI components and reusable layout structures. This enabled our team to seamlessly integrate new feature requests and complex data inputs without redesigning core layouts. I ensured that the final application remained intuitive and readable for users despite the increased product scope as  the adapting layouts are able to absorb high data density on the fly.',
      },
    ],
  },
]