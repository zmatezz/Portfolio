import { CMSIcon } from "@/app/components/cms-icon";
import { KnowTech as IKnowTech } from "@/app/types/projects";
import { getRelativeTimeString } from "@/app/utils/get-relative-time";

type KnowTechProps = {
  tech: IKnowTech
};

export const KnowTech = ({ tech }: KnowTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há", "");

  return (
    <div className={`p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2   transition-all duration-300 ease-in-out ${tech?.customClass ? tech?.customClass : 'hover:bg-gray-600/30 hover:text-red-500'}`}>
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  );
};
