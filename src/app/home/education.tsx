import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ISC from "../../../public/isc.jpg";
import degree from "../../../public/degree.jpg";
import codeworks from "../../../public/codeworks.jpg";

import { EducationCard } from "./educationCard";

const Education = () => {
  return (
    <div id="education" className="w-full max-w-4xl justify-center">
      <h1>Education</h1>
      <Separator className="bg-gray-500" />
      <Tabs defaultValue="University" className="flex mt-4">
        <TabsList className="flex-col h-fit bg-transparent space-y-10 p-2 mr-4 w-28 md:w-32 lg:w-40 border-l-2 border-gray-500 rounded-none">
          <TabsTrigger
            value="University"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            University
          </TabsTrigger>
          <TabsTrigger
            value="CodeWorks"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            CodeWorks
          </TabsTrigger>
          <TabsTrigger
            value="Coursera"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            Coursera
          </TabsTrigger>
          <TabsTrigger
            value="uidev"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            UI.DEV
          </TabsTrigger>
          <TabsTrigger
            value="fcc"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            Free Code Camp
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="University"
          className="flex flex-wrap gap-4 mt-0 max-w-full"
        >
          <EducationCard
            image={degree}
            imageDesc={"West Chester University - B.S. in Computer Science"}
            cardDesc={"West Chester University - B.S. in Computer Science"}
          />
          <EducationCard
            image={ISC}
            imageDesc="WCU ISC Certificate"
            cardDesc={
              <span>
                <a
                  href="https://www.wcupa.edu/sciences-mathematics/computerScience/securityCertificate.aspx"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  WCU ISC Certificate
                </a>{" "}
                for Computer Security
              </span>
            }
          />
        </TabsContent>
        <TabsContent value="CodeWorks">
          <EducationCard
            image={codeworks}
            imageDesc={
              "CodeWorks - Full Stack Web Development coding bootcamp."
            }
            cardDesc={
              <span>
                Codeworks -{" "}
                <a
                  href="https://codeworks.me/software-engineering-bootcamp/"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Software Engineering Immersive Course
                </a>{" "}
              </span>
            }
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { Education };
