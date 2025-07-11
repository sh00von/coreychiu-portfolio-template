// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects 
  export const projects: Array<ProjectItemType> = [
    {
      name: 'Google Earth Engine Code Assistant',
      description: 'AI agent for geospatial analysis, generates GEE code, guides workflows, and provides interactive training.',
      link: { href: 'https://zenith.nexite.site/', label: 'Google Earth Engine Code Assistant' },
      techStack: ['Python', 'RAG', 'LLMs'],
      tags: ['AI', 'Geospatial', 'Assistant']
    },
    {
      name: 'Near Real Time Flood Monitoring System',
      description: 'Real-time flood mapping and analysis using Sentinel-1 SAR data and GEE.',
      link: { href: '#', label: 'Near Real Time Flood Monitoring System' },
      techStack: ['Google Earth Engine', 'Sentinel-1'],
      tags: ['Flood Monitoring', 'Remote Sensing']
    },
    {
      name: 'GEE App: LULC Comparison over Years',
      description: 'Interactive GEE app to compare LULC maps across years in Bangladesh.',
      link: { href: 'https://ee-minarsvn.projects.earthengine.app/view/lulc-esv', label: 'LULC Comparison App' },
      techStack: ['Google Earth Engine'],
      tags: ['LULC', 'Remote Sensing']
    },
    {
      name: 'GEE App: Seasonal Air Pollution Variability in Chittagong',
      description: 'GEE app to analyze seasonal air pollution using Sentinel-5P data.',
      link: { href: 'https://ee-minarsvn.projects.earthengine.app/view/air-quality-chittagong', label: 'Air Quality Chittagong' },
      techStack: ['Google Earth Engine', 'Sentinel-5P'],
      tags: ['Air Quality', 'Remote Sensing']
    },
    {
      name: 'LocaPedia: Wikipedia Place Explorer',
      description: 'Web app visualizing geotagged Wikipedia places for spatial exploration.',
      link: { href: 'https://locapedia.vercel.app/', label: 'LocaPedia' },
      techStack: ['Next.js', 'React', 'Vercel'],
      tags: ['Geospatial', 'Wikipedia']
    }
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    
    {
      name: 'SPARQ',
      description: 'AI agent for automated Wikipedia-style article creation and expert-backed synthesis.',
      link: { href: '#', label: 'SPARQ' },
      techStack: ['Python', 'LLMs', 'RAG', 'Web Scraping'],
      tags: ['AI', 'Knowledge Base']
    },
    {
      name: 'Bangladesh LAW AI Agent',
      description: 'AI-powered legal assistant for Bangladesh law, supports Q&A and legal interpretation.',
      link: { href: '#', label: 'Bangladesh LAW AI Agent' },
      techStack: ['Python', 'LLMs', 'RAG', 'Web Scraping'],
      tags: ['AI', 'Legal']
    }
  ]

export type ResearchPaperType = {
  title: string
  authors: string
  description: string
  status?: string
  link?: { href: string, label: string }
}

export const researchPapers: Array<ResearchPaperType> = [
  {
    title: 'Rolling Window-Based Anomaly Detection in the Halda River Using Isolation Forest and Explainable AI (XAI)',
    authors: 'Minaruzzaman Shovon et al.',
    description: 'Anomaly detection in the Halda River using Isolation Forest and explainable AI techniques.',
    status: 'In Progress'
  },
  {
    title: 'Bengali Text-to-Chart Generation Using BERT-Based Natural Language Processing and Structured Visualization Mapping',
    authors: 'Minaruzzaman Shovon et al.',
    description: 'Generating charts from Bengali text using BERT-based NLP and visualization mapping.',
    status: 'In Progress'
  },
  {
    title: 'Analyzing Seasonal Variation in Air Quality with Google Earth Engine (GEE): A Case Study of Chattogram, Bangladesh',
    authors: 'Minaruzzaman Shovon et al.',
    description: 'Research on seasonal air quality variation using GEE and satellite data.',
    status: 'In Progress'
  },
  {
    title: 'Changes in Ecosystem Service Values Due to the Changes in Land Use and Land Cover Dynamics in Bangladesh',
    authors: 'Minaruzzaman Shovon et al.',
    description: 'Study of LULC change impacts on ecosystem service values in Bangladesh.',
    status: 'In Progress'
  },
  {
    title: 'Understanding Urban Heat Island Dynamics: Interpretable Prediction of Land Surface Temperature through Multi-Factorial Explainable AI (XAI)',
    authors: 'Minaruzzaman Shovon et al.',
    description: 'Urban heat island analysis and interpretable AI for LST prediction.',
    status: 'In Progress'
  },
  {
    title: 'Interpretable Detection of Cross-Site Scripting (XSS) Attacks Using Explainable AI Techniques',
    authors: 'Minaruzzaman Shovon et al.',
    description: 'Cybersecurity research on XSS detection using XAI.',
    status: 'In Progress'
  },
  {
    title: 'Analysis and Prediction of Time Series variation in Rainfall by Machine Learning Approach: A case study of Sylhet & Sreemangal',
    authors: 'Minaruzzaman Shovon et al.',
    description: 'Rainfall time series analysis and prediction using ML.',
    status: 'In Progress'
  }
]
  