type SectionDataType = {
  id: string;
  title: string;
  jobTitle?: string;
  tags?: string[];
  badge?: string;
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
