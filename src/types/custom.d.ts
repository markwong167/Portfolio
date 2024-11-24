declare module "*.pdf" {
  const content: string;
  export default content;
}

type SectionDataType = {
  title: string;
  description: string;
  links: {
    id: number;
    linkText: string;
    link: string;
  }[];
  linkLeft: boolean;
};
