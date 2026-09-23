import ticaThumbnail from '/src/assets/thumbnails/ticaThumbnail.webp'
import excellThumbnail from '/src/assets/thumbnails/excellThumbnail.webp'
import niicheThumbnail from '/src/assets/thumbnails/niicheThumbnail.webp'
import ootuThumbnail from '/src/assets/thumbnails/ootuThumbnail.webp'
// import igbeThumbnail from '/src/assets/thumbnails/igbeThumbnail.webp'
import iskolarExpressThumbnail from '/src/assets/thumbnails/iskolarExpressThumbnail.webp'

import iskolarExpressOverview from '/src/assets/iskolarExpressAssets/iskolarExpressOverview.webp'

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
    slug: `egov-hackathon-2026`,
    name: `Iskolar Express - eGov Hackaton 2026`,
    // animationWebm: `animations/ootuAnimation.webm`,
    // animationMp4: `animations/ootuAnimation.mp4`,
    thumbnailUrl: iskolarExpressThumbnail,
    thumbnailAlt: `eGov Hackathon 2026`,
    desc: `Our team's eGov Hackathon solution—Iskolar Express, a centralized web-app scholarship management platform that streamlines stipend processing from submission to release by allowing students to find a suitable scholarship for their needs and conveniently apply online.`,
    readTime: `• 10 min read`,
    length: `July 2026 `,
    tag: [
      {name: `Web`, category: `platform`},
      {name: `Android`, category: `platform`},
      {name: `IOS`, category: `platform`},
      {name: `Next JS`, category: `tool`},
      {name: `Supabase`, category: `tool`},
    ],
    introData:
    {
      // introUrl: `/animations/ootuIntro.webm`,
      introUrl: iskolarExpressOverview,
      introMp4: `/animations/ootuIntro.webm`,
      introAlt: `Order of the Undead Intro Image`,
    },
    ctaData: {
      label: `View Event`,
    },
    calloutData: {
      isNDA: false,
      ndaMessage: ``,
    },
    url: `https://mb.com.ph/2026/07/22/egovph-hackathon-opens-government-innovation-to-filipino-tech-talents`,
    link: true,
    highlightData: {
      primaryText: `10 min read`,
      secondaryText: `Aug - Sep 2025`,
      theme: `highlight-metadata`,
    },
    roleData: {
      primaryText: `UI/UX Lead & Brand Identity Designer`,
      secondaryText: `Multi-Role`,
      theme: `highlight-role`,
    },
    roleDesc: [
      {
        role: `UI/UX Designer`, 
        task: [
          `Low and High Fidelity Wireframing`,
          `Prototyping`,
        ],
        tools: [
          `Figma`,
        ]
      },
      {
        role: `Brand Designer`, 
        task: [
          `Logo Design`,
          `Graphical asset creation`,
        ],
        tools: [
          `Affinity`,
          `Rive`
        ]
      },
    ],
    contents: [
      {
        name: `The Challenge`,
        contentTitle: `Rapid Development Time`,
        contentDesc: `The project aims to launch a polished game entry where asset creation strictly begins at the start of September. However, making a visual novel—in a competition, nonetheless—is anything but easy; it requires full team effort. Roles are grouped, and each has a max of 1 week to work on their tasks. Our high-value goals:

1. Assets polished, mechanics clear, and ultimately no bugs.
2. Make the game as immersive as we possibly can.
3. Publish and launch the game on or before September 30.`,
      },
      {
        name: `The Setup`,
        contentTitle: `Project Kick-Off`,
        contentDesc: `With the 30-day sprint, we had to work with an agile methodology. The project's critical path is the writing and UI/UX (parallel production), with our deliverables putting various roles on hold until we reach finalization on Week 1. During pre-production I prepared and applied Object-Oriented User Experience (OOUX) and Mood Board as a foundation for later processes where ideas of the plot, mechanic, and number of characters were discussed.`,
        contentImages: [
          {
            contentUrl: ootuOOUX,
            contentAlt: `Order of the Undead OOUX`,
            contentImgDesc: `Figure 1. Applied OOUX to map data and identify relationship between said data and user flow. Note: During this time, the game is named as "Undead Cafe" temporarily.`,
          },
          {
            contentUrl: ootuWireframes,
            contentAlt: `Order of the Undead Wireframes`,
            contentImgDesc: `Figure 1.1. High-fidelity wireframes to visualize user flow early.`,
          },
        ],
      },
      {
        name: `The Process`,
        contentTitle: `UX Discovery: Layout Effectiveness`,
        contentDesc: `Visual novels often have mini-games, and this project is no exception. This mode is a cooking game and it is an integral part of the story as the ending paths rely on this. The premise is that our main character works for a cafe to build her new life, where she meets new characters and learns about their preferences. However, there are three major problems: Unclear visual hierarchy, High interaction cost, and an overloaded cognitive load.

The solution is to separate them into two sides and condense the method into one preparation point (a kiosk) and use Z-pattern layout. It allows the players to naturally scan categories and ingredients that is placed near each other.`,
        contentImages: [
          {
            contentUrl: ootuDraft,
            contentAlt: `Order of the Undead No cohesive layout`,
            contentImgDesc: `Figure 1.2. A layout with no pattern or form. Orange circles stand for the preparation points, and dashed lines are the paths to each. This layout overcomplicates the process of preparing a single recipe.`,
          },
          {
            contentUrl: ootuDraftFix,
            contentAlt: `Order of the Undead Fixed Layout`,
            contentImgDesc: `Figure 1.3. Preliminary Design Layout. The final production version was simplified to accommodate a reduced asset set while maintaining the UX established in this draft.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Developing Core Pages: Grimoire`,
        contentDesc: `The Grimoire's primary function is to contextualize obtainable items and add to the world-building. The spell is unlocked by default, and the Grimoire itself is only accessible after finishing the early stage of the story. The items are mandatory for achieving endings; the system provides undiscovered entries with information regarding their sources. This ensures that even if the unlocked inventory is incomplete, it will contribute to what ending a player will get.`,
        contentImages: [
          {
            contentUrl: grimoireFirstPage,
            contentAlt: `Grimoire First Page`,
            contentImgDesc: `Figure 1.4. Grimoire First Page.`,
          },
          {
            contentUrl: grimoireSecondPage,
            contentAlt: `Grimoire Second Page`,
            contentImgDesc: `Figure 1.5. Grimoire Second Page.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Developing Core Pages: Spell Circle (Inventory)`,
        contentDesc: `This screen serves as the bridge between the cooking game and the grimoire. As mentioned earlier, one of our high-value goals is to make the game as immersive as possible, and thus this screen is added for world-building purposes. 
    
In the story—SPOILER ALERT—our main character performs the spell in a graveyard; you can only do so when you are near achieving an ending. The circle in Figure 1.6 will be bursting with color the moment the player enacts the spell, thus adding more impact to your action in the story.`,
        contentImages: [
          {
            contentUrl: ootuInventory,
            contentAlt: `Order of the Undead Inventory`,
            contentImgDesc: `Figure 1.6. This spell circle serves as the inventory. Based on the circle from Figure 1.4, our main character has to prepare and perform the spell in a larger space.`,
          },
          {
            contentUrl: ootuInventoryFlow,
            contentAlt: `Order of the Undead Inventory Flow.`,
            contentImgDesc: `Figure 1.7. Inventory user flow.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Designing the Assets`,
        contentDesc: `The story’s setting is modern day with fantasy themes. During early explorations, color and texture choices were too old to fit the setting; thus, I went with notebooks with modern clips and spiral holders. The only exception to this style is the Grimoire, which is intentionally made to look old and magical. This approach ensures that we can avoid a disconnect between assets and the plot of the story, as the UI is the foundation.`,
        contentImages: [
          {
            contentUrl: ootuAssetSet,
            contentAlt: `Order of the Undead Production Assets`,
            contentImgDesc: `Figure 1.8. Production assets prepared for this case study only.`,
          },
          {
            contentUrl: ootuExplorations,
            contentAlt: `Order of the Undead Asset Explorations`,
            contentImgDesc: `Figure 1.9. Early design explorations.`,
          },
        ],
      },
      {
        name: `Impact and Outcomes`,
        contentTitle: `Met All High Value Goals`,
        contentDesc: `All UI/UX deliverables were completed on time within the first 7 days of the 30-day sprint. This enabled the art and other departments to work simultaneously on their tasks. Additionally, all of the screens and user flow aligned with the design so that it kept the integrity of the plot.`,
      },
      {
        name: ``,
        contentTitle: `Established Design System and Library`,
        contentDesc: `Established a design system of over 120 assets to maintain visual and functional integrity across the game. This ecosystem of screens, components, and states reduces design redundancy and speeds development time as well as providing a roadmap for future contributors to improve the game.`,
      },
    ],
    cards: [
      {
        heading: `Designing for Environmental Versatility`,
        desc: `Assets was effective for the character’s primary setting: the cafe. However, I identified a disconnect between the dialogue window and background images. My takeaway is to implement variants early to account for narrative and environmental context. Designing for immersion is always a good thing, but it must be done with all possible settings within the scope.`,
      },
    ],
  },
  {
    id: 1,
    slug: `order-of-the-undead`,
    name: `Order of the Undead - Spooktober 7ᵗʰ Annual Visual Novel Jam`,
    animationWebm: `/animations/ootuAnimation.webm`,
    animationMp4: `/animations/ootuAnimation.mp4`,
    thumbnailUrl: ootuThumbnail,
    thumbnailAlt: `Order of the Undead Thumbnail`,
    desc: `A Halloween-themed narrative game competing against 200+ entries in the biggest competition held by Itch under the visual novel category. I was recruited to a team of veterans, a huge opportunity for a designer like me that is completely new to the niche. I am able to experience the boundless creative freedom of game development, where I discover the importance of taking technical and design constraints into account.`,
    readTime: ` • 10 min read`,
    length: `Aug - Sept 2025`,
    award: `45ᵗʰ out of 200+ entries, 7ᵗʰ Annual Spooktober Jam`,
    tag: [
      { name: 'Web', category: 'platform' },
      { name: 'Game', category: 'type' },
    ],
    introData: {
      introUrl: `/animations/ootuIntro.webm`,
      introMp4: `/animations/ootuIntro.webm`,
      introAlt: `Order of the Undead Intro Image`,
    },
    ctaData: {
      label: `View Itch.io Page`,
    },
    calloutData: {
      isNDA: false,
      ndaMessage: ``,
    },
    url: `https://chanchangames.itch.io/order-of-the-undead`,
    link: true,
    highlightData: {
      primaryText: `10 min read`,
      secondaryText: `Aug - Sept 2025`,
      theme: `highlight-metadata`,
    },
    roleData: {
      primaryText: `UI/UX Lead & Brand Identity Designer`,
      secondaryText: `Multi-Role`,
      theme: `highlight-role`,
    },
    roleDesc: [
      {
        role: `UI/UX Designer`, 
        task: [
          `Low and High Fidelity Wireframing`,
          `Asset creation`
        ],
        tools: [
          `Figma`,
        ]
      },
      {
        role: `Brand Designer`, 
        task: [
          `Logo Design`,
          `Graphical asset creation`
        ],
        tools: [
          `Figma`,
        ]
      },
    ],
    contents: [
      {
        name: `The Challenge`,
        contentTitle: `Rapid Development Time`,
        contentDesc: `The project aims to launch a polished game entry where asset creation strictly begins at the start of September. However, making a visual novel—in a competition, nonetheless—is anything but easy; it requires full team effort. Roles are grouped, and each has a max of 1 week to work on their tasks. Our high-value goals:

1. Assets polished, mechanics clear, and ultimately no bugs.
2. Make the game as immersive as we possibly can.
3. Publish and launch the game on or before September 30.`,
      },
      {
        name: `The Setup`,
        contentTitle: `Project Kick-Off`,
        contentDesc: `With the 30-day sprint, we had to work with an agile methodology. The project's critical path is the writing and UI/UX (parallel production), with our deliverables putting various roles on hold until we reach finalization on Week 1. During pre-production I prepared and applied Object-Oriented User Experience (OOUX) and Mood Board as a foundation for later processes where ideas of the plot, mechanic, and number of characters were discussed.`,
        contentImages: [
          {
            contentUrl: ootuOOUX,
            contentAlt: `Order of the Undead OOUX`,
            contentImgDesc: `Figure 1. Applied OOUX to map data and identify relationship between said data and user flow. Note: During this time, the game is named as "Undead Cafe" temporarily.`,
          },
          {
            contentUrl: ootuWireframes,
            contentAlt: `Order of the Undead Wireframes`,
            contentImgDesc: `Figure 1.1. High-fidelity wireframes to visualize user flow early.`,
          },
        ],
      },
      {
        name: `The Process`,
        contentTitle: `UX Discovery: Layout Effectiveness`,
        contentDesc: `Visual novels often have mini-games, and this project is no exception. This mode is a cooking game and it is an integral part of the story as the ending paths rely on this. The premise is that our main character works for a cafe to build her new life, where she meets new characters and learns about their preferences. However, there are three major problems: Unclear visual hierarchy, High interaction cost, and an overloaded cognitive load.

The solution is to separate them into two sides and condense the method into one preparation point (a kiosk) and use Z-pattern layout. It allows the players to naturally scan categories and ingredients that is placed near each other.`,
        contentImages: [
          {
            contentUrl: ootuDraft,
            contentAlt: `Order of the Undead No cohesive layout`,
            contentImgDesc: `Figure 1.2. A layout with no pattern or form. Orange circles stand for the preparation points, and dashed lines are the paths to each. This layout overcomplicates the process of preparing a single recipe.`,
          },
          {
            contentUrl: ootuDraftFix,
            contentAlt: `Order of the Undead Fixed Layout`,
            contentImgDesc: `Figure 1.3. Preliminary Design Layout. The final production version was simplified to accommodate a reduced asset set while maintaining the UX established in this draft.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Developing Core Pages: Grimoire`,
        contentDesc: `The Grimoire's primary function is to contextualize obtainable items and add to the world-building. The spell is unlocked by default, and the Grimoire itself is only accessible after finishing the early stage of the story. The items are mandatory for achieving endings; the system provides undiscovered entries with information regarding their sources. This ensures that even if the unlocked inventory is incomplete, it will contribute to what ending a player will get.`,
        contentImages: [
          {
            contentUrl: grimoireFirstPage,
            contentAlt: `Grimoire First Page`,
            contentImgDesc: `Figure 1.4. Grimoire First Page.`,
          },
          {
            contentUrl: grimoireSecondPage,
            contentAlt: `Grimoire Second Page`,
            contentImgDesc: `Figure 1.5. Grimoire Second Page.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Developing Core Pages: Spell Circle (Inventory)`,
        contentDesc: `This screen serves as the bridge between the cooking game and the grimoire. As mentioned earlier, one of our high-value goals is to make the game as immersive as possible, and thus this screen is added for world-building purposes. 
    
In the story—SPOILER ALERT—our main character performs the spell in a graveyard; you can only do so when you are near achieving an ending. The circle in Figure 1.6 will be bursting with color the moment the player enacts the spell, thus adding more impact to your action in the story.`,
        contentImages: [
          {
            contentUrl: ootuInventory,
            contentAlt: `Order of the Undead Inventory`,
            contentImgDesc: `Figure 1.6. This spell circle serves as the inventory. Based on the circle from Figure 1.4, our main character has to prepare and perform the spell in a larger space.`,
          },
          {
            contentUrl: ootuInventoryFlow,
            contentAlt: `Order of the Undead Inventory Flow.`,
            contentImgDesc: `Figure 1.7. Inventory user flow.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Designing the Assets`,
        contentDesc: `The story’s setting is modern day with fantasy themes. During early explorations, color and texture choices were too old to fit the setting; thus, I went with notebooks with modern clips and spiral holders. The only exception to this style is the Grimoire, which is intentionally made to look old and magical. This approach ensures that we can avoid a disconnect between assets and the plot of the story, as the UI is the foundation.`,
        contentImages: [
          {
            contentUrl: ootuAssetSet,
            contentAlt: `Order of the Undead Production Assets`,
            contentImgDesc: `Figure 1.8. Production assets prepared for this case study only.`,
          },
          {
            contentUrl: ootuExplorations,
            contentAlt: `Order of the Undead Asset Explorations`,
            contentImgDesc: `Figure 1.9. Early design explorations.`,
          },
        ],
      },
      {
        name: `Impact and Outcomes`,
        contentTitle: `Met All High Value Goals`,
        contentDesc: `All UI/UX deliverables were completed on time within the first 7 days of the 30-day sprint. This enabled the art and other departments to work simultaneously on their tasks. Additionally, all of the screens and user flow aligned with the design so that it kept the integrity of the plot.`,
      },
      {
        name: ``,
        contentTitle: `Established Design System and Library`,
        contentDesc: `Established a design system of over 120 assets to maintain visual and functional integrity across the game. This ecosystem of screens, components, and states reduces design redundancy and speeds development time as well as providing a roadmap for future contributors to improve the game.`,
      },
    ],
    cards: [
      {
        heading: `Designing for Environmental Versatility`,
        desc: `Assets was effective for the character’s primary setting: the cafe. However, I identified a disconnect between the dialogue window and background images. My takeaway is to implement variants early to account for narrative and environmental context. Designing for immersion is always a good thing, but it must be done with all possible settings within the scope.`,
      },
    ],
  },
  {
    id: 2,
    slug: `niiche-community-platform`,
    name: `Niiche - Community Platform`,
    animationWebm: `/animations/niicheAnimation.webm`,
    animationMp4: `/animations/niicheAnimation.mp4`,
    thumbnailUrl: niicheThumbnail,
    thumbnailAlt: `niicheThumbnail`,
    desc: `A web-based community platform that is focused on connecting individuals around niche interests. A 3-day timeline (online) competition with predefined branding guidelines with professional judges, held right after the end of my internship. The event brought together information technology students from all year levels.`,
    readTime: ` • 5 min read`,
    length: `June 2025`,
    award: `Champion, ISKOnnovation: EUREKA 2025 UI Design Competition`,
    tag: [
      { name: 'Web', category: 'platform' },
      { name: 'Prototype', category: 'type' },
    ],
    introData: {
      introUrl: `/animations/niicheAnimation.webm`,
      introMp4: `/animations/niicheAnimation.mp4`,
      introAlt: `Niiche Intro Image`,
    },
    ctaData: {
      label: `Read Official Brief`,
    },
    calloutData: {
      isNDA: false,
      ndaMessage: ``,
    },
    url: `https://www.facebook.com/share/p/15piNvAXnY4/`,
    link: true,
    highlightData: {
      primaryText: `5 min read`,
      secondaryText: `June 2025`,
      theme: `highlight-metadata`,
    },
    roleData: {
      primaryText: `UI/UX Designer`,
      secondaryText: `Solo`,
      theme: `highlight-role`,
    },
    // roleDesc: `In this competition, participants are one-man teams. This project showcases my ability to independently manage the entire product lifecycle, from planning to file handoff that we are all too used to performing in groups. I tackled the challenge with one goal in mind: create a platform that meets user expectations that is easy to follow and where information is not bombarded.`,
    roleDesc: [
      {
        role: `UI/UX Designer`, 
        task: [
          `Low and High Fidelity Wireframing`,
          `Adhere to Gestalt Principle`,
          `Prototyping`,
        ],
        tools: [
          `Figma`,
        ]
      },
    ],
    contents: [
      {
        name: `The Challenge`,
        contentTitle: `Rapid Development Time`,
        contentDesc: `Since this is technically an academic competition,  we are only given 3 days to finish everything. This demanded every participant to create their own approach on handling every stage of the design process. My high-value goals:

1. Meet all judging criterias.
2. Analyze and create a solution for the prompt scope and problem.
3. Submit a polished design and organized Figma File on or before the event deadline.`,
      },
      {
        name: `The Setup`,
        contentTitle: `Project Kick-Off`,
        contentDesc: `My first move was to establish clarity. I summarized the official documentation and developed a set of targeted feature questions as illustrated on Figure 1. I considered this step critical for immediately shifting focus and understanding the goal and possible problem of the product.`,
        contentImages: [
          {
            contentUrl: niicheConcept,
            contentAlt: `Niiche Concept`,
            contentImgDesc: `Figure 1. Product Conceptual Questions.`,
          },
          {
            contentUrl: niicheFeatures,
            contentAlt: `Niiche Features`,
            contentImgDesc: `Figure 1.2. Product Feature Questions.`,
          },
        ],
      },
      {
        name: `The Process`,
        contentTitle: `Layout Effectiveness`,
        contentDesc: `High user engagement and discoverability are a must for a content-rich platform like this, and with that in mind, I focused on two problems: visual clarity and reducing information overload. To achieve this, I approached the handling of metadata and navigation as compactly and clearly as possible; see Figure 1.3.

At first, I placed the search function within the top navigation bar. However, due to the project's requirement that we create a single artboard per screen only, I instead made a dedicated search section beneath the navigation bar; see Figure 1.4. This solution allowed me to include filtering and tagging functions into a single section, ensuring that these controls are accessible at a single glance without requiring a separate screen view or state.`,
        contentImages: [
          {
            contentUrl: niicheDraft,
            contentAlt: `Niiche First Draft`,
            contentImgDesc: `Figure 1.3. Layout without tags and a filtering system at first glance, hidden until the search bar is active.`,
          },
          {
            contentUrl: niicheFinalDraft,
            contentAlt: `Niiche Final Draft`,
            contentImgDesc: `Figure 1.4. Exposed the tags and filtering system to reduce interaction cost and provided users with immediate information to browse.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Shaping the Niiche Experience`,
        contentDesc: `Participants are given the freedom to choose whatever we want as long as we keep the predefined logo. Therefore, I aimed to reduce the intimidation and applied a layout that adheres to established web conventions: a top navigation bar, left-aligned primary links, and a prominent right-side call to action dedicated to login or sign-up. This familiar structure immediately places the user in a comfortable environment, especially for the target audience.

The color scheme is simple: the 60-30-10 rule is applied. I also went with the color red to signify passion for niches and how people are willing to go to find a community that they can learn and strive with, all for the love of their interests. While my final decision utilized the brand accent color for the navigation bar, future iterations would prioritize a neutral palette. This shift would better support light/dark mode transitions and ensure consistent contrast ratios across various user environments.`,
      },
      {
        name: `Impact and Outcomes`,
        contentTitle: `Solution Succeeded`,
        contentDesc: `Successfully managed to meet project scope and submitted an organized Figma file ready for developers within a strict 72-hour sprint with the final layout was awarded the highest for solving the problem of a platform that caters to niche interests: discoverability. By focusing on how people will find a group or a post beyond an aesthetic point of view, the filtering system proved to be very effective. `,
        contentImages: [
          {
            contentUrl: niicheHero,
            contentAlt: `Niiche Final Hero Screen`,
            contentImgDesc: `Figure 1.5. Final Landing Page.`,
          },
          {
            contentUrl: niicheCommunity,
            contentAlt: `Niiche Final Community Screen`,
            contentImgDesc: `Figure 1.6. Final Community Page.`,
          },
        ],
      },
    ],
    cards: [
      {
        heading: `Speed Shouldn't Compromise UX`,
        desc: `Midway through the sprint, I faced a choice: simplify the UI to ensure a faster submission, or commit to the complex filtering system that defined the project’s core function. Choosing the latter was the turning point that led to the success of the design. In a content-heavy ecosystem, search and filter are the fundamental utilities that allow users to navigate and find the value they are seeking.`,
      },
    ],
  },
  {
    id: 3,
    slug: `excell-energy-website-revamp`,
    name: `Excell Energy and Powergen Corp (EEPC) - Website Revamp`,
    thumbnailUrl: excellThumbnail,
    thumbnailAlt: `excellThumbnail`,
    desc: `Excell Energy is a subsidiary of MabuhayPower Holdings Corporation, a solar energy provider based in Bonifacio Global City. I, along with my one co-intern, were accepted as a web developer under Mabuhay Energy Corporation (MECO) and were assigned to work under Excell Energy. 
    
    We were tasked to learn new tech stacks (Plasmic, Vue.js, Vercel, and Supabase) and our responsibilities are improving the website performance and modernizing their digital presence and user experience. Ultimately, the full website revamp was completed over 3 months as an internship deliverable.
    `,
    length: `March - June 2025`,
    tag: [
      { name: 'Web', category: 'platform' },
      { name: 'Figma', category: 'tools' },
      { name: 'Plasmic', category: 'tools' },
      { name: 'B2B', category: 'niche' },
      { name: 'Design System', category: 'niche' },
    ],
    introData: {
      introUrl: excellThumbnail,
      introMp4: excellThumbnail,
      introAlt: `Excell Energy Intro Image`,
    },
    ctaData: {
      label: ``,
    },
    calloutData: {
      isNDA: true,
      ndaMessage: `The revamped website is currently being deployed to the live domain. Check back soon for the link to the live production site.`,
    },
    url: `#`,
    link: false,
    highlightData: {
      primaryText: `10 min read`,
      secondaryText: `March - June 2025`,
      theme: `highlight-metadata`,
    },
    roleData: {
      primaryText: `Web Developer`,
      secondaryText: `Team`,
      theme: `highlight-role`,
    },
    // roleDesc: `I, along with my co-intern led the whole project life cycle with one goal in mind — to modernize and assist on increasing the business’ sales. My contribution focused on both design and implementation which includes but not limited to: directly handling research, wireframing, designing, deployment, documentation, and on-boarding process for future content administrators and editorial teams.`,
    roleDesc: [
      {
        role: `Web Developer`,
        task: [
          `Developed responsive web & mobile pages`,
          `Integrated Plasmic Content Management System (CMS)`,
          `Improved SEO`,
          `Optimized image assets`,
          `Fixed layout bugs`
        ],
        tools: [
          `Plasmic`,
          `Vue JS`,
          `Vercel`,
          `Supabase`,
        ]
      },
      {
        role: `UI/UX Designer`, 
        task: [
          `Low and High Fidelity Wireframing`,
          `UX Sitemapping`,
          `Competitor Analysis`
        ],
        tools: [
          `Figma`,
        ]
      },
    ],
    contents: [
      {
        name: `The Challenge`,
        contentTitle: `Rapid Technical Adaptation`,
        contentDesc: `We were required to simultaneously learn and integrate frameworks that were new to us at the time (React/Vue and Plasmic) while managing the entire project life cycle. My co-intern and I are used to creating websites from scratch—using a website builder is not a common practice during our university studies.

Plasmic is an open-source website builder and content manager that aims to ship products faster than traditional development. It also utilizes data sources like a content management system (CMS), Supabase, and Vercel. They also offer free and paid services that will later matter to the company goals. Despite these hurdles, we set our high-value goals:

1. Align design with business requirements.
2. Establish a design system as a basis for the next developer and content managers.
3. Submit the internship deliverables on or before the end of our contract.`,
      },
      {
        name: `The Setup`,
        contentTitle: `Project Kick-Off`,
        contentDesc: `Our initial focus was prioritizing a modern aesthetic while retaining a lengthy, familiar page structure. This led to a crucial learning moment: we over-prioritized visual appeal, resulting in non-compliant UX practices. Specifically, retaining the original brand color as the primary scheme led to a contrast score of 4.82, failing to meet full accessibility standards. Furthermore, feedback indicated that the page structure was too dense, affirming the need to shorten the homepage to improve customer engagement and retention.

The second iteration successfully addressed the page length constraint, distilling content to its essential, straight-to-the-point elements. However, this pivot introduced a new challenge: a brand-to-product misalignment. The design visually suggested the company sold abstract digital or technological products, failing to immediately showcase the core service—solar energy installations. This lack of visual context on the landing page risked creating customer skepticism. This phase taught us the critical importance of ensuring the visual identity immediately communicates the company's value proposition upon initial impression.`,
        contentImages: [
          {
            contentUrl: excellHero,
            contentAlt: `Excell Hero First Draft`,
            contentImgDesc: `Figure 1. First drafted hero section.`,
          },
          {
            contentUrl: excellHero1,
            contentAlt: `Excell Hero Second Draft`,
            contentImgDesc: `Figure 1.2. An iteration of the hero section after the first draft.`,
          },
        ],
      },
      {
        name: `The Process`,
        contentTitle: `Identifying Previous Design Gaps`,
        contentDesc: `The original Projects page, which is a critical proof point for the company's capabilities, utilized a CMS-driven carousel displaying project images with limited metadata; see Figure 1.3. This structure suffered from a major issue:

1. Accessibility and SEO best practices: Relying solely on images to convey project information—a “burned-in” or “baked-in” text (text is part of the image itself and has no alternative text)—creates accessibility barriers and risks a poor user experience on slow connections. Additionally, this information blocks the visual assets and prevents the visitor from viewing the whole image, and the text heavily relies on an overlay to be clearly read. When it comes to SEO, search engines cannot index burned-in information.

In order to solve this problem, we came up with various design sprint but we felt something is lacking. See figure 1.4`,
        contentImages: [
          {
            contentUrl: excellCardDraft,
            contentAlt: `Excell Previous CMS Card`,
            contentImgDesc: `Figure 1.3. Previous CMS with baked-in metadata.`,
          },
          {
            contentUrl: excellCardConcepts,
            contentAlt: `Excell Card Concepts`,
            contentImgDesc: `Figure 1.4. Various concepts we came up with to solve the two major concerns mentioned earlier.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Applying Information Hierarchy for Project Cards`,
        contentDesc: `To address these critical issues, we conducted iterative design sprints focusing on optimizing the project cards. Our final design strategy was guided by conversion goals, prioritizing what instantly catches the eye of the visitors with the final hierarchy: Visual Identifier > Technical Specification (kWp) > Core Metadata.

This layout ensures customers immediately see what the project appears to be in real life and who the client was, establishing legitimacy and driving interest in availing the company’s services.`,
        contentImages: [
          {
            contentUrl: excellCardFinal,
            contentAlt: `Excell Final Card Layout`,
            contentImgDesc: `Figure 1.5. Final card layout for the CMS gallery of the website.`,
          },
          {
            contentUrl: excellCardLive,
            contentAlt: `Excell Card Deployed Version`,
            contentImgDesc: `Figure 1.6. The final layout in actual implementation.`,
          },
        ],
      },
      {
        name: `Project Hand-Off`,
        contentTitle: `On-boarding Process`,
        contentDesc: `The use of Plasmic itself is new not only to us but for the entire company as well, and we were the first to successfully integrate this tech stack. Upon final deployment of the product, I, along with my co-intern, also managed the onboarding process. We focused specifically on authoring step-by-step use of the Content Management System (CMS) of Plasmic for the company’s future developers, content managers, and editorial teams, ensuring clear instructions and efficient use of the new UI/CMS capabilities.`,
        contentImages: [
          {
            contentUrl: excellGuide,
            contentAlt: `Excell CMS Guide Cover`,
            contentImgDesc: `Figure 1.7. Cover of the Onboarding Figma File.`,
          },
          {
            contentUrl: excellFile,
            contentAlt: `Excell CMS Guide Preview`,
            contentImgDesc: `Figure 1.8. Preview of the file.`,
          },
        ],
      },
      {
        name: `Impact and Outcomes`,
        contentTitle: `Established a Future-proofed Design`,
        contentDesc: `By successfully creating a CMS-ready design and providing onboarding documentation, we effectively eliminated the dependency on a design team for daily updates, and the design integrity remains intact. This also comes with a newly established centralized design system for the project revamp, replacing the fragmented legacy architecture with a maintainable library of reusable components and standardized tokens.`,
      },
      {
        name: ``,
        contentTitle: `Quantifiable Results`,
        contentDesc: `At the end of the project, our key success identifier is the overall performance of the website.  We were able to get an overwhelming improvement from the legacy website, and the revamp gained an overall performance of 94%, accessibility of 79%, best practices of 96%, and SEO of 82%, as illustrated below using Google Lighthouse:`,
        contentImages: [
          {
            contentUrl: excellMetric,
            contentAlt: `Excell Lighthouse Metric Score`,
            contentImgDesc: `Figure 1.9. The website's lighthouse metric score.`,
          },
        ],
      },
    ],
    cards: [
      {
        heading: `Design Success in Synergy`,
        desc: `We realized that our objective wasn't just to build a modern website, but to build brand credibility and rebuild what the company had already established. By shifting our focus to customer trust and confidence metrics, we transformed the UI from a simple informational website into a conversion tool.`,
      },
    ],
  },
  {
    id: 4,
    slug: `tica-app`,
    name: `TICA: A Technological Innovation for Communication in Apraxia - A Mobile Application Utilizing AI-Driven Speech Therapy for Children with Apraxia`,
    animationWebm: `/animations/ticaAnimation.webm`,
    animationMp4: `/animations/ticaAnimation.mp4`,
    thumbnailUrl: ticaThumbnail,
    thumbnailAlt: `ticaThumbnail`,
    desc: `Our capstone project—a gamified mobile application developed over 6 months, offering an AI-powered speech therapy for children with Childhood apraxia of speech (CAS). Built with Kivy, an open-source Python framework for developing GUI across various platforms. Notably, this project was also entered and competed in a week-long hybrid innovation event open to all PUP students.`,
    readTime: ` • 10 min read`,
    length: `Aug 2024 - Feb 2025`,
    award: `3ʳᵈ,  ISKOnnovation: The GDSC Ideathon 2024`,
    tag: [
      { name: 'Academic', category: 'type' },
      { name: 'Android', category: 'platform' },
    ],
    introData: {
      introUrl: `/animations/ticaIntro.webm`,
      introMp4: `/animations/ticaIntro.mp4`,
      introAlt: `Tica Intro Image`,
    },
    ctaData: {
      label: `View Award`,
    },
    calloutData: {
      isNDA: false,
      ndaMessage: ``,
    },
    url: `https://www.facebook.com/share/18z6iWjQhb/`,
    link: true,
    highlightData: {
      primaryText: `10 min read`,
      secondaryText: `August 2024 - February 2025`,
      theme: `highlight-metadata`,
    },
    roleData: {
      primaryText: `UI/UX Designer & Front-End Developer`,
      secondaryText: `Team`,
      theme: `highlight-role`,
    },
    roleDesc: [
      {
        role: `UI/UX Designer`, 
        task: [
          `Low and High Fidelity Wireframing`,
          `Prototyping`,
          `User-research`,
          `On-site client interview`
        ],
        tools: [
          `Figma`,
        ]
      },
      {
        role: `Front-End Developer`,
        task: [
          `Developed responsive mobile pages`,
          `Developed the app's theme switch feature`,
          `Optimized image assets`,
          `Fixed layout bugs`
        ],
        tools: [
          `Python`,
          `Kivy`,
          `KivyMD`
        ]
      },
    ],
    contents: [
      {
        name: `The Challenge`,
        contentTitle: `Framework Limitation`,
        contentDesc: `The project utilizes a Python framework, Kivy version 2.3.2 (stable) and KivyMD version 2.0.0 (non-dev, stable release), which are new to us. However, implementing an unfamiliar framework while managing the design phase introduced technical friction. Simultaneously upskilling and adhering to our design challenged our project timeline. As we deepened our understanding of the framework’s component logic, our UI components pivoted to align with the framework's limitations. 

For instance, we wanted to add icons to our lesson and quiz buttons, but as simple as it sounds, it gave us narrow options: 1.) Kivy does not natively allow icons on rounded buttons. 2.) Those buttons that allow icons have strict position requirements. This is only one of the predicaments we faced that challenged our design. In this particular example, we already established rounded buttons across the app, which resulted in either the app crashing or us adjusting the design that did not adhere to the global style; we chose the latter; see Figure 1.`,
        contentImages: [
          {
            contentUrl: ticaChallenge,
            contentAlt: `Tica Challenge`,
            contentImgDesc: `Figure 1. One of the problems we came across that changed our original component design from the rest.`,
          },
          {
            contentUrl: ticaChallenge1,
            contentAlt: `Tica Challenge`,
            contentImgDesc: `Figure 1.2. Another design that we scrapped due to performance issues and framework limitation.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Project Kick-Off`,
        contentDesc: `We are a group of 5 members with me among the three devs (2 front-end developers and 1 back-end developer), our project manager, and our design lead. Together, we aim to meet one of the major requirements: integrating an AI within a 6-month cycle with weekly sprints. At first, we as a group gathered ideas on what the best AI solution to integrate was. With difficulty and availability considered, we opted for an AI that uses the camera to detect facial expressions and determine emotions shown; however, as the project scope requirements were finalized, we ultimately opted for an AI that recognizes speech; see Figure 1.6. later in the process section.`,
        contentImages: [
          {
            contentUrl: ticaDraft1,
            contentAlt: `Tica First Draft`,
            contentImgDesc: `Figure 1.3 The early concept focused on expanding the user experience through multi-modal gameplay. We also intially planned to include notification system on the main nav bar but was changed to settings later on.`,
          },
          {
            contentUrl: ticaDraft,
            contentAlt: `Tica Final Lesson User Flow`,
            contentImgDesc: `Figure 1.4. Initial design explorations for the primary user journey and flow.`,
          },
        ],
      },
      {
        name: `The Process`,
        contentTitle: `Developing the Core Functionality`,
        contentDesc: `At first, our early iterations do not follow a structure (see Figure 1.3., above), and we have yet to figure out which lesson and quiz modules are best to apply. However, as we continued to consult our client, we came up with lesson and quiz gameplay based on articulation hierarchy. Articulation hierarchy is a structured approach in speech therapy to teach a child to produce a sound correctly.

However, due to the project scope limitation, we opt for 4 out of 8 levels. Each chapter follows this sequence: Discrimination > Isolation > Syllables > Words. The first level, discrimination, is the step where the correct sound and the sound they make must be distinguished. Isolation is the stage where a child must produce the sound by itself. Syllables are the stages where sounds and vowels (vowel-consonant (VC) or consonant-vowel (CV)) combine. Lastly, words are the stage where a child must practice using sounds in words.

The goal is to not only help the user speak a word correctly but also help them physically practice it through visuals and AI speech recogniztion system; see Figure 1.6.`,
        contentImages: [
          {
            contentUrl: ticaReference,
            contentAlt: `TICA Reference Materials`,
            contentImgDesc: `Figure 1.5. These are the reference materials gathered during the on-site interview with the client.`,
          },
          {
            contentUrl: ticaLesson,
            contentAlt: `TICA Lesson and Quiz Screens`,
            contentImgDesc: `Figure 1.6. Finalized production screens for course content and assessments.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Shaping the TICA Experience`,
        contentDesc: `Beyond the visuals, we structured the learning modules in a gated progression system where quiz modules remain locked until the prerequisite lesson content is completed; see Figure 1.6. above. This intentional application of Slow Design prevents cognitive overwhelm and encourages intentionality, ensuring that users pause for reflection and discussion rather than rushing through.
        
For our font choices, Lexend Deca is chosen for the body text as it is short and wide, which creates enough "breathing room" that makes reading clear. On the other hand, Passion One is chosen as the display font, as it is tall and narrow, which creates the emphasis we needed for important text like call-to-action buttons.`,
        contentImages: [
          {
            contentUrl: ticaFonts,
            contentAlt: `TICA Fonts`,
            contentImgDesc: `Figure 1.7. Final app typography and usage.`,
          },
          {
            contentUrl: ticaDesign,
            contentAlt: `TICA Design`,
            contentImgDesc: `Figure 1.8. Lesson and Quiz Success Screens as the result of the slow design approach.`,
          },
        ],
      },
      {
        name: ``,
        contentTitle: `Designing for the Sensory`,
        contentDesc: `While standard WCAG contrast ratios were a benchmark, our primary design goal was to prevent cognitive fatigue. For a younger demographic, we opted for various approaches that move away from the traditional standards. We highly emphasized soft visuals, emotional connection, and personalization.

In Figure 1.9.1, we created custom assets to establish emotional connection and make each lesson and quiz less intimidating and more engaging. Our mascots, from left to right, are Tica, our giraffe; Chuck the chicken, who originally was a white chicken, but we opted for a brown-feathered one as it is the most common you can see in the country; and finally, our brand poster mascot, Finn the fox, who's always bright and cheerful! My fellow front-end dev developed Chuck the chicken, our design lead made Finn the fox, and I developed Tica the giraffe.`,
        contentImages: [
          {
            contentUrl: ticaColors,
            contentAlt: `TICA Color Palette`,
            contentImgDesc: `Figure 1.9. Provided multi-theme support with client-validated color palette that allow users to choose between the visual intensities of the interface based on the user's personal comfort and environmental lighting.`,
          },
          {
            contentUrl: ticaAsset,
            contentAlt: `TICA Asset Set`,
            contentImgDesc: `Figure 1.9.1. Custom-made assets (icons and components included) developed exclusively for this app using Figma.`,
          },
        ],
      },
      {
        name: `Impact and Outcomes`,
        contentTitle: `Met High Value Goals`,
        contentDesc: `We ensured an on-time submission within the 6-month cycle while maintaining a polished and functional final version of the app. Additionally, our UI/UX design includes a total of 65 screens with various components and states that are prototype-ready. This allows future researchers and developers to look into and improve the experience.`,
      },
    ],
    cards: [
      {
        heading: `Workflow Growth and System Design`,
        desc: `This project taught us the importance of establishing a design system and taking workflow optimization into account. While we initially maintained visual integrity through manually adjusting our screens and components and adhering to our style, this experience became the blueprint for our transition into systematic design. We are able to integrate automation—such as Auto Layout and tokens—during the final sprints. 
        
This approach directly improved our workflow during internship, where I and a co-intern (yes, the other front-end dev in this project) successfully established our first formal design system.`,
      },
    ],
  },
    // {
//     id: 1,
//     slug: `im-gonna-be-evil`,
//     name: `I'm Gonna Be Evil - A Visual Novel Game, Demo Now Available on Steam`,
//     animationWebm: `animations/ootuAnimation.webm`,
//     animationMp4: `animations/ootuAnimation.mp4`,
//     thumbnailUrl: igbeThumbnail,
//     thumbnailAlt: `I'm Gonna Be Evil - Visual Novel Game`,
//     desc: `I'm Gonna Be Evil is a visual novel released on Steam and Itch.`,
//     readTime: `• 5 min read`,
//     length: `January 2026 `,
//     award:`Featured at Philippine GameDev Expo (PGDX) 2026`,
//     tag: [
//       {name: `Freelance`, category: `type`},
//       {name: `Web`, category: `platform`},
//       {name: `Steam`, category: `platform`},
//     ],
//     introData:
//     {
//       introUrl: `/animations/ootuIntro.webm`,
//       introMp4: `/animations/ootuIntro.webm`,
//       introAlt: `Order of the Undead Intro Image`,
//     },
//     ctaData: {
//       label: `View Itch.io Page`,
//     },
//     calloutData: {
//       isNDA: false,
//       ndaMessage: ``,
//     },
//     url: `https://chanchangames.itch.io/order-of-the-undead`,
//     link: true,
//     highlightData: {
//       primaryText: `10 min read`,
//       secondaryText: `August - September 2025`,
//       theme: `highlight-metadata`,
//     },
//     roleData: {
//       primaryText: `UI/UX Lead & Brand Identity Designer`,
//       secondaryText: `Multi-Role`,
//       theme: `highlight-role`,
//     },
//     // roleDesc: `Led UI/UX design and closely collaborated with the UI developer. I also worked alongside other roles: writers, artists, composer, and many more. After handing off the UI, I worked as the brand identity designer of the game, where I developed the logo, character cards, and the aesthetic direction of the itch.io page of the game. 
    
//     // The game is available for web and desktop download and was officially launched on Itch.io under ChanChan Games on September 30, 2025.`,
//     roleDesc: [
//       {
//         role: `UI/UX Designer`, 
//         task: [
//           `Low and High Fidelity Wireframing`,
//           `Prototyping`,
//           `User-research`,
//           `On-site client interview`
//         ],
//         tools: [
//           `Figma`,
//         ]
//       },
//       {
//         role: `Graphic Designer`,
//         task: [
//           `Developed responsive mobile pages`,
//           `Developed the app's theme switch feature`,
//           `Optimized image assets`,
//           `Fixed layout bugs`
//         ],
//         tools: [
//           `Python`,
//           `Kivy`,
//           `KivyMD`
//         ]
//       },
//     ],
//     contents: [
//       {
//         name: `The Challenge`,
//         contentTitle: `Rapid Development Time`,
//         contentDesc: `The project aims to launch a polished game entry where asset creation strictly begins at the start of September. However, making a visual novel—in a competition, nonetheless—is anything but easy; it requires full team effort. Roles are grouped, and each has a max of 1 week to work on their tasks. Our high-value goals:

// 1. Assets polished, mechanics clear, and ultimately no bugs.
// 2. Make the game as immersive as we possibly can.
// 3. Publish and launch the game on or before September 30.`,
//       },
//       {
//         name: `The Setup`,
//         contentTitle: `Project Kick-Off`,
//         contentDesc: `With the 30-day sprint, we had to work with an agile methodology. The project's critical path is the writing and UI/UX (parallel production), with our deliverables putting various roles on hold until we reach finalization on Week 1. During pre-production I prepared and applied Object-Oriented User Experience (OOUX) and Mood Board as a foundation for later processes where ideas of the plot, mechanic, and number of characters were discussed.`,
//         contentImages: [
//           {
//             contentUrl: ootuOOUX,
//             contentAlt: `Order of the Undead OOUX`,
//             contentImgDesc: `Figure 1. Applied OOUX to map data and identify relationship between said data and user flow. Note: During this time, the game is named as "Undead Cafe" temporarily.`,
//           },
//           {
//             contentUrl: ootuWireframes,
//             contentAlt: `Order of the Undead Wireframes`,
//             contentImgDesc: `Figure 1.1. High-fidelity wireframes to visualize user flow early.`,
//           },
//         ],
//       },
//       {
//         name: `The Process`,
//         contentTitle: `UX Discovery: Layout Effectiveness`,
//         contentDesc: `Visual novels often have mini-games, and this project is no exception. This mode is a cooking game and it is an integral part of the story as the ending paths rely on this. The premise is that our main character works for a cafe to build her new life, where she meets new characters and learns about their preferences. However, there are three major problems: Unclear visual hierarchy, High interaction cost, and an overloaded cognitive load.

// The solution is to separate them into two sides and condense the method into one preparation point (a kiosk) and use Z-pattern layout. It allows the players to naturally scan categories and ingredients that is placed near each other.`,
//         contentImages: [
//           {
//             contentUrl: ootuDraft,
//             contentAlt: `Order of the Undead No cohesive layout`,
//             contentImgDesc: `Figure 1.2. A layout with no pattern or form. Orange circles stand for the preparation points, and dashed lines are the paths to each. This layout overcomplicates the process of preparing a single recipe.`,
//           },
//           {
//             contentUrl: ootuDraftFix,
//             contentAlt: `Order of the Undead Fixed Layout`,
//             contentImgDesc: `Figure 1.3. Preliminary Design Layout. The final production version was simplified to accommodate a reduced asset set while maintaining the UX established in this draft.`,
//           },
//         ],
//       },
//       {
//         name: ``,
//         contentTitle: `Developing Core Pages: Grimoire`,
//         contentDesc: `The Grimoire's primary function is to contextualize obtainable items and add to the world-building. The spell is unlocked by default, and the Grimoire itself is only accessible after finishing the early stage of the story. The items are mandatory for achieving endings; the system provides undiscovered entries with information regarding their sources. This ensures that even if the unlocked inventory is incomplete, it will contribute to what ending a player will get.`,
//         contentImages: [
//           {
//             contentUrl: grimoireFirstPage,
//             contentAlt: `Grimoire First Page`,
//             contentImgDesc: `Figure 1.4. Grimoire First Page.`,
//           },
//           {
//             contentUrl: grimoireSecondPage,
//             contentAlt: `Grimoire Second Page`,
//             contentImgDesc: `Figure 1.5. Grimoire Second Page.`,
//           },
//         ],
//       },
//       {
//         name: ``,
//         contentTitle: `Developing Core Pages: Spell Circle (Inventory)`,
//         contentDesc: `This screen serves as the bridge between the cooking game and the grimoire. As mentioned earlier, one of our high-value goals is to make the game as immersive as possible, and thus this screen is added for world-building purposes. 
    
// In the story—SPOILER ALERT—our main character performs the spell in a graveyard; you can only do so when you are near achieving an ending. The circle in Figure 1.6 will be bursting with color the moment the player enacts the spell, thus adding more impact to your action in the story.`,
//         contentImages: [
//           {
//             contentUrl: ootuInventory,
//             contentAlt: `Order of the Undead Inventory`,
//             contentImgDesc: `Figure 1.6. This spell circle serves as the inventory. Based on the circle from Figure 1.4, our main character has to prepare and perform the spell in a larger space.`,
//           },
//           {
//             contentUrl: ootuInventoryFlow,
//             contentAlt: `Order of the Undead Inventory Flow.`,
//             contentImgDesc: `Figure 1.7. Inventory user flow.`,
//           },
//         ],
//       },
//       {
//         name: ``,
//         contentTitle: `Designing the Assets`,
//         contentDesc: `The story’s setting is modern day with fantasy themes. During early explorations, color and texture choices were too old to fit the setting; thus, I went with notebooks with modern clips and spiral holders. The only exception to this style is the Grimoire, which is intentionally made to look old and magical. This approach ensures that we can avoid a disconnect between assets and the plot of the story, as the UI is the foundation.`,
//         contentImages: [
//           {
//             contentUrl: ootuAssetSet,
//             contentAlt: `Order of the Undead Production Assets`,
//             contentImgDesc: `Figure 1.8. Production assets prepared for this case study only.`,
//           },
//           {
//             contentUrl: ootuExplorations,
//             contentAlt: `Order of the Undead Asset Explorations`,
//             contentImgDesc: `Figure 1.9. Early design explorations.`,
//           },
//         ],
//       },
//       {
//         name: `Impact and Outcomes`,
//         contentTitle: `Met All High Value Goals`,
//         contentDesc: `All UI/UX deliverables were completed on time within the first 7 days of the 30-day sprint. This enabled the art and other departments to work simultaneously on their tasks. Additionally, all of the screens and user flow aligned with the design so that it kept the integrity of the plot.`,
//       },
//       {
//         name: ``,
//         contentTitle: `Established Design System and Library`,
//         contentDesc: `Established a design system of over 120 assets to maintain visual and functional integrity across the game. This ecosystem of screens, components, and states reduces design redundancy and speeds development time as well as providing a roadmap for future contributors to improve the game.`,
//       },
//     ],
//     cards: [
//       {
//         heading: `Designing for Environmental Versatility`,
//         desc: `Assets was effective for the character’s primary setting: the cafe. However, I identified a disconnect between the dialogue window and background images. My takeaway is to implement variants early to account for narrative and environmental context. Designing for immersion is always a good thing, but it must be done with all possible settings within the scope.`,
//       },
//     ],
//   },
]
