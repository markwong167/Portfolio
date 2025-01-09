import mark from "@/assets/images/Mark_Wong.webp";
import leagoJpg from "@/assets/images/leago.jpg";
import grgWebp from "@/assets/images/grg.webp";
import builderLynxPng from "@/assets/images/builderLynx.png";
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
  links: [
    {
      id: 58,
      linkText: "Ask Me About Builder Lynx",
      link: "mailto:markwong167@gmail.com",
    },
  ],
};
export const leago = {
  id: "leago",
  title: "Leago",
  description:
    "Leago is a tournament, club, rating, and membership management platform for mind games and their respective clubs and associations.",
  role: "Revamped the frontend, tackling our technical debt to leave things cleaner and easier to work with and contributed to the backend to improve the overall performance of the platform.",
  linkLeft: false,
  image: leagoJpg,
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
  role: "As the lead developer, I was responsible for building the frontend, backend, and devops of the platform.",
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
