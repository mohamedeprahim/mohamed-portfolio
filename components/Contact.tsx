"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
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
          Contact Me
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
          sm:p-10
          "
        >

          <div
            className="
            grid
            md:grid-cols-2
            gap-10
            "
          >

            <div>

              <h3 className="
                text-2xl
                font-bold
              ">
                Let&apos;s work together
              </h3>


              <p className="
                mt-4
                text-gray-400
                leading-relaxed
              ">
                I&apos;m a Frontend Developer specialized in React.js
                and Next.js. I&apos;m currently looking for internship
                opportunities and new challenges.
              </p>



              <div className="
                flex
                gap-5
                mt-8
                text-2xl
              ">


                <a
                  href="mailto:mohamedeprahimblal@gmail.com"
                  className="
                  text-gray-400
                  hover:text-blue-500
                  transition
                  "
                >
                  <FaEnvelope />
                </a>


                <a
                  href="https://github.com/mohamedeprahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  text-gray-400
                  hover:text-white
                  transition
                  "
                >
                  <FaGithub />
                </a>


                <a
                  href="https://www.linkedin.com/in/mohamed-ibrahim-788384416?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  text-gray-400
                  hover:text-blue-500
                  transition
                  "
                >
                  <FaLinkedin />
                </a>


              </div>



              <p className="
                mt-6
                text-sm
                text-gray-500
              ">
                Email:
                <span className="ml-2 text-gray-300">
                  mohamedeprahimblal@gmail.com
                </span>
              </p>


            </div>



            <div className="
              flex
              items-center
              justify-center
            ">

              <a
                href="mailto:mohamedeprahimblal@gmail.com"
                className="
                w-full
                text-center
                py-4
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition
                font-semibold
                "
              >
                Send Me Email
              </a>

            </div>


          </div>

        </motion.div>

      </div>

    </section>
  );
}