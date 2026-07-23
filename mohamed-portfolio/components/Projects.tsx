"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MedCare Hospital",
    description:
      "A modern and responsive hospital website with a clean UI, healthcare services, responsive layouts, and smooth user experience.",
    image: "/projects/medcare.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    github: "https://github.com/mohamedeprahim/medcare-hospital",
    demo: "https://medcare-hospital-sepia.vercel.app/",
  },

  {
    title: "MovieX",
    description:
      "A modern movie and TV shows platform using real API data with a responsive and interactive user interface.",
    image: "/projects/moviex.png",
    technologies: [
      "React.js",
      "JavaScript",
      "API",
      "Tailwind CSS",
    ],
    github: "https://github.com/mohamedeprahim/moviex-app",
    demo: "https://moviex-app-opal.vercel.app/",
  },

  {
    title: "MN Dashboard",
    description:
      "A responsive admin dashboard with modern UI, charts, analytics and reusable components.",
    image: "/projects/dashboard.png",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Recharts",
      "API",
    ],
    github: "https://github.com/mohamedeprahim/mn-dashboard",
    demo: "https://mn-dashboard-three.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-3 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-7">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white hover:text-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}