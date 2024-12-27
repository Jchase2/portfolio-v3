import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import Image, { StaticImageData } from "next/image";

type ImageCardProps = {
  image: StaticImageData;
  imageAlt: string;
  cardDesc: string;
};

const ImageCard = ({ image, imageAlt, cardDesc }: ImageCardProps) => {
  return (
    <Card className="w-64">
      <CardContent className="mt-4">
        <Image src={image} width={250} height={250} alt={imageAlt} />
      </CardContent>
      <CardHeader>
        <CardDescription className="text-center whitespace-normal break-words">
          {cardDesc}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export { ImageCard };
