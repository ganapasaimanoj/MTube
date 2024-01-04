import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import getVideoById from "../../utils/custom-hooks/getVideoById";
import WatchLeft from "./WatchLeft";
import WatchRight from "./WatchRight";
import { setHomePage, setWatchVideo } from "../../redux/videosSlice";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  const videoData = useSelector((store) => store.videos.watchVideo);

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(setHomePage(false));
    const getVideoData = async () => {
      const data = await getVideoById(id);
      dispatch(setWatchVideo(data));
    };

    getVideoData();
  }, [id, dispatch]);
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
