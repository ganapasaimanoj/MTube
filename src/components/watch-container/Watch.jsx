import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import getVideoById from "../../utils/custom-hooks/getVideoById";
import WatchLeft from "./WatchLeft";
import WatchRight from "./WatchRight";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const [videoData, setVideoData] = useState(null);
  const id = searchParam.get("v");
  useEffect(() => {
    const getVideoData = async () => {
      const data = await getVideoById(id);
      setVideoData(data);
    };
    if (!videoData) getVideoData();
    dispatch(closeMenu());
  }, []);
  if (!videoData) return;
  console.log(videoData);
  return (
    <div className='w-[85%] grid grid-cols-[2fr,_1fr] py-4 mx-auto'>
      <WatchLeft {...videoData} />
      <WatchRight />
    </div>
  );
};

export default Watch;
/* https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] */
