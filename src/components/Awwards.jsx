import PixelTransition from "./PixelTransition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Awwards = () => {
  const awwarsArray = [
    {
      image: "./District Level Yuva Utsav -India@2047.jpg",
      text: "District Level Yuva Utsav – India@2047 Science Model Participant.",
    },
    {
      image: "./Suvam Chakraborti re-imagine Certificate.png",
      text: "ReImagine Web Development National Level Hackathon Participant.",
    },
    {
      image: "./Lets Upgrade.png",
      text: "Build With AI: Gemini Powered YouTube Summarizer – LetsUpgrade",
    },
    {
      image: "./frontend.png",
      text: "Front-End Domination Program – Sheryians Coding School.",
    },
    {
      image: "./cohort.png",
      text: "Job-Ready Hackathon Participant – Sheryians Coding School.",
    },
    {
      image: "./ISOEH.jpg",
      text: "Technical Workshop on Cyber Security Awareness & Ethical Hacking (ISOEH).",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".pixel-card",
      { opacity: 0, y: 40, rotateX: 30 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pixel-card",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <div
      id="awards"
      className="min-h-screen w-full pt-26 pb-4 sm:pt-24 px-4 sm:px-8 md:px-16 lg:px-25 awward">
      <h1 className="text-center font-secondary italic text-2xl sm:text-4xl mb-4">
        Certification & Achievements
      </h1>
      <p className="text-center font-primary text-zinc-500 text-sm mb-4 sm:mb-2">
        Things I've Achieved
      </p>

      {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-2">
        {awwarsArray.map((item, idx) => (
          <PixelTransition
            key={idx}
            firstContent={
              <img
                src={item.image}
                alt={item.text}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                }}>
                <p className="text-center px-4 text-base sm:text-lg md:text-2xl font-primary">
                  {item.text}
                </p>
              </div>
            }
            gridSize={8}
            pixelColor="#292929"
            once={false}
            animationStepDuration={0.4}
            className="pixel-card"
          />
        ))}
      </div>
    </div>
  );
};

export default Awwards;
