// Static resume data. Everything the site renders comes from here.
//
// TODO (you): every `impact` array below is empty on purpose. One
// quantified outcome per role and per project is the single biggest
// improvement this page can get — throughput, latency, rows migrated,
// users served, cost saved, team size. See README.md.

export const profile = {
  firstName: 'Md',
  lastName: 'Abdullah',

  // Lead with what you are actually hired for. "Software Engineer II" is
  // an internal level, so it stays secondary.
  title: 'Backend & Full-Stack Engineer',
  level: 'Software Engineer II at Nifty Coders',

  headline:
    '.NET engineer building distributed, event-driven systems for enterprise clients.',

  summary:
    'Six years across enterprise, healthcare, manufacturing and consumer products — mostly backend: microservices, message-driven pipelines and cloud-native platforms on AWS and Azure, with enough front-end work (Blazor, React) to own a feature end to end.',

  availability: 'Open to remote and contract work',
  location: 'Dhaka, Bangladesh',
  timezone: 'UTC+6',

  email: 'abdullahalrana@gmail.com',
  phone: '+880 1724 840207',
  phoneHref: '+8801724840207',

  // Google Drive direct-download endpoint for the CV.
  resumeUrl:
    'https://drive.google.com/uc?export=download&id=1LlUll7Emedl6aRbUofgWIM5AyuUUYhV4',
  resumeViewUrl:
    'https://drive.google.com/file/d/1LlUll7Emedl6aRbUofgWIM5AyuUUYhV4/view',

  siteUrl: 'https://mdabdullah.dev',

  highlights: [
    { value: '6', suffix: 'yrs', label: 'Building production software' },
    { value: '4', suffix: 'clients', label: 'Enterprise, across 3 continents' },
    { value: '3.81', suffix: '/ 4.00', label: 'BSc CSE, IUBAT' },
  ],
}

// Named clients are the strongest signal on this page, so they get to
// sit directly under the intro instead of being buried in a bullet.
export const clients = [
  'IQVIA',
  'Panopto',
  'Lumistry',
  'Rensa',
  'SMS Higher Education',
]

export const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-abdullah-697518135/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AbdullahAlRana',
    icon: 'github',
  },
  {
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/11351725/md-abdullah',
    icon: 'stackoverflow',
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: 'mail',
  },
]

export const experience = [
  {
    id: 'nifty-coders',
    company: 'Nifty Coders Pvt. Ltd.',
    href: 'https://www.niftycoders.com/',
    role: 'Software Engineer II',
    start: '2024-06',
    end: null,
    location: 'Dhaka, Bangladesh',
    clients: ['IQVIA', 'Lumistry', 'Panopto'],
    impact: [],
    points: [
      'Design, build and maintain backend services for enterprise clients in life sciences, pharmacy and media.',
      'Guide developers and run code reviews, resolving the technology and business trade-offs between teams.',
      'Refactor and optimise existing applications for scalability, maintainability and performance.',
      'Use AI-assisted development (Claude, Cursor) to shorten delivery cycles.',
    ],
    stack: [
      '.NET',
      'gRPC',
      'RabbitMQ',
      'Microservices',
      'AWS',
      'Azure',
      'PostgreSQL',
      'xUnit',
    ],
  },
  {
    id: 'hawarit',
    company: 'HawarIT Ltd.',
    href: 'https://www.hawarit.com/',
    role: 'Software Engineer',
    start: '2022-01',
    end: '2024-06',
    location: 'Dhaka, Bangladesh',
    clients: ['Rensa Family Company (Netherlands)'],
    impact: [],
    points: [
      'Built Revit plug-ins for AutoCAD that derive engineering tool requirements from BOM inputs, including detailed 3D geometric processing.',
      'Rebuilt the existing ordering system on Blazor, .NET Web API and Azure DevOps CI/CD — now the tool most Rensa Revit engineers and clients work in daily.',
      'Kept the codebase fully covered by unit tests (xUnit, bUnit).',
      'Contributed across requirement analysis, development and production deployment.',
    ],
    stack: [
      '.NET',
      'Blazor',
      'WPF',
      'LINQ',
      'SQL Server',
      'Azure',
      'bUnit',
      'xUnit',
    ],
  },
  {
    id: 'sq-group',
    company: 'SQ Group',
    href: 'https://www.sqgc.com/',
    role: 'Software Developer',
    start: '2020-10',
    end: '2021-12',
    location: 'Dhaka, Bangladesh',
    clients: [],
    impact: [],
    points: [
      'Built order-and-delivery, vehicle acquisition and procurement management systems in .NET Core.',
      'Developed courier management, garments quality detection and a real-time production dashboard.',
      'Shipped QCafe — in-room coffee ordering with billing management.',
      'Wrote the reporting layer and tuned SQL for high-traffic queries.',
    ],
    stack: [
      '.NET Core',
      'MVC',
      'ReactJS',
      'jQuery',
      'Stored Procedures',
      'SQL Server',
      'Dapper',
    ],
  },
]

export const projects = [
  {
    id: 'lumistry',
    name: 'Lumistry AI Automation',
    client: 'Lumistry',
    via: 'Nifty Coders',
    start: '2026-07',
    end: null,
    role: 'Full-Stack Developer',
    description:
      'Automation layer over pharmacy management software: it drives the vendor UI, processes data unattended, and uses AI to survive version upgrades and layout changes that would break a scripted integration.',
    impact: [],
    stack: ['.NET WPF', 'Next.js', 'FlaUI', 'PostgreSQL', 'JumpCloud'],
  },
  {
    id: 'panopto',
    name: 'Panopto Content Migration Platform',
    client: 'Panopto',
    via: 'Nifty Coders',
    start: '2026-01',
    end: '2026-06',
    role: 'Back-End Developer',
    description:
      'Automates migration of content assets into the Panopto ecosystem. Background processing pipelines and API integrations move high volumes reliably, with retry and resume, and almost no manual intervention.',
    impact: [],
    stack: [
      '.NET',
      'AWS SQS',
      'AWS Batch',
      'Lambda',
      'PostgreSQL',
      'Background services',
    ],
  },
  {
    id: 'iqvia',
    name: 'IQVIA Orchestrated Analytics Platform',
    client: 'IQVIA',
    via: 'Nifty Coders',
    start: '2024-06',
    end: '2026-01',
    role: 'Back-End Developer',
    description:
      'A modular, end-to-end suite delivering brand performance solutions for life sciences through scalable, high-precision analytics and insights.',
    impact: [],
    stack: ['ASP.NET Web API', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'rensa',
    name: 'Rensa Revit Add-In',
    client: 'Rensa Family Company',
    via: 'HawarIT',
    start: '2022-01',
    end: '2024-06',
    role: 'Full-Stack Developer',
    href: 'https://rensa.nl/kennis-en-diensten/digitaal/revit',
    description:
      'An Autodesk Revit add-in that turns BOM input into engineering tool requirements, replacing a long manual process for Rensa engineers and their clients.',
    impact: [],
    stack: ['WPF', 'Blazor', 'WebView2', 'ASP.NET Web API'],
  },
  {
    id: 'uapp',
    name: 'Uapp.uk',
    client: 'SMS Higher Education Group',
    via: 'SQ Group',
    start: '2021-06',
    end: '2021-12',
    role: 'Full-Stack Developer',
    href: 'https://uapp.uk/',
    description:
      'An online higher-education application and management system handling student applications end to end.',
    impact: [],
    stack: ['ASP.NET Core', 'ReactJS', 'LINQ', 'MSSQL'],
  },
]

// Split so a reader can tell what you'd be hired for from what you've
// merely touched.
export const skills = {
  primary: [
    {
      group: 'Backend',
      items: [
        'C#',
        '.NET / ASP.NET',
        'Microservices',
        'Clean Architecture',
        'RabbitMQ',
        'gRPC',
        'WebSocket',
      ],
    },
    {
      group: 'Data',
      items: [
        'PostgreSQL',
        'SQL Server',
        'Entity Framework',
        'Dapper',
        'MongoDB',
      ],
    },
    {
      group: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Docker', 'Azure DevOps', 'GitLab CI/CD'],
    },
    {
      group: 'Testing',
      items: ['xUnit', 'bUnit', 'Unit & integration testing'],
    },
  ],
  familiar: [
    'Blazor',
    'React',
    'Next.js',
    'WPF',
    'JavaScript',
    'jQuery',
    'FlaUI',
    'WebView2',
  ],
}

export const education = [
  {
    id: 'iubat',
    degree: 'BSc in Computer Science & Engineering',
    school:
      'International University of Business Agriculture and Technology (IUBAT)',
    start: '2017-01',
    end: '2020-12',
    location: 'Dhaka, Bangladesh',
    note: 'CGPA 3.81 out of 4.00',
  },
]

export const publications = [
  {
    id: 'wafermaps',
    year: '2021',
    title:
      'Pattern Recognition in Analog Wafermaps with Multiple Ensemble Approaches',
    venue: 'IEEE Xplore · ICREST 2021',
    summary:
      'Semiconductor wafers fail in visual patterns that hint at the process step responsible. This paper compares ensemble classifiers for recognising those patterns automatically, so defects can be traced back to a cause without manual inspection.',
    citation:
      'M. Abdullah, M. H. Rahman and S. Akhter, "Pattern Recognition in Analog Wafermaps with Multiple Ensemble Approaches," 2021 2nd International Conference on Robotics, Electrical and Signal Processing Techniques (ICREST), Dhaka, Bangladesh, 2021, pp. 587–591.',
    doi: '10.1109/ICREST51555.2021.9331084',
    href: 'https://doi.org/10.1109/ICREST51555.2021.9331084',
  },
]

// Shown in the footer so a reader can tell the page is current.
export const lastUpdated = '2026-09'
