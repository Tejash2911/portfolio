import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "../components/Typed.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center content-center lg:justify-between flex-wrap h-screen ">
        <div className="font-semibold text-2xl md:text-4xl">
          <h1>Hi There!</h1>
          <h1>
            I&apos;M <b>TEJASH PATEL</b>
          </h1>
          <Typed />
        </div>

        <Lottie
          className="h-[400px] w-[400px]"
          animationData={SpaceBoy}
          loop={true}
        />
      </div>

      <div className="flex items-center justify-center lg:justify-between flex-wrap h-[80vh] py-7">
        <div className="w-full lg:w-2/3 text-base lg:text-xl font-medium leading-6 md:leading-8 tracking-normal md:tracking-[1.2px]">
          <h1 className="text-2xl lg:text-4xl font-semibold pb-10">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love the process of changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am fluent in <b>Javascript</b> and know a bit of{" "}
            <b>Typescript</b> and am working on a few projects in the{" "}
            <b>MERN</b> stack.
            <br />I plan to learn <b>Next.js</b>, <b>Three.js</b> and
            <b> Typescript</b> in the near future. <br />
            <br />
            Also, I love <b>coffee</b>{" "}
            <CiCoffeeCup
              style={{ scale: "1.5", rotate: "15deg", display: "inline" }}
            />
          </p>
        </div>
        <Tilt>
          <img className="w-[200px] lg:w-[280px] " src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
