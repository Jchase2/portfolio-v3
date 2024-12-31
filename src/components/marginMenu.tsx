import { Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { GithubIconDark } from "./CustomIcons/GithubIconDark";
import { GithubIconLight } from "./CustomIcons/GithubIconLight";
import { LinkedinIcon } from "./CustomIcons/LinkedinIcon";

const MarginMenu = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="hidden fixed bottom-0 lg:flex z-9999">
        <div className="flex flex-col items-center gap-y-4">
          <div>
            <a
              href="https://github.com/Jchase2"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              {theme === "light" ? <GithubIconLight /> : <GithubIconDark />}
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/jameschase2/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div>
            <a
              href="mailto:mr.jdchase@gmail.com"
              className="hover:opacity-80 transition-opacity"
            >
              <Mail size={20} />
            </a>
          </div>
          <Separator orientation="vertical" className="h-[10vh] bg-gray-500" />
        </div>
      </div>
    </>
  );
};

export default MarginMenu;
