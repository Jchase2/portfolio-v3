import { Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "../../components/CustomIcons/GithubIcon";
import { LinkedinIcon } from "../../components/CustomIcons/LinkedinIcon";

const MarginMenu = () => {
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
              <GithubIcon />
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
