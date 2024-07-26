"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLogo } from "./animated-logo";

const Loader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 3300); // Ajuste conforme necessário
  };

  return (
    <div className="app">
      <AnimatePresence>{showContent && <>{children}</>}</AnimatePresence>
      <AnimatedLogo isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
};

export default Loader;
