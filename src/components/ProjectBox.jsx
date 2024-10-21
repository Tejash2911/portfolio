import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TejashCreationDesc:
      "Tejash Creation is a Fully Fledge E-commerce Project which i made using Next.js and Tailwind CSS",
    TejashCreationGithub: "https://github.com/tejash2911/tc-next",
    TejashCreationWebsite: "https://tejash-creation.vercel.app",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="w-[300px] border-4 border-[#431f47] rounded-md text-center p-6 leading-6 transition-transform duration-500 transform hover:scale-105">
      <img
        className="block w-full my-5"
        src={projectPhoto}
        alt="Project display"
      />
      <div>
        <h3 className="text-xl font-semibold my-3">{projectName}</h3>
        <p className="mb-4 text-base">{desc[projectName + "Desc"]}</p>

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-lg inline-flex items-center justify-around w-2/5 mt-6 mx-3 rounded-md bg-[#431f47] text-white h-10 hover:bg-[#5a2d5e] transition-colors">
            <FaGithub /> Github
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-lg inline-flex items-center justify-around w-2/5 mt-6 mx-3 rounded-md bg-[#431f47] text-white h-10 hover:bg-[#5a2d5e] transition-colors">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
