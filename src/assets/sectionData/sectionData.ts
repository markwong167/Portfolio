import mark from "@/assets/images/Mark_Wong.webp";
import leagoJpg from "@/assets/images/leago.webp";
import aiFoundedJpg from "@/assets/images/aiFounded.webp";
import greenPartyWebp from "@/assets/images/greenParty.webp";
import builderLynxPng from "@/assets/images/builderLynx.webp";
import usChessWebp from "@/assets/images/usChess.webp";
import { Home, Building2, Swords, Crown, Trees, ChartBar } from "lucide-react";
export const intro = {
  id: "intro",
  title: "Hi, I'm Mark!",
  description:
    "I build fast, reliable web apps with React and TypeScript.\nI've led a UI migration that cut 300KB from a production bundle and written data hooks my team adopted as the standard.",
  links: [
    {
      id: 1,
      linkText: "LinkedIn",
      link: "https://www.linkedin.com/in/markwong167/",
    },
    {
      id: 2,
      linkText: "Email Me",
      link: "mailto:markwong167@gmail.com",
    },
  ],
  linkLeft: true,
  image: mark,
  icon: Home,
};
export const greenParty = {
  id: "greenParty",
  title: "Green Party of Ontario",
  jobTitle: "Software Developer Co-op",
  tags: ["WordPress", "PHP", "TypeScript"],
  description:
    "Ontario's provincial Green Party, working for fairness and a future Ontarians can believe in.",
  role: "Worked with the team on Canopy, the party's new WordPress platform and the foundation of the next gpo.ca, powering the main site alongside riding and campaign sites, writing its design docs and core theme in PHP and TypeScript.",
  linkLeft: false,
  image: greenPartyWebp,
  icon: Trees,
  links: [
    {
      id: 1,
      linkText: "gpo.ca",
      link: "https://gpo.ca",
    },
  ],
};
export const builderLynx = {
  id: "builderLynx",
  title: "Builder Lynx",
  jobTitle: "React Developer",
  tags: ["React", "Redux Toolkit", "TypeScript", "Node.js"],
  description:
    "Builder Lynx is an all-encompassing platform for construction companies (builders) to manage their business.",
  role: "I built the frontend Digital Sales Office (Purchaser Portal) for builders to advertise, sell, and sign contracts like the Agreement of Purchase and Sale for their projects.",
  linkLeft: false,
  image: builderLynxPng,
  icon: Building2,
  links: [
    {
      id: 58,
      linkText: "builderlynx.com",
      link: "https://builderlynx.com/",
    },
  ],
};
export const usChess = {
  id: "usChess",
  title: "US Chess Ratings",
  jobTitle: "Full Stack Developer (Front End Focus)",
  tags: ["React", "TanStack Query", "TypeScript"],
  description:
    "The unified rating platform for US Chess's 110,000+ members. Built while working at Leago.",
  role: "Using React and TanStack Query, I built the forms, tables, and data hooks for the app. My create and update hooks became the team's standard pattern. When a critical bug came up right before a high-stakes demo, I found and fixed it in time.",
  linkLeft: false,
  image: usChessWebp,
  icon: Crown,
  links: [
    {
      id: 1,
      linkText: "ratings.uschess.org",
      link: "https://ratings.uschess.org",
    },
  ],
};
export const leago = {
  id: "leago",
  title: "Leago",
  jobTitle: "Full Stack Developer (Front End Focus)",
  tags: ["React", "ShadCN", ".NET (C#)"],
  description:
    "A tournament, club, rating, and membership platform for mind games.",
  role: "I led the migration of the platform's forms from Material-UI to ShadCN and custom components. That cut 300KB from the bundle and made rendering 10-20% faster. I also worked in the C# .NET backend, reducing technical debt on both sides of the stack.",
  linkLeft: false,
  image: leagoJpg,
  icon: Swords,
  links: [
    {
      id: 1,
      linkText: "leago.gg",
      link: "https://leago.gg",
    },
  ],
};
export const aiFounded = {
  id: "aiFounded",
  title: "AIFounded",
  jobTitle: "Full Stack Developer",
  tags: ["React", "Plotly", "Firebase"],
  description: "Basketball Terminal: A visual analysis of NBA stats.",
  role: "As the frontend developer for the project, I used React and Plotly to create a responsive and interactive dashboard that displays comprehensive analysis of NBA stats.",
  linkLeft: false,
  image: aiFoundedJpg,
  icon: ChartBar,
  links: [
    {
      id: 1,
      linkText: "Ask Me About AIFounded",
      link: "mailto:markwong167@gmail.com",
    },
  ],
};
