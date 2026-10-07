import ticaThumbnail from '/src/assets/thumbnails/ticaThumbnail.webp'
import excellThumbnail from '/src/assets/thumbnails/excellThumbnail.webp'
import niicheThumbnail from '/src/assets/thumbnails/niicheThumbnail.webp'
import ootuThumbnail from '/src/assets/thumbnails/ootuThumbnail.webp'
import iskolarExpressThumbnail from '/src/assets/thumbnails/iskolarExpressThumbnail.webp'

import iskolarExpressOverview from '/src/assets/iskolarExpressAssets/iskolarExpressOverview.webp'
import iskolarExpressMain from '/src/assets/iskolarExpressAssets/iskolarExpressMain.webp'
import iskolarExpressAdminLogin from '/src/assets/iskolarExpressAssets/iskolarExpressAdminLogin.webp'

import ootuWireframes from '@/assets/ootuAssets/ootuWireframes.webp'
import ootuOOUX from '@/assets/ootuAssets/ootuOOUX.webp'
import ootuDraft from '@/assets/ootuAssets/ootuDraft.webp'
import ootuDraftFix from '@/assets/ootuAssets/ootuDraftFix.webp'
import grimoireFirstPage from '@/assets/ootuAssets/grimoireFirstPage.webp'
import grimoireSecondPage from '@/assets/ootuAssets/grimoireSecondPage.webp'
import ootuInventory from '@/assets/ootuAssets/ootuInventory.webp'
import ootuInventoryFlow from '@/assets/ootuAssets/ootuInventoryFlow.webp'
import ootuAssetSet from '@/assets/ootuAssets/ootuAssetSet.webp'
import ootuExplorations from '@/assets/ootuAssets/ootuExplorations.webp'

import niicheConcept from '@/assets/niicheAssets/niicheConcept.webp'
import niicheFeatures from '@/assets/niicheAssets/niicheFeatures.webp'
import niicheDraft from '@/assets/niicheAssets/niicheDraft.webp'
import niicheFinalDraft from '@/assets/niicheAssets/niicheFinalDraft.webp'
import niicheHero from '@/assets/niicheAssets/niicheHero.webp'
import niicheCommunity from '@/assets/niicheAssets/niicheCommunity.webp'

import excellHero from '@/assets/excellAssets/excellHero.webp'
import excellHero1 from '@/assets/excellAssets/excellHero1.webp'
import excellCardDraft from '@/assets/excellAssets/excellCardDraft.webp'
import excellCardConcepts from '@/assets/excellAssets/excellCardConcepts.webp'
import excellCardFinal from '@/assets/excellAssets/excellCardFinal.webp'
import excellCardLive from '@/assets/excellAssets/excellCardLive.webp'
import excellGuide from '@/assets/excellAssets/excellGuide.webp'
import excellFile from '@/assets/excellAssets/excellFile.webp'
import excellMetric from '@/assets/excellAssets/excellMetric.webp'

import ticaDraft from '@/assets/ticaAssets/ticaDraft.webp'
import ticaDraft1 from '@/assets/ticaAssets/ticaDraft1.webp'
import ticaChallenge from '@/assets/ticaAssets/ticaChallenge.webp'
import ticaChallenge1 from '@/assets/ticaAssets/ticaChallenge1.webp'
import ticaLesson from '@/assets/ticaAssets/ticaLesson.webp'
import ticaReference from '@/assets/ticaAssets/ticaReference.webp'
import ticaAsset from '@/assets/ticaAssets/ticaAsset.webp'
import ticaColors from '@/assets/ticaAssets/ticaColors.webp'
import ticaFonts from '@/assets/ticaAssets/ticaFonts.webp'
import ticaDesign from '@/assets/ticaAssets/ticaDesign.webp'

export const studies = [
  {
    id: 0,
    slug: 'iskolar-express-egov-hackathon-2026',
    name: 'Iskolar Express - eGov Hackathon 2026',
    description: "Our team's eGov Hackathon solution—Iskolar Express, a centralized web-app scholarship management platform that streamlines stipend processing from submission to release by allowing students to find a suitable scholarship for their needs and conveniently apply and track their applications online.\n\nThe event was a two-day hackathon, held  at the SMX Convention Center Aura in Taguig City, Philippines, and was open to all Filipino tech talents. Our team was composed of 5 members, and each role had one person assigned (e.g., Frontend Developer, Backend Developer, Quality Assurance, etc.). I was the sole UI/UX designer on the team.",
    readTimeMinutes: 5,
    length: 'July 2026',
    award: '',
    
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
        tasks: ['UX Benchmarking', 'Design System Creation', 'Low-Fidelity Wireframing', 'High-Fidelity Wireframing', 'Prototyping',],
        tools: ['Figma'],
      },
      {
        title: 'Graphic Designer', 
        tasks: ['Logo Design', 'Brand Identity', 'Short Animation Demo (part of the actual presentation video)'],
        tools: ['Affinity Designer', 'Rive'],
      },
    ],
    
    sections: [
      {
        id: 'project',
        title: 'Background & Design Process',
        description: "I was tasked with designing role-tailored UI where features and permissions are tied to roles and workflows within a strict, single-sprint timeframe (~1–2 weeks).\n\nFrom the lessons learned from past projects, I shifted away from assumption-led decisions. Before jumping into wireframes, we conducted a rapid, informal UX benchmark of competitor platforms and adjacent systems sharing our core functional principles; adhering to a fundamental UX design principle—Jakob's Law.\n\n'Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know' (Yablonski, n.d., Key Takeaways section, para. 1). This informed our design decisions, ensuring that our solution was both innovative and aligned with established usability norms, one of these are:\n\n1.) Common patterns and user expectations - Instead of reinventing interaction patterns, we identified common conventions across these systems. By adopting established UX patterns, we ensured that users across all 4 roles could navigate the platform with zero learning curve.",
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
  {
    id: 1,
    slug: 'niiche-community-platform',
    name: 'Niche Community Platform',
    description: "A web-based community platform for niche interests, connecting like-minded individuals and fostering meaningful interactions. A 3-day timeline (online) competition with predefined branding guidelines with professional judges, held right after the end of my internship. The event brought together information technology students from all year levels.",
    readTimeMinutes: 5,
    length: 'June 2025',
    award: 'Champion, ISKOnnovation: EUREKA 2025 UI Design Competition',
    
    thumbnail: {
      url: niicheThumbnail,
      mp4Url: '/animations/niicheAnimation.webm',
      webmUrl: '/animations/niicheAnimation.webm',
      alt: `Niche Community Platform`,
    },

    intro: {
      // url: niicheFinalDraft,
      mp4Url: '/animations/niicheAnimation.webm',
      webmUrl: '/animations/niicheAnimation.webm',
      alt: 'Intro visual description',
    },

    tags: [
      { name: 'Figma', category: 'Design' },
    ],
    cta: {
      label: 'Read Official Brief',
      url: 'https://www.facebook.com/share/p/15piNvAXnY4/',
      isExternal: true,
    },
    callout: {
      isNDA: false,
      ndaMessage: '',
    },
    
    roles: [
      {
        title: 'UI/UX Designer (Solo)', 
        tasks: ['User Research', 'Low-Fidelity Wireframing', 'High-Fidelity Wireframing', 'Prototyping'],
        tools: ['Figma'],
      },
    ],
    
    sections: [
      {
        id: 'project',
        title: 'Background & Design Process',
        description: "High user engagement is the goal and discoverability is an essential factor for a content-rich platform, and with that in mind, I focused on solving two core problems: simplifying visual and information hierarchy and reducing information overload.\n\nTo tackle this, I first approached the handling of metadata and navigation as compactly and clearly as possible; see Figure 1. At first, I placed the search function within the top navigation bar, serving as a global search. However, To adhere to the single-page constraint, I prioritized contextual proximity over generic global placement.\n\nSince the feed is the core content container on the page, moving Search and Filter directly above the feed visually communicates to the user that their query immediately manipulates the content below it. It reduces cognitive distance by keeping control inputs right where the data renders.",
        images: [
          {
            url: niicheDraft,
            alt: 'First Draft of the Feed Page',
            caption: 'Figure 1: First Draft of the Feed Page',
          },
          {
            url: niicheFinalDraft,
            alt: 'Final Draft of the Feed Page',
            caption: 'Figure 1.1: Final Layout of the Feed Page',
          },
        ],
      },
    ],
    
    cards: [
      {
        title: 'Hindsight & Growth',
        description: 'In a time-constrained sprint, moving search to the feed felt like a logical shortcut to keep interactions tied to content. Looking back, adhering to Jakob’s Law—keeping search in its conventional top-navbar home—would have reduced initial friction. This trade-off taught me the importance of weighing contextual convenience against user mental models, a balance I now test early in my workflow.',
      },
      {
        title: 'Navigating Hard Constraints',
        description: 'Balancing a strict single-page event rule alongside a rapid delivery timeline forced me to make fast design hypotheses. While elevating "Create Post" into a fixed side panel solved persistent access, it reinforced how crucial early layout validation is. This experience laid the foundation for how I now approach design systems: moving from speed-driven assumptions to evidence-backed iteration.',
      },
      {
        title: 'A Benchmark, Not a Ceiling',
        description: 'Winning the event was a rewarding milestone, but the real value came from analyzing my decisions afterward. Recognizing where my early design intuition leaned on assumptions rather than user validation showed me how much my craft has matured. I treat every project—past or present—as one step in a continuous learning process.',
      },
    ],
  },
  {
    id: 2,
    slug: 'excell-energy-website-revamp',
    name: 'Excell Energy: Solar Energy Provider Website Revamp',
    description: "Excell Energy is a subsidiary of MabuhayPower Holdings Corporation, a solar energy provider based in Bonifacio Global City. I, along with my one co-intern, were accepted as a web developer under Mabuhay Energy Corporation (MECO) and were assigned to work under Excell Energy.\n\nWe were required to learn new tech stacks (Plasmic, Vue.js, Vercel, and Supabase) and our responsibilities are improving the website performance and modernizing their digital presence and user experience. Ultimately, the full website revamp was completed over 3 months as an internship deliverable.",
    readTimeMinutes: 5,
    length: 'March - June 2025',
    award: '',
    
    thumbnail: {
      url: excellThumbnail,
      // mp4Url: '/animations/excellAnimation.webm',
      // webmUrl: '/animations/excellAnimation.webm',
      alt: `Excell Energy Website Revamp`,
    },

    intro: {
      url: excellThumbnail,
      // mp4Url: 'excellAnimation.mp4',
      // webmUrl: 'excellAnimation.webm',
      alt: 'Intro visual description',
    },

    tags: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'React', category: 'Frontend' },
      { name: 'Supabase', category: 'Database' },
      { name: 'Vercel', category: 'Deployment' },
    ],
    cta: {
      label: '',
      // url: '',
      // isExternal: true,
    },
    callout: {
      isNDA: true,
      ndaMessage: 'The revamped website is currently being deployed to the live domain. Check back soon for the link to the live production site.',
    },
    
    roles: [
      {
        title: 'Web Developer', 
        tasks: ['Developed responsive web & mobile pages', 'Integrated Plasmic Content Management System (CMS)', 'Optimized SEO', 'Tested and fixed layout bugs'],
        tools: ['Plasmic', 'Plasmic CMS', 'Vue.js', 'Supabase', 'Vercel'],
      },
      {
        title: 'Web Designer (UI/UX Designer)', 
        tasks: ['Competitor Analysis','UX Sitemap', 'Design System Creation', 'Low-Fidelity Wireframing', 'High-Fidelity Wireframing',],
        tools: ['Figma','Wireframe.cc'],
      },
    ],
    
    sections: [
      {
        id: 'project',
        title: 'Background & Design Process',
        description: "The original website suffered from accumulated technical debt and outdated design patterns that degraded both user experience and search performance. Across the platform, key information was buried in static content, making simple content updates tedious and severely limiting overall usability.\n\nOne of them is the original Projects page, which is a critical proof point for the company's capabilities, utilized a CMS-driven carousel displaying project images with limited metadata; see Figure 1. This structure suffered from a major issue:\n\n1.) Accessibility and SEO best practices: Relying solely on images to convey project information—a “burned-in” or “baked-in” text (text is part of the image itself and has no alternative text)—creates accessibility barriers and risks a poor user experience on slow connections. Additionally, this information blocks the visual assets and prevents the visitor from viewing the whole image, and the text heavily relies on an overlay to be clearly read. When it comes to SEO, search engines cannot index burned-in information",
        images: [
          {
            url: excellCardDraft,
            alt: 'Previous CMS Card Layout and Format',
            caption: 'Figure 1: Previous CMS Card Layout and Format.',
          },
          {
            url: excellCardConcepts,
            alt: "Various concepts to solve SEO issues",
            caption: 'Figure 1.1: Various concepts we came up with to solve SEO issues.',
          },
        ],
      },
      {
        id: 'hand-off',
        title: 'Hand-off & Implementation',
        description: "The use of Plasmic itself is new not only to us but for the entire company as well, and we were the first to successfully integrate this tech stack. Upon final deployment of the product, I, along with my co-intern, also managed the onboarding process. We focused specifically on authoring step-by-step use of the Content Management System (CMS) of Plasmic for the company’s future developers, content managers, and editorial teams, ensuring clear instructions and efficient use of the new UI/CMS capabilities.",
        images: [
          {
            url: excellGuide,
            alt: 'Excell Energy Website Revamp Design Guide',
            caption: 'Figure 2: Excell Energy Website Revamp Design Guide authored by me and my co-developer.',
          },
          {
            url: excellFile,
            alt: "A preview of the revamped website's design guide",
            caption: 'Figure 2.1: A preview of the revamped website design guide authored by me and my co-developer.',
          },
        ],
      },
    ],
    
    cards: [
      {
        title: 'Quantifiable Results',
        description: 'At the end of the project, our key success identifier is the overall performance of the website.  We were able to get an overwhelming improvement from the legacy website, and the revamp gained an overall performance score of 96/100 with accessibility of 79%, best practices of 96%, and SEO of 82%.',
      },
      {
        title: 'Design Success in Synergy',
        description: "We realized that our objective wasn't just to build a modern website, but to build brand credibility and rebuild what the company had already established. By shifting our focus to customer trust and confidence metrics, we transformed the UI from a simple informational website into a conversion tool.",
      },
    ],
  },
  {
    id: 3,
    slug: 'TICA: A Technological Innovation for Communication in Apraxia - A Mobile Application Utilizing AI-Driven Speech Therapy for Children with Apraxia',
    name: 'TICA: A Technological Innovation for Communication in Apraxia',
    description: "Our capstone project—a gamified mobile application developed over 6 months, offering an AI-powered speech therapy for children with Childhood apraxia of speech (CAS). Built with Kivy, an open-source Python framework for developing GUI across various platforms.\n\nNotably, this project was also entered and competed in a week-long hybrid innovation event open to other programs of our university.",
    readTimeMinutes: 5,
    length: 'Aug 2024 - Feb 2025',
    award: '3ʳᵈ,  ISKOnnovation: The GDSC Ideathon 2024',

    
    thumbnail: {
      url: ticaThumbnail,
      mp4Url: '/animations/ticaAnimation.mp4',
      webmUrl: '/animations/ticaAnimation.webm',
      alt: `TICA: A Technological Innovation for Communication in Apraxia`,
    },

    intro: {
      // url: ticaHero,
      mp4Url: '/animations/ticaIntro.mp4',
      webmUrl: '/animations/ticaIntro.webm',
      alt: 'Intro visual description',
    },

    tags: [
      { name: 'Python', category: 'Frontend' },
      { name: 'Kivy', category: 'Frontend' },
      { name: 'KivyMD', category: 'Frontend' },
    ],
    cta: {
      label: 'View Award',
      url: 'https://www.facebook.com/share/18z6iWjQhb/',
      isExternal: true,
    },
    callout: {
      isNDA: false,
      ndaMessage: '',
    },
    
    roles: [
      {
        title: 'UI/UX Designer', 
        tasks: ['User Research', 'Low-Fidelity Wireframing', 'High-Fidelity Wireframing', 'Prototyping'],
        tools: ['Figma'],
      },
      {
        title: 'Frontend Developer', 
        tasks: ['Developed responsive mobile pages', "Developed the app's theme switch feature", 'Co-created and optimized image assets', 'Tested design and fixed layout bugs'],
        tools: ['Python', 'Kivy', 'KivyMD'],
      },
    ],
    
    sections: [
      {
        id: 'challenge',
        title: 'Challenges',
        description: "The project utilizes a Python framework, Kivy version 2.3.2 (stable) and KivyMD version 2.0.0 (non-dev, stable release), which are new to us. However, implementing an unfamiliar framework while managing the design phase introduced technical friction. Simultaneously upskilling and adhering to our design direction challenged our project timeline.\n\nAs we deepened our understanding of the framework’s component logic, our UI components pivoted to align with the framework's limitations. For instance, we wanted to add icons to our lesson and quiz buttons, but as simple as it sounds, it gave us narrow options:\n\n1.) Kivy does not natively allow icons on rounded buttons.\n\n2.) Those buttons that allow icons have strict position requirements. This is only one of the predicaments we faced that challenged our design. In this particular example, we already established rounded buttons across the app, which resulted in either the app crashing or us adjusting the design that did not adhere to the global style; we chose the latter; see Figure 1.",
        images: [
          {
            url: ticaChallenge,
            alt: 'Layout Issues',
            caption: 'Figure 1: One of the problems we came across that changed our original component design from the rest of the app.',
          },
          {
            url: ticaChallenge1,
            alt: 'Layout Issues',
            caption: 'Figure 1.1: Another challenge we faced during the design process.',
          },
        ],
      },
    ],
    
    cards: [
      {
        title: 'The Key to Efficiency: Automation',
        description: "Maintaining design direction manually was manageable early on, but it quickly created workflow issues as screens multiplied. Transitioning to a Figma's automation features—leveraging Auto Layout and design tokens had forever changed our workflow. It eliminated manual pixel-pushing, guaranteed responsiveness across screen sizes, and allowed us to focus on solving UX problems rather than re-aligning UI elements by hand (or by mouse, rather).",
      },
    ],
  },
];