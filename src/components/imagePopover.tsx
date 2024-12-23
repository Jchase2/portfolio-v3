import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LucideImage } from "lucide-react";

type ImagePopoverProps = {
  image: StaticImageData;
  buttonText?: string;
};

const ImagePopover = ({ image, buttonText }: ImagePopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {buttonText && (
          <Button variant="outline">
            {" "}
            <LucideImage />
            {buttonText}
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-10/12">
        <Image src={image} alt="Project image" />
      </PopoverContent>
    </Popover>
  );
};

export { ImagePopover };
