"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">

      <div className="max-w-5xl text-center mt-16">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-500 text-base sm:text-lg mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="text-blue-500">
            Mohamed Ibrahim
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 text-xl sm:text-2xl md:text-3xl text-gray-300"
        >
          Frontend Developer | React.js & Next.js
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          I build modern, responsive and interactive web applications
          using React, Next.js and modern frontend technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >

          <a
            href="#projects"
            className="px-6 sm:px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-sm sm:text-base"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 sm:px-7 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition text-sm sm:text-base"
          >
            Contact Me
          </a>

          <a
            href="/cv.pdf"
            download="Mohamed_Belal_CV.pdf"
            className="px-6 sm:px-7 py-3 rounded-xl bg-white/10 hover:bg-white hover:text-black transition text-sm sm:text-base"
          >
            Download CV
          </a>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mt-8 text-2xl"
        >

          <a
            href="https://github.com/mohamedeprahim"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

        </motion.div>

      </div>

    </section>
  );
}