"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";


const skills = [
  {
    name: "HTML5",
    level: "Advanced",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    level: "Advanced",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: <FaJs />,
  },
  {
    name: "React.js",
    level: "Advanced",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    level: "Intermediate",
    icon: <SiNextdotjs />,
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    icon: <SiTypescript />,
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git & GitHub",
    level: "Good",
    icon: <FaGitAlt />,
  },
];


export default function Skills() {

  return (

    <section
      id="skills"
      className="py-24 px-4 sm:px-6"
    >

      <div className="max-w-6xl mx-auto">


        <motion.h2
          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.6,
          }}

          viewport={{
            once:true,
          }}

          className="
          text-3xl
          sm:text-4xl
          font-bold
          text-center
          mb-12
          "
        >
          My Skills
        </motion.h2>



        <motion.div

          initial="hidden"

          whileInView="show"

          viewport={{
            once:true,
          }}

          variants={{
            hidden:{
              opacity:0,
            },

            show:{
              opacity:1,
              transition:{
                staggerChildren:0.1,
              },
            },
          }}

          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-5
          "

        >


          {skills.map((skill)=>(


            <motion.div

              key={skill.name}

              variants={{
                hidden:{
                  opacity:0,
                  y:40,
                },

                show:{
                  opacity:1,
                  y:0,
                },
              }}

              className="
              group
              flex
              flex-col
              items-center
              justify-center
              gap-3
              p-5
              sm:p-6
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:border-blue-500/40
              hover:-translate-y-2
              transition
              "

            >

              <div
                className="
                text-4xl
                text-blue-500
                group-hover:scale-110
                transition
                "
              >
                {skill.icon}
              </div>


              <h3
                className="
                text-sm
                sm:text-base
                text-gray-200
                font-semibold
                "
              >
                {skill.name}
              </h3>


              <span
                className="
                text-xs
                text-gray-500
                "
              >
                {skill.level}
              </span>


            </motion.div>


          ))}


        </motion.div>


      </div>

    </section>

  );
}