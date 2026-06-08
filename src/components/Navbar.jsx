import { useState } from "react";
import Magnet from "./Magnet";
import FlowingMenu from "./FlowingMenu";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const demoItems = [
    {
      link: "#",
      text: "Home",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#about",
      text: "About",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#projects",
      text: "Projects",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#awards",
      text: "Awards",
      image: "https://picsum.photos/600/400?random=4",
    },
    {
      link: "#contact",
      text: "Contact",
      image: "https://picsum.photos/600/400?random=5",
    },
  ];

  return (
    <div className="fixed w-full z-50">
      {/* Navbar bar */}
      <div className="absolute w-[90%] sm:w-[85%] h-12 sm:h-15 flex items-center justify-between px-3 sm:px-4 left-1/2 -translate-x-1/2 top-3 sm:top-5 backdrop-blur-xs border border-zinc-200 rounded-lg bg-zinc-400/50">
        <h1 className="font-primary text-white text-sm sm:text-base">
          Suvam.info
        </h1>

        <Magnet padding={50} disabled={false} magnetStrength={5}>
          <div
            onClick={() => setmenuOpen(!menuOpen)}
            className="relative flex flex-col items-center justify-center h-9 w-12 sm:h-10 sm:w-14 cursor-pointer">
            <div
              className={`absolute h-[1.5px] w-8 sm:w-10 bg-white transition-all duration-200 ${
                menuOpen ? "rotate-45" : "mb-2 rotate-0"
              }`}
            />
            <div
              className={`absolute h-[1.5px] w-8 sm:w-10 bg-white transition-all duration-200 ${
                menuOpen ? "-rotate-45" : "mt-2 rotate-0"
              }`}
            />
          </div>
        </Magnet>
      </div>

      {/* Dropdown menu */}
      <div
        className={`absolute flex flex-col transition-all duration-200 ${
          menuOpen ? "h-72 sm:h-90" : "h-0"
        } overflow-hidden top-20 sm:top-25 left-1/2 -translate-x-1/2 rounded-lg w-[90%] sm:w-[85%] backdrop-blur-sm`}>
        <FlowingMenu
          items={demoItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#72727288"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#000"
          borderColor="#ffffff"
          setmenuOpen={setmenuOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;
