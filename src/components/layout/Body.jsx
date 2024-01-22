import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "./Header";
const Body = () => {
  return (
    <>
      <Header />
      <div className='grid grid-cols-[auto_auto]'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
