import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type AnimatedLogoProps = {
  isLoading: boolean;
  setIsLoading: any;
};

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  isLoading,
  setIsLoading,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="preloader bg-gray-900 fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 281 284"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <motion.path
              d="M239.57,408.53,112.51,285.79v244l34,37,.06-200,66.94,65ZM358.48,568.24l35-37v-75l-35,32Zm-203-73.45,103,75,135-127.15-33.09-12.49-85,12.2-26.11,23.74,90.25-11.3-79,76-54-39,154-140,0,66,33,13v-145Z"
              transform="translate(-112.51 -285.79)"
              stroke="#ffffff"
              fill="none"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                pathLength: { duration: 3.5, ease: "easeInOut" },
              }}
            />
            <motion.path
              d="M239.57,408.53,112.51,285.79v244l34,37,.06-200,66.94,65ZM358.48,568.24l35-37v-75l-35,32Zm-203-73.45,103,75,135-127.15-33.09-12.49-85,12.2-26.11,23.74,90.25-11.3-79,76-54-39,154-140,0,66,33,13v-145Z"
              transform="translate(-112.51 -285.79)"
              stroke="none"
              fill="#ffffff"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1.9,
              }}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
