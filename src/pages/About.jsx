import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-screen">
        <div className="text-base lg:text-xl font-medium leading-5 sm:leading-8 tracking-normal sm:tracking-[1.2px]">
          <h1 className="text-2xl lg:text-4xl font-semibold pb-4">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Tejash Patel</b> and I am from Surat Gujarat,
            India. I&apos;m a <b>MERN stack web developer</b>. <br />
            <br />I have done my training as a <b>software developer</b> at TOPS
            Technologies which is a IT Teaching Institute. I love to create
            original projects with beautiful designs, you can check out some of
            my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <b>
              <a
                href="https://www.instagram.com/___tejas2911/"
                target="_blank"
                className="underline"
              >
                Instagram.
              </a>
            </b>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="w-[250px] lg:w-[400px]"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="text-center text-2xl md:text-4xl font-bold tracking-wider">
        Professional SkillSet
      </h1>
      <div className="flex flex-wrap justify-center gap-7 py-10 ">
        <Skills skill="Javascript" />
        <Skills skill="Typescript" />
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
        <Skills skill="MUI" />
      </div>
    </div>
  );
};

export default About;
