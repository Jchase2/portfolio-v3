import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ISC from "../../../public/isc.jpg";
import degree from "../../../public/degree.jpg";
import codeworks from "../../../public/codeworks.jpg";
import HKUST_1 from "../../../public/HKUST_1.png";
import HKUST_2 from "../../../public/HKUST_2.png";
import HKUST_3 from "../../../public/HKUST_3.png";
import HKUST_4 from "../../../public/HKUST_4.png";
import HKUST_5 from "../../../public/HKUST_5.png";
import HKUST_GO from "../../../public/go.png";
import UIDEV from "../../../public/uidev.png";
import fcc1 from "../../../public/fcc1.jpg";
import fcc2 from "../../../public/fcc2.png";
import awsccp from "../../../public/awsccp.png";

import { EducationCard } from "./educationCard";

const Education = () => {
  return (
    <div id="education" className="w-full max-w-4xl justify-center">
      <h2 className="text-lg">Education & Certificates</h2>
      <Separator className="bg-gray-500" />
      <Tabs defaultValue="University" className="flex mt-4 items-start">
        <TabsList className="flex-col h-fit bg-transparent space-y-10 p-2 mr-4 w-28 md:w-32 lg:w-40 lg:min-w-40 border-l-2 border-gray-500 rounded-none">
          <TabsTrigger
            value="University"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            <p className="ml-2">University</p>
          </TabsTrigger>
          <TabsTrigger
            value="CodeWorks"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            <p className="ml-2">CodeWorks</p>
          </TabsTrigger>
          <TabsTrigger
            value="Coursera"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            <p className="ml-2">Coursera</p>
          </TabsTrigger>
          <TabsTrigger
            value="uidev"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            <p className="ml-2">UI.DEV</p>
          </TabsTrigger>
          <TabsTrigger
            value="fcc"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            <p className="ml-2">Free Code Camp</p>
          </TabsTrigger>
          <TabsTrigger
            value="aws"
            className="dark:data-[state=active]:text-blue-400 data-[state=active]:border-l-2 data-[state=active]:border-blue-400 -ml-[20px] w-full justify-center rounded-none text-wrap"
          >
            <p className="ml-2">AWS Certifications</p>
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
        <TabsContent
          value="CodeWorks"
          className="flex flex-wrap gap-4 mt-0 max-w-full"
        >
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
        <TabsContent
          value="Coursera"
          className="flex flex-wrap gap-4 mt-0 max-w-full"
        >
          <EducationCard
            image={HKUST_1}
            imageDesc={
              "Hong Kong University of Science and Technology, Coursera Full Stack Web Development with React, 4 Course Specialization."
            }
            cardDesc={
              <span>
                Hong Kong University of Science and Technology, Coursera Full
                Stack Web Development with React, 4 Course Specialization.
                <a
                  href="https://coursera.org/share/003db97a634a8112eb680ecef7d579cc"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  Verification Link.
                </a>{" "}
              </span>
            }
          />
          <EducationCard
            image={HKUST_2}
            imageDesc={
              "Hong Kong University of Science and Technology, Coursera Front-End Web UI Frameworks and Tools: Bootstrap 4 certificate."
            }
            cardDesc={
              <span>
                Hong Kong University of Science and Technology, Coursera
                Front-End Web UI Frameworks and Tools: Bootstrap 4 certificate.
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/27A294PQ27E3"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  Verification Link.
                </a>{" "}
              </span>
            }
          />
          <EducationCard
            image={HKUST_3}
            imageDesc={
              "Hong Kong University of Science and Technology, Coursera Front-End Web UI Frameworks and Tools: Front End Web Development with React."
            }
            cardDesc={
              <span>
                Hong Kong University of Science and Technology, Coursera
                Front-End Web UI Frameworks and Tools: Front End Web Development
                with React.
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/6GKSXGEGFZXH"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  Verification Link.
                </a>{" "}
              </span>
            }
          />
          <EducationCard
            image={HKUST_4}
            imageDesc={
              "Hong Kong University of Science and Technology, Coursera Multiplatform Mobile App Development with React Native"
            }
            cardDesc={
              <span>
                Hong Kong University of Science and Technology, Coursera
                Multiplatform Mobile App Development with React Native
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/3ET7VXX64JH9"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  Verification Link.
                </a>{" "}
              </span>
            }
          />
          <EducationCard
            image={HKUST_5}
            imageDesc={
              "Hong Kong University of Science and Technology, Coursera Server Side Development with NodeJS, Express, and MongoDB"
            }
            cardDesc={
              <span>
                Hong Kong University of Science and Technology, Coursera Server
                Side Development with NodeJS, Express, and MongoDB
                <a
                  href="https://coursera.org/share/64a12105fdc569687e8196720e30b6bb"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  Verification Link.
                </a>{" "}
              </span>
            }
          />
          <EducationCard
            image={HKUST_GO}
            imageDesc={
              "Cert for completeing Getting started with Go, from UC Urvine on Coursera"
            }
            cardDesc={
              <span>
                Cert for completeing &quot;Getting started with Go&quot;, from
                UC Urvine on Coursera
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/P43KP2AT7DX9"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  Verification Link.
                </a>{" "}
              </span>
            }
          />
        </TabsContent>
        <TabsContent
          value="uidev"
          className="flex flex-wrap gap-4 mt-0 max-w-full"
        >
          <EducationCard
            image={UIDEV}
            imageDesc={
              "Cert for completeing Getting started with Go, from UC Urvine on Coursera"
            }
            cardDesc={
              <span>
                Certificate for completing the React course at
                <a
                  href="https://ui.dev/classic-react"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  UI.DEV
                </a>{" "}
              </span>
            }
          />
        </TabsContent>
        <TabsContent
          value="fcc"
          className="flex flex-wrap gap-4 mt-0 max-w-full"
        >
          <EducationCard
            image={fcc1}
            imageDesc={
              "Cert for completeing Getting started with Go, from UC Urvine on Coursera"
            }
            cardDesc={
              <span>
                Free Code Camp Data Structures and Algorithms certification.
                <a
                  href="https://www.freecodecamp.org/certification/fcc2c5f7d4d-6435-4973-a266-804a044e6aaf/javascript-algorithms-and-data-structures"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  Verification Link.
                </a>{" "}
              </span>
            }
          />
          <EducationCard
            image={fcc2}
            imageDesc={"Responsive Web Design Certification."}
            cardDesc={
              <span>
                Responsive Web Design Certification.
                <a
                  href="https://www.freecodecamp.org/certification/fcc2c5f7d4d-6435-4973-a266-804a044e6aaf/responsive-web-design"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  Verification Link.
                </a>{" "}
              </span>
            }
          />
        </TabsContent>
        <TabsContent
          value="aws"
          className="flex flex-wrap gap-4 mt-0 max-w-full"
        >
          {" "}
          <EducationCard
            image={awsccp}
            imageDesc={"AWS Certified Cloud Practitioner Cert"}
            cardDesc={
              <span className="p-2">
                AWS Certified Cloud Practitioner Cert. Verification Code Is:
                dd38cf79c28f4f19b42d89a59c2bac15
                <a
                  href="https://cp.certmetrics.com/amazon/en/public/verify/credential"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  Verification Link.
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
