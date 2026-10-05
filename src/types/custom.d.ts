type SectionDataType = {
  id: string;
  title: string;
  description: string;
  role?: string;
  links?: {
    id: number;
    linkText: string;
    link?: string;
  }[];
  linkLeft: boolean;
  image?: import("next/image").StaticImageData;
};
