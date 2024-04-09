import { Link } from "react-router-dom";
import { menuItems } from "../data";
import { LiaFacebookSquare } from "react-icons/lia";
import { useEffect, useState } from "react";

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

const Navbar = () => {
  useSmoothScroll();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <section className="w-full flex justify-center items-center fixed xl:absolute top-0 z-[100]">
      <div className="hidden xl:flex gap-8 h-20 items-center justify-center">
        {menuItems.map((menu, index) => (
          <a
            href={menu.path}
            key={index}
            className="scroll-smooth text-white uppercase font-bold hover:text-motif-peach transition-colors ease-in duration-150"
          >
            {menu.label}
          </a>
        ))}
      </div>

      {/* MOBILE */}
      <div
        className={`flex xl:hidden h-12 w-full z-50 items-center justify-center relative px-4 transition-all ease-in-out duration-150 ${
          scrolled ? "bg-motif-green" : "bg-transparent"
        }`}
      >
        <button
          className="flex flex-col gap-1 absolute left-4 z-50"
          onClick={toggleOpen}
        >
          <div
            className={`w-6 h-[3px] rounded-md bg-white transition-transform ease-in-out duration-150 ${
              open && "rotate-45 translate-x-1 translate-y-[7px]"
            }`}
          />
          <div
            className={`w-6 h-[3px] rounded-md bg-white transition-transform ease-in-out duration-150 ${
              open && "opacity-0"
            }`}
          />
          <div
            className={`w-6 h-[3px] rounded-md bg-white transition-transform ease-in-out duration-150 ${
              open && "-rotate-45 translate-x-1 -translate-y-[7px]"
            }`}
          />
        </button>
        <div
          className={`absolute inset-0 h-screen bg-motif-green flex flex-col gap-10 items-center justify-center transition-all ease-in duration-150 ${
            open ? "translate-x-0" : "-translate-x-[100%]"
          }`}
        >
          {menuItems.map((menu, index) => (
            <a
              href={menu.path}
              key={index}
              onClick={() => setOpen(false)}
              className="text-white uppercase font-bold hover:text-motif-peach transition-colors ease-in duration-150"
            >
              {menu.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Navbar;
