import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { LucideGithub, LucideLink } from "lucide-react";
import { StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  data: ReactNode;
  github?: string;
  live?: string;
  otherImage?: StaticImageData;
};

const ProjectCard = ({
  title,
  data,
  github,
  live,
  otherImage,
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
          {/* replace with image popout when that gets written */}
          {otherImage && null}
        </div>
      </CardHeader>
      <CardContent>{data}</CardContent>
    </Card>
  );
};

export { ProjectCard };