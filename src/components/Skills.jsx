import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
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
    Redux: <SiRedux />,
  };

  return (
    <div
      title={skill}
      className="w-36 md:w-60 h-28 md:h-40 flex items-center justify-center border-4 border-[#431f47] text-6xl rounded-md transition-transform duration-500 hover:scale-110 hover:shadow-sm hover:shadow-[#431f47]"
    >
      {icon[skill]}
    </div>
  );
};

export default Skills;
