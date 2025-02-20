import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ExternalLink, Menu } from "lucide-react";
import { useState } from "react";
import { HomeSheet } from "./homeLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderSheet = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
          {isHomePage ? (
            <HomeSheet setOpen={setOpen} />
          ) : (
            <Link
              href="/"
              className="px-4 py-3 w-full transition-all hover:bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800 hover:pl-6 md:hidden"
            >
              Home
            </Link>
          )}
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
          {/* <a
            href="https://plex.jamesdchase.com"
            className="px-4 py-3 w-full transition-all hover:bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800 hover:pl-6"
          >
            {
              <div className="flex flex-row items-center gap-2">
                <ExternalLink size={14} /> Plex
              </div>
            }
          </a> */}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export { HeaderSheet };
