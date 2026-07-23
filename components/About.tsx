"use client";

import { motion } from "framer-motion";

export default function About() {

  const info = [
    {
      number: "3+",
      title: "Projects Completed",
    },
    {
      number: "2+",
      title: "Years Learning",
    },
    {
      number: "100%",
      title: "Passion For Coding",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6"
    >

      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
          text-3xl
          sm:text-4xl
          font-bold
          text-center
          mb-12
          "
        >
          About Me
        </motion.h2>


        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6
          sm:p-8
          text-center
          "
        >

          <p
            className="
            text-gray-300
            text-base
            sm:text-lg
            leading-relaxed
            "
          >
            I&apos;m Mohamed Ibrahim, a Frontend Developer specialized in
            React.js and Next.js. I build modern, responsive and
            interactive web applications with clean code and great
            user experience.
          </p>


          <p
            className="
            mt-5
            text-gray-400
            "
          >
            Currently looking for frontend internship opportunities where
            I can improve my skills and contribute to real-world projects.
          </p>


          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-5
            mt-10
            "
          >

            {info.map((item, index) => (

              <motion.div
                key={item.title}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: index * 0.2,
                }}

                viewport={{
                  once: true,
                }}

                className="
                p-5
                rounded-2xl
                bg-white/5
                border
                border-white/10
                hover:-translate-y-2
                transition
                "
              >

                <h3
                  className="
                  text-3xl
                  font-bold
                  text-blue-500
                  "
                >
                  {item.number}
                </h3>


                <p className="text-gray-400 mt-2">
                  {item.title}
                </p>

              </motion.div>

            ))}

          </div>


          <div className="mt-10">

            <p className="text-gray-400 mb-4">
              Technologies I work with
            </p>


            <div className="flex flex-wrap justify-center gap-3">

              {[
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Git"
              ].map((tech) => (

                <span
                  key={tech}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  text-sm
                  text-blue-400
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>


        </motion.div>

      </div>

    </section>
  );
}