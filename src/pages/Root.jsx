import banner from "../assets/images/Edited-12.jpg";
import Details from "../components/Details";
import End from "../components/End";
import Entourage from "../components/Entourage";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Location from "../components/Location";
import Navbar from "../components/MobileNavbar";
import OtherDetails from "../components/OtherDetails";
import QuestionAndAnswer from "../components/QuestionAndAnswer";

const Root = () => {
  return (
    <>
      <Hero />
      <Location />
      {/* <Details /> */}
      <Entourage />
      <OtherDetails />
      <Gallery />
      <QuestionAndAnswer />
      <End />
    </>
  );
};
export default Root;
