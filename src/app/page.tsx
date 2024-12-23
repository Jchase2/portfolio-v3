"use client";

import { About } from "@/app/home/about";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();

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
        <div className="absolute inset-0" suppressHydrationWarning>
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
      <div className="flex justify-center">
        <About />
      </div>
    </div>
  );
}
