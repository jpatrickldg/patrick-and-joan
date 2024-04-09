import MobileNavbar from "../components/MobileNavbar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="flex flex-col relative text-motif-brown font-mont bg-motif-grey">
      {/* <MobileNavbar /> */}
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Main;
