import { motion } from "motion/react";
const LandingPart = () => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.055, delayChildren: 0.65 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 20, rotate: 4, color: "#dadada" },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      color: ["#E4E4E7", "#FE9A00", "#CA3500", "#d97706", "#b45309"],
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 18,
        color: {
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      },
    },
  };

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  const slideLeft = (delay) => ({
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <img
        className="hidden lg:block w-full h-full absolute object-cover blur-2xl"
        src="./ChatGPT Image Jun 7, 2026, 03_25_30 PM.png"
        alt=""
      />
      <img
        className="block lg:hidden w-full h-full absolute object-cover opacity-30"
        src="./ChatGPT Image Jun 8, 2026, 03_15_37 PM.png"
        alt=""
      />
      <div className="absolute w-full h-full px-4 sm:px-8 flex items-center">
        <div className="w-full sm:w-auto">
          <motion.small
            {...fadeUp(0.1)}
            className="font-primary text-xl sm:text-lg md:text-2xl">
            Hello, I'm
          </motion.small>

          <div>
            <motion.p
              {...slideLeft(0.4)}
              className="text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-secondary">
              Suvam
            </motion.p>

            {/* Per-letter stagger on Chakraborti */}
            <motion.p
              className="font-secondary-italic italic text-6xl sm:text-7xl md:text-7xl lg:text-8xl text-amber-700"
              variants={container}
              initial="hidden"
              animate="show">
              {"Chakraborti".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  style={{ display: "inline-block" }}
                  transition={{
                    color: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: i * 0.15,
                    },
                  }}>
                  {ch}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              className="h-[1px] bg-black mt-2"
              initial={{ width: 0 }}
              animate={{ width: 260 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1.1 }}
            />
          </div>

          <motion.h4
            {...fadeUp(1.3)}
            className="mt-4 font-primary text-xl sm:text-xl md:text-2xl font-semibold">
            Full Stack MERN Developer
          </motion.h4>

          <motion.p
            {...fadeUp(1.5)}
            className="w-full sm:w-3/4 md:w-1/2 mt-10 lg:mt-4 font-secondary font-bold lg:font-normal text-3xl sm:text-lg md:text-xl italic text-black lg:text-zinc-600">
            Architecting high-performance web applications with a focus on
            scalable Microservices, AI integration, and immaculate user
            experiences.
          </motion.p>
        </div>
      </div>

      <motion.img
        initial={{ x: 80, opacity: 0, scale: 1.09 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="hidden lg:block w-full h-full absolute object-cover pointer-events-none"
        src="./png.png"
        alt=""
      />

      {/* Location badge — stacks on small screens */}
      <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 md:right-25 rounded-md flex items-center gap-x-3 sm:gap-x-4 w-fit h-10 sm:h-14 px-3 sm:px-4 bg-zinc-600/90 lg:bg-zinc-400/30 backdrop-blur-2xl border border-white/50">
        <motion.div className="bg-emerald-400 animate-pulse h-2.5 w-2.5 sm:h-3 sm:w-3 shadow-[0px_0px_10px_7px_rgba(0,200,0,0.8)] rounded-full" />
        <h1 className="text-white font-primary italic text-lg sm:text-lg md:text-base">
          Durgapur - West Bengal - India
        </h1>
      </div>
    </div>
  );
};

export default LandingPart;
