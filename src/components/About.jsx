import { useEffect } from "react";
import Cubes from "./Cubes";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 60%",
          end: "top 30%",
          scrub: true,
        },
        opacity: 0,
        y: 60,
        x: 40,
        rotateX: 25,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
      className="h-[75vh] sm:h-[80vh] lg:min-h-screen relative w-full flex items-center justify-between">
      {/* Cubes: hidden on mobile, visible md+ */}
      <div className="hidden md:flex absolute w-[55%] lg:w-[60%] justify-center items-center -ml-10 lg:-ml-25">
        <Cubes
          gridSize={6}
          maxAngle={45}
          radius={3}
          borderStyle="2px dashed #7878786b"
          faceColor="#fff"
          rippleColor="#000"
          rippleSpeed={1.5}
          autoAnimate
          rippleOnClick
        />
      </div>

      {/* Text overlay */}
      <div className="absolute h-full w-full flex flex-col pointer-events-none z-20 pt-20 sm:pt-24 md:pt-30">
        <h1 className="text-center font-secondary italic text-2xl sm:text-3xl">
          About
        </h1>

        <p
          className="about-text
          /* mobile: full width, centered */
          w-[90%] mx-auto mt-6 leading-8 text-justify font-primary text-base
          /* tablet+: right half */
          md:w-1/2 md:ml-auto md:mr-10 md:px-4 md:leading-9 md:text-lg
          /* desktop */
          lg:mr-23 lg:leading-10 lg:text-xl">
          Hi, I'm Suvam Chakraborti, a Full-Stack Engineer specializing in
          React.js, Node.js, Express.js, MongoDB, and REST APIs. I have
          experience developing and maintaining production business applications
          at KT Computech, including billing, inventory, reporting, and order
          management systems that have processed 700+ customer orders. I enjoy
          building scalable web applications, solving real-world problems, and
          working on modern technologies such as microservices, Socket.IO, and
          Tauri. Currently, I'm seeking opportunities to contribute to impactful
          products while continuing to grow as a software engineer.
        </p>
      </div>
    </div>
  );
};

export default About;
