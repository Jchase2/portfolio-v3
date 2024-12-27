import Link from "next/link";
import { ThemeSwitcher } from "./theme/theme-switcher";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav className="absolute left-0 right-0 z-20 opacity-100 w-full flex py-2.5 px-5 justify-between">
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
      </div>
      <div className="flex align-items gap-x-2">
        <Link href="#about" className={buttonVariants({ variant: "ghost" })}>
          About
        </Link>
        <Link href="#projects" className={buttonVariants({ variant: "ghost" })}>
          Projects
        </Link>
      </div>
    </nav>
  );
};

export { Header };
