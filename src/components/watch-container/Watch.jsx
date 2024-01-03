import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import getVideoById from "../../utils/custom-hooks/getVideoById";
import WatchLeft from "./WatchLeft";
import WatchRight from "./WatchRight";
import { setHomePage } from "../../redux/homePageSlice";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const [videoData, setVideoData] = useState(null);
  const id = searchParam.get("v");

  useEffect(() => {
    dispatch(closeMenu());
    const getVideoData = async () => {
      dispatch(setHomePage(false));
      const data = await getVideoById(id);
      setVideoData(data);
    };
    if (!videoData) getVideoData();
  }, []);
  if (!videoData) return;

  return (
    <div className='h-[100dvh] overflow-auto pb-24'>
      <div className='w-[91%] mx-auto grid grid-cols-[3fr,_2fr] gap-6 py-4 '>
        <WatchLeft {...videoData} />
        <WatchRight currentId={id} />
      </div>
    </div>
  );
};

export default Watch;
