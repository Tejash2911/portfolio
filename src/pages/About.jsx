import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";
import Skills from "../components/Skills";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Tejash Patel</b> and I am from Surat Gujarat, India. I&apos;m a <b>MERN stack web developer</b>. <br />
            <br />I have done an internship as a <b>software developer</b> at TOPS Technologies which is a IT Teaching Institute. I love to create original projects with beautiful designs, you can
            check out some of my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.
            <br />
            Apart from coding I love to do photography, you can check out some of my shots here
            <a href="https://www.instagram.com/___tejas2911/" target="_blank">
              Instagram.
            </a>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie className="illustration" animationData={Coder} loop={true} />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Redux" />
        <Skills skill="NextJS" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Postman" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
      </div>
    </>
  );
};

export default About;
