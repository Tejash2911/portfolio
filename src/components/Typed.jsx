import Typewriter from "typewriter-effect";

const Typed = () => {
  return (
    <div className="py-[25px] font-semibold text-2xl md:text-4xl tracking-wider">
      <Typewriter
        options={{
          strings: ["Software Developer", "MERN Developer", "Next.JS Developer"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Typed;
