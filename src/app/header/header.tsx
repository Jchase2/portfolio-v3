"use client";

import Link from "next/link";
import { ThemeSwitcher } from "../../components/theme/theme-switcher";
import { buttonVariants } from "../../components/ui/button";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "../../components/CustomIcons/LinkedinIcon";
import { GithubIconLight } from "../../components/CustomIcons/GithubIconLight";
import { GithubIconDark } from "../../components/CustomIcons/GithubIconDark";
import { useTheme } from "next-themes";
import { HeaderSheet } from "./headerSheet";

const Header = () => {
  const { theme } = useTheme();

  return (
    <nav className="absolute left-0 right-0 z-20 opacity-100 w-full flex py-2.5 px-5 justify-between">
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
        <div className="flex flex-row items-center gap-x-5 ml-4 lg:hidden">
          <a
            href="https://github.com/Jchase2"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            {theme === "light" ? <GithubIconLight /> : <GithubIconDark />}
          </a>
          <a
            href="https://www.linkedin.com/in/jameschase2/"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:mr.jdchase@gmail.com"
            className="hover:opacity-80 transition-opacity"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="flex align-items gap-x-2">
        <div className="hidden md:block">
          <Link href="#about" className={buttonVariants({ variant: "ghost" })}>
            About
          </Link>
          <Link
            href="#projects"
            className={buttonVariants({ variant: "ghost" })}
          >
            Projects
          </Link>
          <Link
            href="#education"
            className={buttonVariants({ variant: "ghost" })}
          >
            Education
          </Link>
          <Link
            href="/JamesChase2Resume.pdf"
            className={buttonVariants({ variant: "ghost" })}
          >
            Resume
          </Link>
        </div>
        <HeaderSheet />
      </div>
    </nav>
  );
};

export { Header };
