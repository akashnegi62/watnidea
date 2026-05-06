"use client";
import React from "react";
import { motion } from "framer-motion";

export default function GlobalBottomBlur() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="pointer-events-none fixed bottom-0 left-0 z-40 h-[15vh] w-full"
      style={{
        backdropFilter: "blur(12px)",

        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)",

        backgroundColor: "rgba(18, 20, 23, 0.2)",
      }}
    />
  );
}
