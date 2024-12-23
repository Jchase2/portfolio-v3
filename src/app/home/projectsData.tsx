import React, { ReactElement } from "react";
import { StaticImageData } from "next/image";
import Server from "../../../public/Server.jpg";

interface IProjectCard {
  title: string;
  data: ReactElement | string;
  github?: string;
  live?: string;
  otherImage?: StaticImageData;
}

const ProjectData: IProjectCard[] = [
  {
    title: "serverHuD",
    data: "Web based heads up display for servers and websites. Designed by a dev for server admins, website admins, or devs to monitor their services, servers or websites.",
    github: "https://github.com/Jchase2/serverHuD",
  },
  {
    title: "HN Clone",
    data: (
      <React.Fragment>
        A ycombinator hacker news clone using react,{" "}
        {<a href="https://reactrouter.com">react-router</a>},{" "}
        {<a href="https://react.semantic-ui.com/">react semantic-ui</a>} and{" "}
        {<a href="https://github.com/HackerNews/API">the HN firebase API.</a>}
      </React.Fragment>
    ),
    github: "https://github.com/Jchase2/hn-clone",
    live: "https://5df39389dbcc44707f766644--admiring-shirley-f2e656.netlify.com/",
  },
  {
    title: "Torque Calculator",
    data: "A torque calculator written in JS and React, used to calculate bolt torque.",
    github: "https://github.com/Jchase2/torque-chart",
    live: "https://jamesdchase.com/torque",
  },
  {
    title: "Simple Pass Manager",
    data: "A simple password manager written in bash for unix-like systems. Uses GPG and shell tools.",
    github: "https://github.com/Jchase2/simple-pass-manager",
  },
  {
    title: "Ocaml Pass",
    data: "Similar to simple pass manager, except written in Ocaml, and utilizes an encryption library.",
    github: "https://github.com/Jchase2/ocaml-pass",
  },
  {
    title: "Server",
    data: "About my personal server / the stack this site (and my projects) are running on.",
    otherImage: Server,
  },
  {
    title: "punbbDiscordBot",
    data: "A bot that cross posts music from a discord channel to a PunBB forum thread.",
    github: "https://github.com/Jchase2/punbbDiscordBot",
  },
  {
    title: "SchedulingQueue",
    data: "A java app developed to simulate an operating system scheduling queue.",
    github: "https://github.com/Jchase2/SchedulingQueue",
  },
  {
    title: "Portfolio V2",
    data: "Version 2 of my Portfolio page.",
    github: "https://github.com/Jchase2/portfolio-v2",
  },
];

export default ProjectData;
