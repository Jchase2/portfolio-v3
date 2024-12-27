import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import Image, { StaticImageData } from "next/image";

type ImageModalProps = {
  triggerType: "button" | "image";
  buttonText?: string;
  image: StaticImageData;
  imageDesc: string;
};
const ImageModal = ({
  triggerType,
  buttonText,
  image,
  imageDesc,
}: ImageModalProps) => {
  const imageTrigger = (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
      <Image
        src={image}
        alt={imageDesc}
        className="rounded-lg w-full min-w-24"
      />
    </div>
  );

  const buttonTrigger = <Button variant="outline">{buttonText}</Button>;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerType === "button" ? buttonTrigger : imageTrigger}
      </DialogTrigger>
      <DialogHeader className="sr-only">
        <DialogTitle>{imageDesc}</DialogTitle>
      </DialogHeader>
      <DialogContent className="min-w-[50vw]">
        <div className="overflow-auto h-[80vh] w-full flex items-center justify-center relative">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={imageDesc}
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
