import { FaReact, FaGitAlt, FaGithub, FaNpm, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiNextdotjs, SiPostman, SiRedux, SiTailwindcss, SiVercel } from "react-icons/si";

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
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
