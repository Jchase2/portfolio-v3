import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div id="about" className="max-w-4xl min-w-80">
      <h2 className="text-lg">About Me</h2>
      <Separator />
      <p className="mt-2">
        I am a Full Stack Developer located in Philadelphia, Pennsylvania.
      </p>
      <p className="my-2">Skills:</p>
      <p className="my-2">
        <b>Front End:</b> React, Redux, Angular, HTML5, CSS, and jQuery
      </p>
      <p className="my-2">
        <b>Back End:</b> Express, Koa, NodeJS, PostgreSQL, Sequelize, MongoDB,
        Mongoose, REST APIs, .NET Core, MS SQL Server, Entity Framework
      </p>
      <p className="my-2">
        Others: JavaScript(ES6+), TypeScript, TDD/BDD, Jest, Cypress, JSON, Git,
        npm, and JWT&apos;s
      </p>
      <p className="my-2">
        I&apos;m a CS grad who&apos;s constantly improving my skills. Recently,
        I&apos;ve been working with React and its associated stack on front end,
        as well as node with related tech on the back end. I have experience
        building full stack apps and I&apos;m very interested in growing my
        skills and taking on a new challenge. I have developed a wide range of
        skills working on various projects and constantly expanding my skills
        over the last few years. Feel free to check out some of my projects!
      </p>
      <p className="my-2">
        In my free time, I enjoy gaming, snowboarding riding motorcycles and
        spending time with friends and family. I&apos;m always open to trying
        new things!
      </p>
    </div>
  );
};

export { About };
