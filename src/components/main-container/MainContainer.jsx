import { useState } from "react";
import VideosContainer from "./VideosContainer";
import { setHomePage } from "../../redux/videosSlice";
import { useDispatch } from "react-redux";
const MainContainer = () => {
  const dispatch = useDispatch();
  useState(() => {
    dispatch(setHomePage(true));
  }, []);
  return (
    <div className='w-full pl-6 py-3 h-screen overflow-y-auto'>
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
