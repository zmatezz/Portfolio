"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLogo } from "./animated-logo";

const Loader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 10050); // Ajuste conforme necessário
  };

  return (
    <div className="app">
      {showContent && <>{children}</>}
      <AnimatedLogo isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
};

export default Loader;
