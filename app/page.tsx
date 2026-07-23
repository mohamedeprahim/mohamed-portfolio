"use client";

import { useEffect, useState } from "react";

import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";


export default function Home() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);


    return () => clearTimeout(timer);

  }, []);


  if (loading) {
    return <Loading />;
  }


  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      <Background />

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

        <Footer />

      </div>

    </main>
  );
}