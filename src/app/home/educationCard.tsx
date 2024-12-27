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
    <Card className="w-full max-w-[300px] sm:min-w-[200px]">
      <CardContent className="mt-4">
        <ImageModal image={image} imageDesc={imageDesc} triggerType="image" />
      </CardContent>
      <CardDescription className="text-center">{cardDesc}</CardDescription>
    </Card>
  );
};

export { EducationCard };
