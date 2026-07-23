"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-6xl mx-auto mt-5 px-4 md:px-6">
        <div
          className="
          flex justify-between items-center
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-lg
          px-5 py-4
          "
        >
          <h1 className="text-2xl font-bold">
            Mohamed
            <span className="text-blue-500">.</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-gray-300">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition"
              >
                {link.name}
              </a>
            ))}

            {mounted && (
              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="text-xl hover:text-blue-500 transition"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            )}
          </div>

          <div className="flex md:hidden items-center gap-4">
            {mounted && (
              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="text-xl"
              >
                {theme === "dark" ? <FaMoon /> : <FaSun />}
              </button>
            )}

            <button
              onClick={() => setOpen(!open)}
              className="text-xl"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
            md:hidden
            mt-3
            rounded-2xl
            border border-white/10
            bg-black/80
            backdrop-blur-lg
            p-6
            "
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}