import { LiaChurchSolid } from "react-icons/lia";
import { BiRestaurant } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import wazeChurch from "../assets/images/QR_Church_Waze.jpg";
import wazeReception from "../assets/images/QR_Reception_Waze.jpg";

const Location = () => {
  return (
    <section
      id="location"
      className="min-h-screen flex flex-col justify-center items-center gap-4 xl:gap-10 px-4 py-10 xl:px-40 text-sm xl:text-base"
    >
      <h2 className="down-up text-3xl xl:text-5xl font-bold font-homemade">
        Location
      </h2>
      <div className="flex flex-col justify-center items-center xl:flex-row gap-4 xl:gap-10">
        <div className="down-up flex-1 text-center border-motif-peach p-4 xl:p-10 rounded-2xl">
          <h3 className="font-bold font-libre text-2xl xl:text-3xl">
            Ceremony
          </h3>
          <div className="mt-4">
            <p className="font-libre font-bold text-lg xl:text-xl flex gap-1 items-center justify-center">
              <LiaChurchSolid className="inline" /> Saint Pio of Pietrelcina
              Parish
            </p>
            <p className="mt-1">
              (formerly known as{" "}
              <span className="font-semibold italic ">
                San Pedro Calungsod Parish - Sanctuary of Padre Pio
              </span>
              )
            </p>
            <p className="mt-1">
              <IoLocationSharp className="inline" /> 106 Sumulong Highway,
              Antipolo, 1870 Rizal, Philippines
            </p>
            <p className="mt-2 font-bold text-lg">9 AM</p>
          </div>
          <div className="mt-2">
            <p className="italic">Scan the code below for directions:</p>
            <div className="max-w-xs mx-auto">
              <img src={wazeChurch} className="block w-full" />
            </div>
          </div>
        </div>
        <div className="down-up flex-1  text-center border-motif-peach p-4 xl:p-10 rounded-2xl">
          <h3 className="font-bold font-libre text-2xl xl:text-3xl">
            Reception
          </h3>
          <div className="mt-4">
            <p className="font-libre font-bold text-lg xl:text-xl flex gap-1 items-center justify-center">
              <BiRestaurant className="inline" /> Le Sabine Events Place at C&B
              Mall Antipolo
            </p>

            <p className="">
              <IoLocationSharp className="inline" /> Cristimar Avenue corner L.
              Sumulong Memorial Circle Barangay San Roque, 1870 Antipolo,
              Philippines
            </p>
          </div>
          <p className="mt-2 font-bold text-lg">11 AM</p>
          <div className="mt-2">
            <p className="italic">Scan the code below for directions:</p>
            <div className="max-w-xs mx-auto">
              <img src={wazeReception} className="block w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Location;
