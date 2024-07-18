import { KnowTech, Project } from "./projects";
import type { RichTextContent } from "@graphcms/rich-text-types";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnowTech[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
  knowTechs: KnowTech[];
  highlightProjects: Project[]
};

export type HomePageData = {
  page: HomePageInfo;
};
