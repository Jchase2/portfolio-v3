import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const HomeLinks = () => {
  return (
    <>
      <Link href="/blog" className={buttonVariants({ variant: "ghost" })}>
        Blog
      </Link>
      <Link href="#about" className={buttonVariants({ variant: "ghost" })}>
        About
      </Link>
      <Link href="#projects" className={buttonVariants({ variant: "ghost" })}>
        Projects
      </Link>
      <Link href="#education" className={buttonVariants({ variant: "ghost" })}>
        Education
      </Link>
    </>
  );
};

export default HomeLinks;

type HomeSheetProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const HomeSheet: React.FC<HomeSheetProps> = ({ setOpen }) => {
  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    anchorId: string
  ) => {
    event.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const targetElement = document.getElementById(anchorId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      <a
        href="#about"
        className="px-4 py-3 w-full transition-all hover:bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800 hover:pl-6 md:hidden"
        data-anchor="about"
        onClick={(e) => handleAnchorClick(e, "about")}
      >
        About
      </a>
      <a
        href="#projects"
        className="px-4 py-3 w-full transition-all hover:bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800 hover:pl-6 md:hidden"
        data-anchor="about"
        onClick={(e) => handleAnchorClick(e, "projects")}
      >
        Projects
      </a>
      <a
        href="#education"
        className="px-4 py-3 w-full transition-all hover:bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800 hover:pl-6 md:hidden"
        data-anchor="about"
        onClick={(e) => handleAnchorClick(e, "education")}
      >
        Education
      </a>
      <Link
        href="/blog"
        className="px-4 py-3 w-full transition-all hover:bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800 hover:pl-6 md:hidden"
      >
        Blog
      </Link>
    </>
  );
};
