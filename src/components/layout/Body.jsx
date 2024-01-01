import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getCountryCode from "../../utils/custom-hooks/getCountryCode";
import { setCountryCode } from "../../redux/appSlice";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "./Header";
const Body = () => {
  const dispatch = useDispatch();
  const countryCode = useSelector((store) => store.app.countryCode);
  useEffect(() => {
    const getCode = async () => {
      const code = await getCountryCode();
      if (!countryCode) dispatch(setCountryCode(code));
    };
    getCode();
  }, []);
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
