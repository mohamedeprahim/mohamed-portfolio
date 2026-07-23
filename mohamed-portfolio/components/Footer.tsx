"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";


export default function Footer() {

  return (

    <footer className="py-10 px-4 sm:px-6">


      <motion.div

        initial={{
          opacity:0,
          y:20,
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
        max-w-6xl
        mx-auto
        border-t
        border-white/10
        pt-8
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-6
        text-gray-400
        "

      >


        <p
          className="
          text-center
          text-sm
          sm:text-base
          "
        >
          © {new Date().getFullYear()} 
          <span className="text-white ml-1">
            Mohamed Ibrahim
          </span>
          . All rights reserved.
        </p>




        <div
          className="
          flex
          items-center
          gap-6
          text-xl
          "
        >


          <a
            href="https://github.com/mohamedeprahim"
            target="_blank"
            rel="noopener noreferrer"
            className="
            hover:text-white
            transition
            "
          >
            <FaGithub />
          </a>



          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
            hover:text-blue-500
            transition
            "
          >
            <FaLinkedin />
          </a>



        </div>




        <p
          className="
          flex
          items-center
          gap-2
          text-sm
          "
        >
          Made with

          <FaHeart
            className="text-red-500"
          />

          by Mohamed

        </p>



      </motion.div>


    </footer>

  );
}