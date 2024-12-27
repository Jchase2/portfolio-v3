import { ProjectCard } from "@/app/home/ProjectCard";
import { Separator } from "@/components/ui/separator";
import ProjectData from "./projectsData";

const Projects = () => {
  return (
    <div id="projects" className="w-full md:max-w-4xl sm:max-w-[100vw]">
      <h2 className="text-lg">Projects</h2>
      <Separator className="bg-gray-500" />
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
