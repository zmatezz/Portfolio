"use client";

import Link from "next/link";
import { PersonalLogo } from "../icons";
import { NavItem } from "./nav-item";
import { motion } from "framer-motion";

const NAV_ITENS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
    >
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          {/* <PersonalLogo width={58} height={49} /> */}
          <svg
            width="58"
            height="49"
            viewBox="0 0 58 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6069 21.6092L0 0V42.9577L6.04939 49.4718L6.06007 14.2606L17.9703 25.7042L22.6069 21.6092ZM43.7638 49.7271L49.9911 43.213V30.0088L43.7638 35.8774V49.7271ZM7.64536 36.7958L25.9715 50L49.9911 27.6144L44.1036 25.4155L28.9801 27.5634L24.3346 31.743L40.3921 29.7535L26.3362 43.1338L16.7283 36.2676L44.1285 11.6197V23.2394L50 25.5282V0L7.64536 36.7958Z"
              fill="white"
            />
          </svg>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITENS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
