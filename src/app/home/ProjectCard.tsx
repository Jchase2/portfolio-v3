import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { LucideGithub, LucideLink } from "lucide-react";
import { StaticImageData } from "next/image";

import { ImageModal } from "@/components/imageModal";

type ProjectCardProps = {
  title: string;
  data: ReactNode;
  github?: string;
  live?: string;
  otherImage?: StaticImageData;
  otherImageText?: string;
};

const ProjectCard = ({
  title,
  data,
  github,
  live,
  otherImage,
  otherImageText,
}: ProjectCardProps) => {
  return (
    <Card className="flex-grow basis-60 min-w-60 max-w-96 m-1">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <div className="flex items-center space-x-2">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <LucideGithub size="16" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <LucideLink size="16" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {data}
        <div className="flex justify-center mt-4">
          {otherImage && otherImageText ? (
            <ImageModal
              image={otherImage}
              buttonText={otherImageText}
              imageDesc={otherImageText}
              triggerType={"button"}
            />
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};

export { ProjectCard };
