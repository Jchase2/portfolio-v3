import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { LucideImage } from "lucide-react";

type ImageModalProps = {
  image: StaticImageData;
  buttonText?: string;
  dialogTitle: string;
};

const ImageModal = ({ image, buttonText, dialogTitle }: ImageModalProps) => {
  return (
    <Dialog>
      <DialogHeader className="sr-only">
        <DialogTitle>{dialogTitle}</DialogTitle>
      </DialogHeader>
      <DialogTrigger asChild>
        {buttonText && (
          <Button variant="outline">
            {" "}
            <LucideImage />
            {buttonText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="min-w-[50vw]">
        <div className="overflow-auto h-[80vh] w-full flex items-center justify-center relative">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt="Project image"
              className="object-contain transition-transform duration-200 max-h-full"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { ImageModal };
