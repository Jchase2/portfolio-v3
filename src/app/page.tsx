"use client";

import { About } from "@/app/home/about";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div>
      <section className="h-[calc(100vh-74px)] flex items-center justify-center">
        <div className="absolute inset-0">
          {theme === "dark" ? (
            <Image
              src="/background.jpg"
              alt="Background image"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          ) : (
            <Image
              src="/lightmode_bg.jpg"
              alt="Background image"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          )}
        </div>
        <div className="relative text-center space-y-2 -top-[20%]">
          <h1 className="text-lg font-bold">James D. Chase II</h1>
          <p className="text-sm">Developer Portfolio / Personal Site</p>
        </div>
      </section>
      <section>
        <About />
      </section>
    </div>
  );
}
