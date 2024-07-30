"use client";

import { Button } from "@/app/components/button";
import { CMSIcon } from "@/app/components/cms-icon";
import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-badge";
import { HomePageInfo } from "@/app/types/page-info";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect"

type HeroSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const typewriterOptions = {
    strings: ["Desenvolvedor", "Designer UX/UI", "Freelancer"],
    autoStart: true,
    loop: true,
    delay: 50,
    pauseFor: 4000
  }

  return (
    <section className="w-full lg:min-h-screen max-h-[1080px] bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-center justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >

          <p className="font-poppins text-[#DEDEDE] text-lg relative top-4 left-1">saudações, eu sou <span className="font-bold">Matheus <span className="bg-gradient-to-r from-[#DEDEDE] via-[#6BBAFF] to-[#4271EB] inline-block text-transparent bg-clip-text">.</span></span></p>
          <h2 className="text-6xl leading-normal font-bold bg-gradient-to-r from-[#DEDEDE] via-[#6BBAFF] to-[#4271EB] inline-block text-transparent bg-clip-text">
            <Typewriter
              options={typewriterOptions}
            />
          </h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                name={tech.name}
                key={`intro-tech-${tech.name}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.2,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <div className="flex sm:items-center mt-6 lg:mt-10 sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="origin-center relative flex justify-center items-center h-[400px] overflow-hidden rounded-full"
        >
          <Image
            width={400}
            height={400}
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mb-6 lg:mb-0 rounded-full object-cover z-20"
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil do Matheus Guedes"
          />

          <motion.svg className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] absolute  z-10" fill={"transparent"} viewBox={"0 0 400 400"} xmlns={"http://www.w3.org/2000/svg"}>
            <motion.circle cx={200} cy={200} r={200} stroke="#4271EB" strokeWidth={4} initial={{ strokeDasharray: "24 10 0 0" }} animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360] }} transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}>

            </motion.circle>
          </motion.svg>

          {/* <svg className="fill-[#111827] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] absolute  z-10" viewBox={"0 0 400 400"} xmlns={"http://www.w3.org/2000/svg"}>
            <circle cx={200} cy={200} r={200}>

            </circle>
          </svg>

          <svg className="fill-[#111827] w-[300px] h-[300px] lg:w-[400px] lg:h-[380px] absolute  z-10" width="711" height="668" viewBox="0 0 711 668" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4" filter="url(#filter0_f_10_492)">
              <path d="M536.043 256.404C536.043 256.404 472.799 302.978 383.857 368.477C294.916 433.976 212.489 491.577 213.957 493.596C148.458 404.655 167.462 279.456 256.404 213.957C345.346 148.458 470.544 167.462 536.043 256.404Z" fill="#43D9AD" />
            </g>
            <defs>
              <filter id="filter0_f_10_492" x="0.987061" y="0.986855" width="709.056" height="666.609" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_10_492" />
              </filter>
            </defs>
          </svg>

          <svg  className="fill-[#111827] w-[300px] h-[300px] lg:w-[400px] lg:h-[380px] absolute -bottom-[3px] z-10" width="711" height="668" viewBox="0 0 711 668" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4" filter="url(#filter0_f_10_491)">
              <path d="M174.957 411.596C174.957 411.596 238.201 365.022 327.143 299.523C416.084 234.024 498.511 176.423 497.043 174.404C562.542 263.345 543.538 388.544 454.596 454.043C365.655 519.542 240.456 500.538 174.957 411.596Z" fill="#4D5BCE" />
            </g>
            <defs>
              <filter id="filter0_f_10_491" x="0.956787" y="0.403721" width="709.056" height="666.609" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_10_491" />
              </filter>
            </defs>
          </svg> */}


        </motion.div>
      </div>
    </section>
  );
};
