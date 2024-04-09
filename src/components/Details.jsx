import detailsImage from "../assets/images/Edited-32.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { LiaChurchSolid } from "react-icons/lia";
import { BiRestaurant } from "react-icons/bi";

const Details = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 xl:px-40 gap-40 bg-motif-green">
      <div className="down-up max-w-md rounded-md hidden xl:block">
        <img
          src={detailsImage}
          alt=""
          className="block w-full object-contain object-center rounded-md"
        />
      </div>
      <div className="down-up flex-1 text-center text-motif-peach max-w-2xl">
        <h1 className="font-libre font-bold text-2xl xl:text-[40px]">
          WE ARE GETTING MARRIED!
        </h1>
        <div className="font-libre font-bold text-xl xl:text-3xl flex flex-col xl:flex-row gap-1 xl:gap-4 justify-center mt-8">
          <span>SATURDAY</span>
          <span className="hidden xl:inline">|</span>
          <span>June 15, 2024</span>
          <span className="hidden xl:inline">|</span>
          <span>9 AM</span>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-4 mt-8">
          <span>
            <LiaChurchSolid className="w-10 h-10" />
          </span>
          <div>
            <h3 className="text-lg font-libre font-bold uppercase">
              Saint Pio of Pietrelcina Parish
            </h3>
            <p>
              (formerly known as{" "}
              <span className="font-semibold">
                San Pedro Calungsod Parish - Sanctuary of Padre Pio
              </span>
              )
            </p>
            <p>
              <IoLocationSharp className="inline mr-1" />
              106 Sumulong Highway, Antipolo, 1870 Rizal, Philippines
            </p>
          </div>
        </div>
        {/* <p className="mt-4 italic">Reception to follow at</p> */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-4 mt-8">
          <span>
            <BiRestaurant className="w-8 h-8" />
          </span>
          <div>
            <h3 className="text-lg font-libre font-bold uppercase">
              Le Sabine Events Place at C&B Mall Antipolo
            </h3>
            <p>
              <IoLocationSharp className="inline mr-1" />
              Cristimar Avenue corner L. Sumulong Memorial Circle Barangay San
              Roque, 1870 Antipolo, Philippines
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
