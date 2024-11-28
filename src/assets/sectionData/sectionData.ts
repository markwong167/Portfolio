import mark from "../images/P_20181203_171412.jpg";
import leagoPng from "../images/leago.png";
import grgWebp from "../images/grg.webp";
import builderLynxPng from "../images/builderLynx.png";
import { Home, Building2, Swords, Trees } from "lucide-react";
export const intro = {
  id: "intro",
  title: "Hi, I'm Mark!",
  description:
    "I'm a Full Stack Developer with 4 years of experience building web applications specialized in building a great user experience. If you're looking for a developer who can help you build a great product, I'm your guy!",
  links: [
    { id: 1, linkText: "Resume", link: "/Resume" },
    {
      id: 2,
      linkText: "LinkedIn",
      link: "https://www.linkedin.com/in/markwong167/",
    },
  ],
  linkLeft: true,
  image: mark,
  icon: Home,
};
export const builderLynx = {
  id: "builderLynx",
  title: "Builder Lynx",
  description:
    "Builder Lynx is an all-encompassing platform for construction companies (builders) to manage their business.",
  role: "I built an all-in-one Digital Sales Office (Purchaser Portal) for builders to advertise, sell, and sign contracts like the Agreement of Purchase and Sale for their projects.",
  linkLeft: false,
  image: builderLynxPng,
  icon: Building2,
};
export const leago = {
  id: "leago",
  title: "Leago",
  description:
    "Leago is a tournament, club, rating, and membership management platform for mind games and their respective clubs and associations.",
  role: "I'm setting the bar for frontend development and tackling our technical debt to leave things cleaner and easier to work with.",
  linkLeft: false,
  image: leagoPng,
  icon: Swords,
  links: [
    {
      id: 1,
      linkText: "Website",
      link: "https://leago.gg",
    },
  ],
};
export const grg = {
  id: "grg",
  title: "Grassroots Greens",
  description:
    "The go-to platform for eco-conscious individuals to connect, organize events, and drive positive environmental change.",
  role: "As the lead developer, I was responsible for building the frontend and backend of the platform.",
  links: [
    {
      id: 1,
      linkText: "Original Website",
      link: "https://www.grassrootsgreens.ca",
    },
    {
      id: 2,
      linkText: "New Test Webpage",
      link: "https://grgreens.xyz",
    },
  ],
  linkLeft: false,
  image: grgWebp,
  icon: Trees,
};
