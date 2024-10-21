import ProjectBox from "../components/ProjectBox";
import TC from "../images/tc.png";

const Projects = () => {
  return (
    <div className="container flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-center py-14 text-4xl">
        My <b>Projects</b>
      </h1>
      <div className="flex flex-wrap justify-center">
        <ProjectBox projectPhoto={TC} projectName="TejashCreation" />
      </div>
    </div>
  );
};

export default Projects;
