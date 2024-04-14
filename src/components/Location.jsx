import { LiaChurchSolid } from "react-icons/lia";
import { BiRestaurant } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import wazeChurch from "../assets/images/QR_Church_Waze.jpg";
import wazeReception from "../assets/images/QR_Reception_Waze.jpg";

const Location = () => {
  return (
    <section
      id="location"
      className="min-h-screen flex flex-col justify-center items-center gap-4 xl:gap-10 px-4 py-10 xl:px-40 xl:py-24 text-sm xl:text-base"
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
            {/* <p className="italic">Scan the code below for directions:</p> */}
            <div className="max-w-xl mx-auto">
              {/* <img src={wazeChurch} className="block w-full" /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6598833181265!2d121.14616951107477!3d14.618440976579908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8dd687da045%3A0x9498561f5b04038f!2sSan%20Pedro%20Calungsod%20Parish!5e0!3m2!1sen!2sph!4v1712669748488!5m2!1sen!2sph"
                width="100%"
                height="400"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
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
          <p className="mt-2 font-bold text-lg">11 AM onwards</p>
          <div className="mt-2">
            {/* <p className="italic">Scan the code below for directions:</p> */}
            <div className="max-w-xl mx-auto">
              {/* <img src={wazeReception} className="block w-full" /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3185477037027!2d121.16860041107431!3d14.580915777498682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c16997b022b7%3A0x9468e114e19b326c!2sLe%20Sabine%20Events%20Place%20at%20C%26B%20Antipolo!5e0!3m2!1sen!2sph!4v1712669941681!5m2!1sen!2sph"
                width="100%"
                height="400"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Location;
