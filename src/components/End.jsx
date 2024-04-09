import heroImage from "../assets/images/Edited-12.jpg";
import Navbar from "./Navbar";

const End = () => {
  return (
    <section
      id="hero"
      className="down-up hero-section relative min-h-screen w-full"
    >
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-top flex flex-col"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* FILTER */}
        <div className="absolute inset-0 bg-gray-800 opacity-50" />
      </div>

      {/* DETAILS */}
      <div className="absolute inset-0 h-full flex flex-col items-center text-white p-4 text-center">
        {/* NAVBAR */}
        {/* <Navbar /> */}
        <div className="flex-1 flex flex-col items-center justify-end mt-20 xl:mt-0 gap-4 xl:text-xl">
          <h1 className="text-2xl xl:text-6xl font-bold font-homemade mb-32 xl:mb-28">
            Looking forward to celebrate with you!
          </h1>
        </div>
      </div>
    </section>
  );
};
export default End;
