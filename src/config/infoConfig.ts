export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Minaruzzaman Shovon'
export const headline = 'Water Resources Engineering Student, AI & Web Developer, Cybersecurity Enthusiast.'
export const introduction = 'I’m Minaruzzaman Shovon, a Water Resources Engineering student at CUET, passionate about AI, geospatial analysis, and full-stack development.'
export const email = 'minar.svn@gmail.com'
export const githubUsername = 'minarsvn'

// about page
export const aboutMeHeadline = "I'm Minaruzzaman Shovon, a Water Resources Engineering student at CUET."
export const aboutParagraphs = [
  "I am passionate about climate change, geospatial analysis, and AI. I have experience in machine learning, web development, and cybersecurity.",
  "I lead the CUET Cyber Security Club and have founded non-profit initiatives for student development.",
  "My work spans research, real-time environmental monitoring, and building AI-powered tools for social good."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/sh00von',
    external: true
  },
  {
    name: 'Discord',
    icon: 'discord',
    href: 'https://discord.gg',
    external: true
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];



