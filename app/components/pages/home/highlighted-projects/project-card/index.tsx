import { Link } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src={"/images/profile-pic.png"}
          alt="Thumbnail do Projeto"
          className="w-full h-200px sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-gray-50">
          <Image
            width={20}
            height={20}
            alt="Icone do Projeto"
            src={"/icons/projects-icon.svg"}
          />
          Projeto
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ea
          officia voluptate amet doloremque eum consectetur nisi, voluptatem
          quis dolorem? Quia voluptatem, commodi, consectetur asperiores, illo
          unde repellat excepturi optio officia facilis iure et. Nulla nisi,
          enim quos deleniti doloremque mollitia repudiandae neque
          exercitationem placeat quod veniam earum, voluptas animi.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/x-y-z">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
