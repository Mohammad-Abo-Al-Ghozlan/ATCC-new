export interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  coverImage: string
  images: string[]
}

/**
 * Helper to build a public asset path with proper encoding for spaces.
 */
function assetPath(relativePath: string): string {
  return (
    "/assets/" +
    relativePath
      .split("/")
      .map((segment) => encodeURIComponent(segment))
      .join("/")
  )
}

/**
 * All project data extracted from the original index.html portfolio.
 * Images are grouped by folder structure inside /public/assets/.
 */
export const projects: Project[] = [
  {
    id: "asphalt",
    title: "Asphalt Work – Substation Yanbu (IWP 380)",
    category: "Asphalt & Road Works",
    description:
      "Large-scale asphalt paving and road infrastructure for the Yanbu 04-BSB-ESF substation area. The project involved precision grading, multi-layer asphalt application, and heavy-duty pavement built to withstand industrial traffic loads.",
    tags: ["Asphalt", "Yanbu", "Substation", "Road Works"],
    coverImage: assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/main.png"),
    images: [
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/main.png"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/work2.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/work3.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/work4.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/work5.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/WhatsApp Image 2026-01-01 at 10.27.29 AM.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/WhatsApp Image 2026-01-01 at 10.27.30 AM.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/WhatsApp Image 2026-01-01 at 10.27.30 A.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/WhatsApp Image 2026-01-01 at 10.27.30 AM (1).jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/WhatsApp Image 2026-01-01 at 10.27.30 AM (2).jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/WhatsApp Image 2026-01-01 at 10.27.30 AM (4).jpeg"),
    ],
  },
  {
    id: "neom",
    title: "NEOM – The Line Concrete & Façade Mock-up",
    category: "Concrete Works",
    description:
      "Façade mock-up and concrete structure works for The Line mega-project within NEOM. Included high-precision formwork, reinforced concrete placement, and architectural façade prototyping to meet NEOM's exacting quality standards.",
    tags: ["NEOM", "The Line", "Concrete", "Façade"],
    coverImage: assetPath("faced mock-up The line  Neom project- Concrete work/main.jpeg"),
    images: [
      assetPath("faced mock-up The line  Neom project- Concrete work/main.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/neom2.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/neom3.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/neom4.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/neom5.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/now1.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/now2.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/now3.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/now4.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/now5.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/now6.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/now7.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/now8.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/now9.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/now10.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/WhatsApp Image 2026-01-01 at 10.26.37 AM.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/WhatsApp Image 2026-01-01 at 10.26.37 AM (1).jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/WhatsApp Image 2026-01-01 at 10.26.41 AM.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/WhatsApp Image 2026-01-01 at 10.26.42 AM.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/WhatsApp Image 2026-01-01 at 10.26.42 AM (7).jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/WhatsApp Image 2026-01-01 at 10.26.43 AM.jpeg"),
      assetPath("faced mock-up The line  Neom project- Concrete work/WhatsApp Image 2026-01-01 at 10.26.43 AM (1).jpeg"),
    ],
  },
  {
    id: "jeddah",
    title: "Jeddah Central Stadium – Structural Concrete",
    category: "Structural Works",
    description:
      "Structure concrete works for the Jeddah Central Stadium and its surrounding villages. Scope included mass concrete foundations, column and slab casting, and finishing of support structures for the stadium complex.",
    tags: ["Jeddah", "Stadium", "Concrete", "Structural"],
    coverImage: assetPath("STRUCTURE CONCRETE WORKS FOR JEDDAH  CENTERAL STADIUM AND SURROUNDING VILLAGES/main.jpeg"),
    images: [
      assetPath("STRUCTURE CONCRETE WORKS FOR JEDDAH  CENTERAL STADIUM AND SURROUNDING VILLAGES/main.jpeg"),
      assetPath("STRUCTURE CONCRETE WORKS FOR JEDDAH  CENTERAL STADIUM AND SURROUNDING VILLAGES/img2.jpeg"),
      assetPath("STRUCTURE CONCRETE WORKS FOR JEDDAH  CENTERAL STADIUM AND SURROUNDING VILLAGES/img3.jpeg"),
      assetPath("STRUCTURE CONCRETE WORKS FOR JEDDAH  CENTERAL STADIUM AND SURROUNDING VILLAGES/img4.jpeg"),
      assetPath("STRUCTURE CONCRETE WORKS FOR JEDDAH  CENTERAL STADIUM AND SURROUNDING VILLAGES/img5.jpeg"),
    ],
  },
  {
    id: "theline",
    title: "The Line – Infrastructure & Earthworks",
    category: "Infrastructure",
    description:
      "Major infrastructure and ground preparation works supporting The Line development. Activities included site clearing, earthmoving, grading, and sub-base preparation across the expansive project footprint.",
    tags: ["The Line", "NEOM", "Earthworks", "Infrastructure"],
    coverImage: assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new9.jpeg"),
    images: [
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new9.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new1.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new2.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new3.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new4.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new5.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new6.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new7.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new8.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new10.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new11.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new12.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new13.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new14.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new15.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new16.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new17.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new18.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new19.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new20.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new21.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new22.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new23.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new24.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new25.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new26.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380/new27.jpeg"),
    ],
  },
  {
    id: "water",
    title: "Water & Sewage Network Works",
    category: "Utilities & Networks",
    description:
      "Comprehensive water supply and sewage network installation including pipeline laying, manhole construction, pressure testing, and connection to main distribution lines across multiple residential and industrial zones.",
    tags: ["Water Networks", "Sewage", "Pipelines", "Utilities"],
    coverImage: assetPath("Water and sewage networks works/mainnew.jpeg"),
    images: [
      assetPath("Water and sewage networks works/mainnew.jpeg"),
      assetPath("Water and sewage networks works/main.jpeg"),
      assetPath("Water and sewage networks works/new1.jpeg"),
      assetPath("Water and sewage networks works/new2.jpeg"),
      assetPath("Water and sewage networks works/new3.jpeg"),
      assetPath("Water and sewage networks works/new4.jpeg"),
      assetPath("Water and sewage networks works/new5.jpeg"),
      assetPath("Water and sewage networks works/new6.jpeg"),
      assetPath("Water and sewage networks works/new7.jpeg"),
      assetPath("Water and sewage networks works/new8.jpeg"),
      assetPath("Water and sewage networks works/new9.jpeg"),
      assetPath("Water and sewage networks works/new10.jpeg"),
      assetPath("Water and sewage networks works/new11.jpeg"),
      assetPath("Water and sewage networks works/new12.jpeg"),
      assetPath("Water and sewage networks works/new13.jpeg"),
      assetPath("Water and sewage networks works/new14.jpeg"),
      assetPath("Water and sewage networks works/new15.jpeg"),
      assetPath("Water and sewage networks works/water2.jpeg"),
      assetPath("Water and sewage networks works/water3.jpeg"),
      assetPath("Water and sewage networks works/water4.jpeg"),
      assetPath("Water and sewage networks works/water5.jpeg"),
    ],
  },
  {
    id: "general",
    title: "Asphalt & Civil Works – Phase 2",
    category: "Civil Works",
    description:
      "Continuation of asphalt and general civil works including compaction, curb laying, storm drainage channels, and finishing of auxiliary roads and parking areas serving the substation facility.",
    tags: ["Civil Works", "Asphalt", "Drainage", "Phase 2"],
    coverImage: assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/main.jpg"),
    images: [
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/main.jpg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/asp2.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/asp4.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/asph1.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/asph3.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw1.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw2.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw3.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw4.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw5.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw6.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw7.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw8.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw9.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw10.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw11.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw12.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw13.jpeg"),
      assetPath("Asphalt work Substation Yanbu04-BSB-ESF-IWP 380 part2/niw14.jpeg"),
    ],
  },
  {
    id: "theline-structure",
    title: "The Line – Structural Works",
    category: "Structural Works",
    description:
      "On-site structural construction activities for The Line, encompassing foundation slabs, retaining walls, and elevated structural elements aligned with the linear city's unique engineering requirements.",
    tags: ["The Line", "NEOM", "Structure", "Foundations"],
    coverImage: assetPath("The line/main.jpeg"),
    images: [
      assetPath("The line/main.jpeg"),
      assetPath("The line/WhatsApp Image 2026-01-01 at 10.26.46 AM.jpeg"),
      assetPath("The line/WhatsApp Image 2026-01-01 at 10.26.57 AM.jpeg"),
      assetPath("The line/WhatsApp Image 2026-01-01 at 10.26.57 AM (1).jpeg"),
      assetPath("The line/WhatsApp Image 2026-01-01 at 10.26.57 AM (3).jpeg"),
      assetPath("The line/WhatsApp Image 2026-01-01 at 10.26.57 AM (4).jpeg"),
      assetPath("The line/WhatsApp Image 2026-01-01 at 10.26.58 AM.jpeg"),
    ],
  },
]
