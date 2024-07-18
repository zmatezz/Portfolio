import type { RichTextContent } from "@graphcms/rich-text-types";

export type KnowTech = {
    iconSvg: string;
    name: string;
    startDate: string;
}

export type ProjectSection = {
    title: string;
    image: {
        url: string;
    }
}

export type Project = {
    slug: string;
    thumbnail: {
        url: string
    }
    projectIcon: string;
    title: string;
    shortDescription: string;
    technologies: KnowTech[];
    pageThumbnail: {
        url: string
    }
    sections: ProjectSection[]
    description: {
        raw: RichTextContent
    }
    liveProjectUrl?: string;
    githubUrl?: string;
}