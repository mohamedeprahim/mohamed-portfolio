"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div
      className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black
      "
    >

      <motion.h1
        initial={{
          opacity:0,
          scale:0.5
        }}
        animate={{
          opacity:1,
          scale:1
        }}
        transition={{
          duration:0.8
        }}
        className="text-5xl font-bold"
      >
        Mohamed
        <span className="text-blue-500">.</span>
      </motion.h1>

    </div>
  );
}