import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ExternalLink, Menu } from "lucide-react";
import { useState } from "react";

const HeaderSheet = () => {
  const [open, setOpen] = useState<boolean>(false);

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
    <Sheet open={open} onOpenChange={(newOpen: boolean) => setOpen(newOpen)}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetTitle className="sr-only">Link Menu</SheetTitle>
      <SheetContent side="right">
        <nav className="flex flex-col space-y-4">
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
          <a
            href="/JamesChase2Resume.pdf"
            className="px-4 py-3 w-full transition-all hover:bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800 hover:pl-6 md:hidden"
          >
            Resume
          </a>
          <a
            href="https://notes.jamesdchase.com"
            className="px-4 py-3 w-full transition-all hover:bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800 hover:pl-6"
          >
            {
              <div className="flex flex-row items-center gap-2">
                <ExternalLink size={14} /> Notes
              </div>
            }
          </a>
          <a
            href="https://nextcloud.jamesdchase.com"
            className="px-4 py-3 w-full transition-all hover:bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800 hover:pl-6"
          >
            {
              <div className="flex flex-row items-center gap-2">
                <ExternalLink size={14} /> Nextcloud
              </div>
            }
          </a>
          <a
            href="https://plex.jamesdchase.com"
            className="px-4 py-3 w-full transition-all hover:bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800 hover:pl-6"
          >
            {
              <div className="flex flex-row items-center gap-2">
                <ExternalLink size={14} /> Plex
              </div>
            }
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export { HeaderSheet };
