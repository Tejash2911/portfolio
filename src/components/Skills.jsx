import { FaGitAlt, FaGithub, FaNpm, FaBootstrap } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    Postman: <SiPostman />,
    React: <SiReact />,
    Javascript: <SiJavascript />,
    Typescript: <SiTypescript />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    NextJS: <SiNextdotjs />,
    Tailwind: <SiTailwindcss />,
    MUI: <SiMui />,
    Redux: <SiRedux />,
  };

  return (
    <div
      title={skill}
      className="w-24 md:w-36 lg:w-60 h-20 md:h-28 lg:h-40 flex items-center justify-center border-4 border-[#431f47] text-4xl lg:text-6xl rounded-md transition-transform duration-500 hover:scale-110 hover:shadow-sm hover:shadow-[#431f47]"
    >
      {icon[skill]}
    </div>
  );
};

export default Skills;
