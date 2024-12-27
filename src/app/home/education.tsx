import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ISC from "../../../public/isc.jpg";
import degree from "../../../public/degree.jpg";
import { EducationCard } from "./educationCard";

const Education = () => {
  return (
    <div id="education" className="w-full max-w-4xl justify-center">
      <h1>Education</h1>
      <Separator />
      <Tabs defaultValue="University" className="flex mt-4">
        <TabsList className="flex-col h-fit space-y-10 bg-muted p-2 mr-4 w-28 md:w-32 lg:w-40">
          <TabsTrigger
            value="University"
            className="data-[state=active]:bg-background w-full justify-start"
          >
            University
          </TabsTrigger>
          <TabsTrigger
            value="CodeWorks"
            className="data-[state=active]:bg-background w-full justify-start"
          >
            Codeworks
          </TabsTrigger>
          <TabsTrigger
            value="Coursera"
            className="data-[state=active]:bg-background w-full justify-start"
          >
            Coursera
          </TabsTrigger>
          <TabsTrigger
            value="uidev"
            className="data-[state=active]:bg-background w-full justify-start"
          >
            UI.DEV
          </TabsTrigger>
          <TabsTrigger
            value="fcc"
            className="data-[state=active]:bg-background w-full justify-start text-wrap"
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
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  WCU ISC Certificate
                </a>{" "}
                for Computer Security
              </span>
            }
          />
        </TabsContent>
        <TabsContent value="Codeworks">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export { Education };
