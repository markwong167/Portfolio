import mark from "@/assets/images/Mark_Wong.webp";
import leagoJpg from "@/assets/images/leago.webp";
import aiFoundedJpg from "@/assets/images/aiFounded.webp";
import greenPartyWebp from "@/assets/images/greenParty.webp";
import builderLynxPng from "@/assets/images/builderLynx.webp";
import { Home, Building2, Swords, Crown, Trees, ChartBar } from "lucide-react";
export const intro = {
  id: "intro",
  title: "Hi, I'm Mark!",
  description:
    "I'm a Software Developer with 4 years of experience creating web apps. I specialize in delivering great user experiences through scalable, performant solutions.",
  links: [
    {
      id: 1,
      linkText: "LinkedIn",
      link: "https://www.linkedin.com/in/markwong167/",
    },
  ],
  linkLeft: true,
  image: mark,
  icon: Home,
};
export const greenParty = {
  id: "greenParty",
  title: "Green Party of Ontario",
  description:
    "Canopy: a WordPress multisite that puts riding and campaign websites under one system.",
  role: "I wrote Canopy's design docs and built its core theme and reusable sections in PHP and TypeScript.",
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
  description:
    "Builder Lynx is an all-encompassing platform for construction companies (builders) to manage their business.",
  role: "I built the frontend Digital Sales Office (Purchaser Portal) for builders to advertise, sell, and sign contracts like the Agreement of Purchase and Sale for their projects.",
  linkLeft: false,
  image: builderLynxPng,
  icon: Building2,
  links: [
    {
      id: 58,
      linkText: "Ask Me About Builder Lynx",
      link: "mailto:markwong167@gmail.com",
    },
  ],
};
export const usChess = {
  id: "usChess",
  title: "US Chess Ratings",
  description:
    "The unified rating platform for US Chess's 110,000+ members. Built while working at Leago.",
  role: "I built the forms, tables, and hooks that replaced two legacy systems with one app.",
  linkLeft: false,
  image: leagoJpg,
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
  description:
    "A tournament, club, rating, and membership platform for mind games.",
  role: "I refreshed the frontend, cut technical debt, and contributed to the .NET backend.",
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
