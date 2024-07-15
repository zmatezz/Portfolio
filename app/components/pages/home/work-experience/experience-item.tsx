import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={"/images/267490698_470183541108761_5380135274359712574_n.jpg"}
            width={40}
            height={40}
            className="rounded-full"
            alt="Logo da empresa Connect Parts"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.connectparts.com.br/ "
            target="_blank"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            @ Connect Parts
          </a>
          <h4 className="text-gray-300">Desenvolvedor Front-end</h4>
          <span className="text-gray-500">agosto 2023 • O momento (1 ano)</span>
          <div>
            <p className="text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              facere, voluptatem consequatur at voluptas autem deserunt quisquam
              assumenda debitis unde.
            </p>
          </div>

          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
          </div>
        </div>
      </div>
    </div>
  );
};
