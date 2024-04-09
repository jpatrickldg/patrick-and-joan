import heroImage from "../assets/images/Edited-20.jpg";
import Navbar from "./Navbar";

const End = () => {
  return (
    <section id="hero" className="hero-section relative min-h-screen w-full">
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-[left_-22rem_top] xl:bg-top flex flex-col"
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
        <div className="down-up flex-1 flex flex-col items-center justify-between mt-20 xl:mt-0 gap-4 xl:text-xl">
          <h1 className="text-2xl xl:text-6xl font-bold font-homemade mt-12 xl:mt-52">
            Looking forward to celebrating with you!
          </h1>
          <p className="text-sm">
            Save the date and stay tuned for more updates on our upcoming
            wedding festivities. With love, Patrick and Joan.
          </p>
        </div>
      </div>
    </section>
  );
};
export default End;
