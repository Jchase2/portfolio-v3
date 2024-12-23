import { ProjectCard } from "@/app/home/ProjectCard";
import { Separator } from "@/components/ui/separator";
import ProjectData from "./projectsData";

const Projects = () => {
  return (
    <div id="projects" className="w-full max-w-4xl">
      <h2 className="text-lg">Projects</h2>
      <Separator />
      <div className="flex flex-row flex-wrap my-2">
        {ProjectData.map((elem, index) => {
          return (
            <ProjectCard
              key={index}
              title={elem.title}
              data={elem.data}
              github={elem.github}
              live={elem.live}
              otherImage={elem.otherImage}
              otherImageText={elem.otherImageText}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Projects };
