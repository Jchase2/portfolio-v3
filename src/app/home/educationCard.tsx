import { ImageModal } from "@/components/imageModal";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

type EducationCardProps = {
  image: StaticImageData;
  imageDesc: string;
  cardDesc: ReactNode;
};

const EducationCard = ({ image, imageDesc, cardDesc }: EducationCardProps) => {
  return (
    <Card className="w-full max-w-[350px] md:min-w-[250px] sm:min-w-[200px] h-auto flex-none">
      <CardContent className="mt-4">
        <ImageModal image={image} imageDesc={imageDesc} triggerType="image" />
      </CardContent>
      <CardDescription className="text-center text-card-foreground mb-2">
        {cardDesc}
      </CardDescription>
    </Card>
  );
};

export { EducationCard };
