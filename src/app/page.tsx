"use client";

import { About } from "@/app/home/about";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Projects } from "./home/projects";
import { Education } from "./home/education";
import { useInView } from "react-intersection-observer";
import MarginMenu from "@/app/header/marginMenu";
export default function Home() {
  const { theme } = useTheme();

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: true,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a skeleton/placeholder
  }

  return (
    <div>
      <section className="h-[calc(100vh-74px)] flex items-center justify-center">
        <div className="absolute inset-0">
          {theme === "dark" ? (
            <Image
              src="/background.jpg"
              alt="Background image"
              fill={true}
              priority={true}
            />
          ) : (
            <Image
              src="/lightmode_bg.jpg"
              alt="Background image"
              fill={true}
              priority={true}
            />
          )}
        </div>
        <div className="relative text-center space-y-2 -top-[15%]">
          <h1 className="text-lg font-bold">James D. Chase II</h1>
          <p className="text-sm">Developer Portfolio / Personal Site</p>
        </div>
      </section>
      <MarginMenu />
      <div
        ref={ref}
        className={`flex justify-center transition-opacity ease-in duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <About />
      </div>
      <div
        ref={ref2}
        className={`flex justify-center mt-20 transition-opacity ease-in duration-700 ${
          inView2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Projects />
      </div>
      <div
        ref={ref3}
        className={`flex justify-center mt-20 transition-opacity ease-in duration-700 ${
          inView3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Education />
      </div>
    </div>
  );
}
