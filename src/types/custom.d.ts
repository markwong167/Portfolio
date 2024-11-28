declare module "*.pdf" {
  const content: string;
  export default content;
}

type SectionDataType = {
  id: string;
  title: string;
  description: string;
  role?: string;
  links?: {
    id: number;
    linkText: string;
    link: string;
  }[];
  linkLeft: boolean;
  image?: string;
};
