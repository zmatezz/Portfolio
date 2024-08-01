import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCard } from "./project-card";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";

type HighlightedProjectsProps = {
  projects: Project[];
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" className="mb-16" />

      <div>
        {projects?.map((project, i) => (
          <div key={project.slug}>
            <ProjectCard project={project} className={i === projects.length - 1 ? 'my-16' : ''} />
            {i !== projects.length - 1 && <HorizontalDivider className="my-16" />}
          </div>
        ))}



        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link className="inline-flex" href={"/projects"}>
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
