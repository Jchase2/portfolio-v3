"use client";

import Link from "next/link";
import { ThemeSwitcher } from "../../components/theme/theme-switcher";
import { buttonVariants } from "../../components/ui/button";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "../../components/CustomIcons/LinkedinIcon";
import { GithubIcon } from "../../components/CustomIcons/GithubIcon";
import { HeaderSheet } from "./headerSheet";
import HomeLinks from "./homeLinks";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isBlogPage = pathname.startsWith("/blog/");

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
            <GithubIcon />
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
        {isBlogPage ? (
          <Link href="/blog" className={buttonVariants({ variant: "ghost" })}>
            Back
          </Link>
        ) : (
          ""
        )}
        {!isHomePage && (
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            {" "}
            Home{" "}
          </Link>
        )}
        <div className="hidden md:block">
          {isHomePage && <HomeLinks />}
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
