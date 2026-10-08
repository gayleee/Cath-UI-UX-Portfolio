import ticaThumbnail from '/src/assets/thumbnails/ticaThumbnail.webp'
import excellThumbnail from '/src/assets/thumbnails/excellThumbnail.webp'
import niicheThumbnail from '/src/assets/thumbnails/niicheThumbnail.webp'
import ootuThumbnail from '/src/assets/thumbnails/ootuThumbnail.webp'
import iskolarExpressThumbnail from '/src/assets/thumbnails/iskolarExpressThumbnail.webp'

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
import niicheFeed from '@/assets/niicheAssets/niicheFeed.webp'
import niicheAsset from '@/assets/niicheAssets/niicheAsset.webp'
import niicheFont from '@/assets/niicheAssets/niicheFont.webp'
import niicheColor from '@/assets/niicheAssets/niicheColor.webp'

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

import iskolarExpressOverview from '/src/assets/iskolarExpressAssets/iskolarExpressOverview.webp'
import iskolarExpressMain from '/src/assets/iskolarExpressAssets/iskolarExpressMain.webp'
import iskolarExpressAdminLogin from '/src/assets/iskolarExpressAssets/iskolarExpressAdminLogin.webp'
import iskolarExpressColor from '/src/assets/iskolarExpressAssets/iskolarColor.webp'
import iskolarExpressHeading from '/src/assets/iskolarExpressAssets/iskolarHeading.webp'
import iskolarExpressBody from '/src/assets/iskolarExpressAssets/iskolarBody.webp'
import iskolarExpressAsset from '/src/assets/iskolarExpressAssets/iskolarAsset.webp'

export const studies = [
  {
    id: 0,
    slug: 'iskolar-express-egov-hackathon-2026',
    name: 'Iskolar Express - eGov Hackathon 2026',
    description: "Our team's eGov Hackathon solution: Iskolar Express, a centralized web-app scholarship management platform that streamlines stipend processing from submission to release by allowing students to find a suitable scholarship for their needs and conveniently apply and track their applications online. The platform is designed to be user-friendly, efficient, and accessible, ensuring that students can easily navigate the application process and receive timely updates on their scholarship status.\n\nThe event was held at the SMX Convention Center Aura in Taguig City, Philippines, and was open to all Filipino tech talents. Our team was composed of 5 members, and each role had one person assigned (e.g., Frontend Developer, Backend Developer, Quality Assurance, etc.). I was the sole UI/UX designer on the team.",
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
        title: 'Design Process',
        description: "I was tasked with designing role-tailored UI where features and permissions are tied to roles and workflows within a strict, single-sprint timeframe (1 week).\n\nFrom the lessons learned from past projects, I shifted away from assumption-led decisions. Before jumping into wireframes, we conducted a rapid, informal UX benchmark of competitor platforms and adjacent systems sharing our core functional principles; adhering to a fundamental UX design principle—Jakob's Law.\n\n'Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know' (Yablonski, n.d., Key Takeaways section, para. 1). This informed our design decisions, ensuring that our solution was both innovative and aligned with established usability norms, one of them is:\n\n1.) Common patterns and user expectations - Instead of reinventing interaction patterns, we identified common conventions across these systems. By adopting established UX patterns, we ensured that users across all roles could navigate the platform with zero learning curve.",
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
      {
        id: 'decisions',
        title: 'Design Decisions',
        description: "Guided by accessibility standards, blue was selected as our primary color. The chosen hexcode scored a 5.42:1 contrast ratio against white backgrounds, comfortably exceeding the WCAG 2.1 AA minimum threshold of 4.5:1.\n\nFor our typography, we selected Noto Sans as the heading typeface to ensure clarity and high readability and distinction between headings and body text. On the other hand, we selected Merriweather Sans as our primary body typeface for its bolder lines making it highly legible against different contents.\n\nRegarding our assets, I went with an abstract visual style instead of relying on generic stock illustration libraries, differentiating our platform from the generic stock illustrations common across existing apps. I designed these custom assets directly in Figma and Affinity Designer.",
        images: [
          {
            url: iskolarExpressColor,
            alt: 'Iskolar Express Color Palette',
            // caption: 'Figure 1: Color Palette',
          },
          {
            url: iskolarExpressHeading,
            alt: 'Iskolar Express Heading Text',
            // caption: 'Figure 1.1: Heading Text Font',
          },
          {
            url: iskolarExpressBody,
            alt: 'Iskolar Express Body Text',
            // caption: 'Figure 1.1: Body Text Font',
          },
          {
            url: iskolarExpressAsset,
            alt: 'Iskolar Express Asset',
            // caption: 'Figure 1.1: Asset',
          },
        ],
      },
      {
        id: 'results',
        title: 'Impacts & Outcomes',
        description: "While the platform did not receive an award, our team recognized the value of solving a real-world problem. The problem may be simple, but its persistence in making bureaucratic processes difficult was evident and calls for an attention, building a system that makes these processes more efficient, centralized, and personalized ensures that we are addressing the problem to its core.\n\nThe project not only showcased our technical skills but also highlighted our ability to work collaboratively under pressure and deliver within a limited time.",
      },
    ],
    
    cards: [
      {
        title: 'How Systemic Habits Saved My Workflow',
        description: 'When shifting project requirements expanded our roles and feature set, my experience from past projects became a major asset. Rather than spending time manually adjusting individual screens, I applied scalable design system principles (specifically practicing Atomic Design) to establish modular UI components and flexible layout structures. This allowed our team to seamlessly accommodate data and new features without redesigning core layouts. This reinforces the power of building adaptable interfaces even in the face of limited timeframe.',
      },
    ],
  },
  {
    id: 1,
    slug: 'niiche-community-platform',
    name: 'NIICHE - Community Platform',
    description: "A web-based community platform for niche interests, connecting like-minded individuals. A 3-day hybrid competition with predefined guidelines with professional judges, held right after the end of my internship. The event brought together information technology students from all year levels in our university.\n\nThe goal is to create a platform that allows users to discover and connect with others who share their interests, hobbies, or passions. The platform provides a space for users to create and join communities, share content, and engage in discussions related to their niche interests.\n\nThe primary audience are Gen Z, who are known for their tech-savviness and preference for online communities. The criteria for evaluation included usability, design aesthetics, and must specifically adhere to Gestalt principles, which are a set of psychological principles that explain how humans perceive and organize visual information.",
    readTimeMinutes: 5,
    length: 'June 2025',
    award: 'Champion, ISKOnnovation: EUREKA 2025 UI Design Competition',
    
    thumbnail: {
      url: niicheThumbnail,
      mp4Url: '/animations/niicheAnimation.webm',
      webmUrl: '/animations/niicheAnimation.webm',
      alt: `NIICHE - Community Platform`,
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
        title: 'Design Process',
        description: "High user engagement is the goal and discoverability is an essential factor for a content-rich platform, and with that in mind, I focused on solving two core problems: simplifying visual and information hierarchy and reducing information overload.\n\nTo tackle this, I first approached the handling of metadata and navigation as compactly and clearly as possible; see Figure 1. At first, I placed the search function within the top navigation bar, serving as a global search. However, To adhere to the single-page requirement, I prioritized contextual proximity over generic global placement.\n\nSince the feed is the core content container on the page, moving Search and Filter directly above the feed visually communicates to the user that their query immediately manipulates the content below it. It reduces cognitive distance by keeping control inputs right where the data renders.",
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
      {
        id: 'decisions',
        title: 'Design Decisions',
        description: "To position the platform as a welcoming, community-first space, I built a visual identity around warmth and approachability, Cranberry red was chosen as the primary color. It was paired with a muted palette of colors to create a visually appealing and cohesive design. The typography are Sora for heading text and Inter for body text were selected to ensure simplicity, readability, and accessibility across different devices.\n\nThe platform's visual identity was further reinforced through the use of free to illustrations available in Figma Community. This approach helped with highlighting important elements that matters in the sea of content and  ultimately, it resonates with the target audience.",
        images: [
          {
            url: niicheFont,
            alt: 'Font Pairing',
            // caption: 'Figure 2: Showcasing what the platform is about',
          },
          {
            url: niicheColor,
            alt: 'Primary Color',
            // caption: 'Figure 2.1: Color Palette',
          },
          {
            url: niicheAsset,
            alt: 'Representation of the Platform',
            caption: 'Figure 2: Logo prototype animation representing different interests reflecting the platform’s purpose',
          },
          {
            url: niicheFeed,
            alt: 'The Final Feed Page',
            caption: 'Figure 2.1: What the Final Feed Page Looks Like',
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
        title: 'A Benchmark, Not a Ceiling',
        description: 'Winning the event was a rewarding milestone, but the real value came from analyzing my decisions afterward. Recognizing where my early design intuition leaned on assumptions rather than user validation showed me how much my craft has matured. I treat every project as one step in a continuous learning process.',
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
        title: 'Design Process',
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
      // {
      //   id: 'decisions',
      //   title: 'Design Decisions',
      //   description: "The original website suffered from accumulated technical debt and outdated design patterns that degraded both user experience and search performance. Across the platform, key information was buried in static content, making simple content updates tedious and severely limiting overall usability.\n\nOne of them is the original Projects page, which is a critical proof point for the company's capabilities, utilized a CMS-driven carousel displaying project images with limited metadata; see Figure 1. This structure suffered from a major issue:\n\n1.) Accessibility and SEO best practices: Relying solely on images to convey project information—a “burned-in” or “baked-in” text (text is part of the image itself and has no alternative text)—creates accessibility barriers and risks a poor user experience on slow connections. Additionally, this information blocks the visual assets and prevents the visitor from viewing the whole image, and the text heavily relies on an overlay to be clearly read. When it comes to SEO, search engines cannot index burned-in information",
      //   images: [
      //     {
      //       url: excellCardDraft,
      //       alt: 'Previous CMS Card Layout and Format',
      //       caption: 'Figure 1: Previous CMS Card Layout and Format.',
      //     },
      //     {
      //       url: excellCardConcepts,
      //       alt: "Various concepts to solve SEO issues",
      //       caption: 'Figure 1.1: Various concepts we came up with to solve SEO issues.',
      //     },
      //   ],
      // },
      {
        id: 'results',
        title: 'Impacts & Outcomes',
        description: "The use of Plasmic itself is new not only to us but for the entire company as well, and we were the first to successfully integrate this tech stack. Upon final deployment of the product, I, along with my co-intern, also managed the onboarding process. We focused specifically on authoring step-by-step use of the Content Management System (CMS) of Plasmic for the company’s future developers, content managers, and editorial teams, ensuring clear instructions and efficient use of the new UI/CMS capabilities.\n\nAdditionally, our key success identifier is the overall performance of the website.  We were able to get an overwhelming improvement from the legacy website, and the revamp gained an accessibility score of 79%, best practices of 96%, and SEO of 82%.",
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
        title: 'Design Success in Synergy',
        description: "We realized that our objective wasn't just to build a modern website, but to build brand credibility and rebuild what the company had already established. By shifting our focus to customer trust and confidence metrics, we transformed the UI from a simple informational website into a conversion tool.",
      },
    ],
  },
  {
    id: 3,
    slug: 'tica-technological-innovation-for-communication-in-apraxia',
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
      {
        id: 'process',
        title: 'Design Process',
        description: "In collaboration with the client, we grounded our core gameplay loop in the Articulation Hierarchy. It is a proven speech therapy framework designed to teach correct sound production step-by-step. We structured each chapter around four progressive stages: Discrimination > Isolation > Syllables > Words. Here's a breakdown of each stage:\n\nStage 1 - Discrimination: Distinguishing the target sound from incorrect sounds.\n\nStage 2 - Isolation: Producing the target sound on its own.\n\nStage 3 - Syllables: Combining sounds with vowels (VC or CV combinations).\n\nStage 4 - Words: Applying target sounds within full words.\n\nThis structured approach ensures that children master each stage before progressing, fostering a comprehensive understanding of sound production. Every stage uses a sequential Lesson > Quiz structure to ensure mastery before progression. By pairing visual guidance with an AI speech-recognition engine, the gameplay helps children both recognize sounds and physically practice producing them correctly (see Figure 1.2).",
        images: [
          {
            url: ticaReference,
            alt: 'Layout Issues',
            caption: 'Figure 2: Material gathered from the client during one of the consultations.',
          },
          {
            url: ticaLesson,
            alt: 'Layout Issues',
            caption: 'Figure 2.1: A preview of how the lesson and quiz pages look like based on articulation hierarchy, which is the main feature of the app.',
          },
        ],
      },
      {
        id: 'decisions',
        title: 'Design Decisions',
        description: "In figure 3, we structured the learning modules in a gated progression system where quiz modules remain locked until the prerequisite lesson content is completed. This intentional application of Slow Design prevents cognitive overwhelm and encourages intentionality, ensuring that users pause for reflection and discussion rather than rushing through.\n\nFigure 3.1, Font Choices: Lexend Deca is chosen for the body text as it is short and wide, which creates enough 'breathing room' that makes reading clear. On the other hand, Passion One is chosen as the display font, as it is tall and narrow, which creates the emphasis we needed for important text like call-to-action buttons.\n\nFigure 3.2: Color palette. While standard WCAG contrast ratios were a benchmark, our primary design goal was to prevent cognitive fatigue. For a younger demographic, we opted for various approaches that move away from the traditional standards. We highly emphasized soft visuals, emotional connection, and personalization.\n\nFigure 3.3: Custom assets. We created custom assets to establish emotional connection and make each lesson and quiz less intimidating and more engaging. Our mascots, from left to right, are Tica, our giraffe developed by me; Chuck the chicken, who originally was a white chicken (but we opted for a brown-feathered one as it is the most common you can see in the country) developed by my fellow front-end developer; and finally, our poster mascot, Finn the fox, developed by our design lead.",
        images: [
          {
            url: ticaDesign,
            alt: 'Slow Design Approach',
            caption: 'Figure 3: Users have the freedom to finish each module at their own pace.',
          },
          {
            url: ticaFonts,
            alt: 'Font Choices',
            caption: 'Figure 3.1: Font choices for the application.',
          },
          {
            url: ticaColors,
            alt: 'Color Palette',
            caption: 'Figure 3.2: Color palette for the application.',
          },
          {
            url: ticaAsset,
            alt: 'Asset Set',
            caption: 'Figure 3.3: Custom asset set for the application.',
          },
        ],
      },
      {
        id: 'results',
        title: 'Impacts & Outcomes',
        description: "Overall, the platform was well-received by users and successfully demonstrated the gamified approach kept users actively engaged, while the structured slow design approach allowed them to navigate the lessons comfortably at their own pace. Combining interactive visuals with AI speech recognition gave users a clear, physical way to practice sound production and receive feedback.\n\nWhile overall sentiment was positive, user testing highlighted key areas for optimization, most notably our onboarding flow. Due to tight technical and time constraints during development, the sign-in and sign-up process felt longer than standard industry benchmarks and lacked single sign-on (SSO) options like Google sign-in.\n\nMoving forward, streamlining user authentication and reducing onboarding friction remain as one of the priority for future developers.",
      },
    ],
    
    cards: [
      {
        title: 'Automation in Design Workflow',
        description: "Maintaining design direction manually was manageable early on, but it quickly created workflow issues as screens multiplied. Transitioning to a Figma's automation features—leveraging Auto Layout and design tokens had forever changed our workflow. It eliminated manual pixel-pushing, guaranteed responsiveness across screen sizes, and allowed us to focus on solving UX problems rather than re-aligning UI elements by hand (or by mouse, rather).",
      },
    ],
  },
];