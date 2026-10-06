type SectionDataType = {
  id: string;
  title: string;
  jobTitle?: string;
  tags?: string[];
  description: string;
  role?: string;
  links?: {
    id: number;
    linkText: string;
    link?: string;
  }[];
  linkLeft: boolean;
  browserFrame?: boolean;
  image?: import("next/image").StaticImageData;
};
