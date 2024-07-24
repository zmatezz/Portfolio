import { CMSIcon } from "@/app/components/cms-icon";
import { Link } from "@/app/components/link";
import { KnowTech as IKnowTech } from "@/app/types/projects";
import { getRelativeTimeString } from "@/app/utils/get-relative-time";

type KnowTechProps = {
  tech: IKnowTech;
};

export const KnowTech = ({ tech }: KnowTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há", "");

  return (
    <div
      className={`p-6 rounded-lg bg-gray-600/20 hover:bg-[${tech.backgroundColor?.hex}] text-gray-500 hover:text-[${tech.textColor?.hex}] flex flex-col gap-2 transition-all duration-300 ease-in-out hover:scale-[1.03]`}
    >
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  );
};
