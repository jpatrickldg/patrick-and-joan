import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../data";

const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const links = document.querySelectorAll("a.scroll-smooth");
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
};

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center sticky top-0 xl:hidden w-full">
      <div className="h-12 w-full z-50 flex items-center justify-center relative bg-motif-green px-2">
        <button
          className="flex flex-col gap-1 absolute left-2 z-50"
          onClick={toggleOpen}
        >
          <div
            className={`w-6 h-[3px] rounded-md bg-slate-400 transition-transform ease-in-out duration-150 ${
              open && "rotate-45 translate-x-1 translate-y-[7px]"
            }`}
          />
          <div
            className={`w-6 h-[3px] rounded-md bg-slate-400 transition-transform ease-in-out duration-150 ${
              open && "opacity-0"
            }`}
          />
          <div
            className={`w-6 h-[3px] rounded-md bg-slate-400 transition-transform ease-in-out duration-150 ${
              open && "-rotate-45 translate-x-1 -translate-y-[7px]"
            }`}
          />
        </button>
        <div className="flex-1 flex justify-center z-[40]">
          <h1 className="font-libre">P&J</h1>
        </div>
      </div>

      <div
        className={`absolute z-10 top-0 left-0 h-screen w-full bg-motif-green flex flex-col transition-all ease-in duration-150 ${
          open ? "translate-y-0" : "-translate-y-[100%]"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center items-center gap-8 text-black">
          {menuItems.map((menu, index) => (
            <div key={index} className="flex gap-8">
              <a
                href={menu.path}
                className="scroll-smooth"
                onClick={() => setOpen(false)}
              >
                {menu.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MobileNavbar;
