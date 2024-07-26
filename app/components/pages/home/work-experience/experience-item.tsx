"use client";

import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-badge";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";
import { WorkExperience } from "@/app/types/work-experience";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { motion } from "framer-motion";
import Image from "next/image";

type ExperienceItemProps = {
  experience: WorkExperience;
};

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    endDate,
    companyName,
    companyLogo,
    companyUrl,
    description,
    role,
    technologies,
  } = experience;

  const startDate = new Date(experience.startDate);
  console.log(startDate);
  const formattedStartDate = format(startDate, "MMM yyyy", {
    locale: ptBR,
  });
  const formattedEndDate = endDate
    ? format(new Date(endDate), "MMM yyyy", {
      locale: ptBR,
    })
    : "o momento";

  const end = endDate ? new Date(endDate) : new Date();

  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? "s" : ""}${monthsRemaining > 0
        ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? "es" : ""}`
        : ""
      }`
      : `${months} mes${months > 1 ? "es" : ""}`;

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={companyLogo.url}
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
            href={companyUrl}
            target="_blank"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            @ {companyName}
          </a>
          <h4 className="text-gray-300">Desenvolvedor Front-end</h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} ({formattedDuration})
          </span>
          <div>
            <div className="text-gray-400">
              <RichText content={description.raw} />
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            {technologies.map((tech, i) => (
              <TechBadge
                key={tech.name}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
