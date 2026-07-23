import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Mohamed Ibrahim | Frontend Developer",

  description:
    "Mohamed Ibrahim is a Frontend Developer specialized in React.js, Next.js, TypeScript and Tailwind CSS. Building modern, responsive and interactive web applications.",

  keywords: [
    "Mohamed Ibrahim",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
  ],

  authors: [
    {
      name: "Mohamed Ibrahim",
    },
  ],

  creator: "Mohamed Ibrahim",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
      `}
    >

      <body
        className="
        min-h-screen
        bg-black
        text-white
        antialiased
        "
      >

        <ThemeProvider>

          {children}

        </ThemeProvider>


      </body>

    </html>

  );

}