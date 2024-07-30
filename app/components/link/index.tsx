import { cn } from "@/app/lib/utils";
import NextLink from "next/link";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;
export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        "flex items-center gap-2 text-gray-300 text-sm hover:text-[#6BBAFF] transition-colors w-fit",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
