import heroImage from "../assets/images/Edited-14-Cropped.jpg";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import { LiaChurchSolid } from "react-icons/lia";
import { BiRestaurant } from "react-icons/bi";

const Hero = () => {
  return (
    <section id="hero" className="hero-section relative min-h-screen w-full">
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-bottom flex flex-col"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* FILTER */}
        <div className="absolute inset-0 bg-gray-800 opacity-50" />
      </div>

      {/* DETAILS */}
      <div className="absolute inset-0 h-full flex flex-col items-center text-white">
        {/* NAVBAR */}
        {/* <Navbar /> */}
        <div className="flex-1 text-base flex flex-col items-center xl:justify-center mt-20 xl:mt-0 gap-4 xl:text-xl">
          <p>We are getting married</p>
          <h1 className="text-4xl xl:text-8xl font-bold font-libre">
            Patrick & Joan
          </h1>
          <div className="text-center">
            <p className="text-lg xl:text-2xl font-libre">
              Saturday | June 15, 2024 | 9 AM
            </p>
            <p className="mt-2">Saint Pio of Pietrelcina Parish</p>
            <p className="text-xs lg:text-sm italic">reception to follow at</p>
            <p>Le Sabine Events Place</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
