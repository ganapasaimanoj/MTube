import { useEffect, useState } from "react";
import { GET_VIDEOS_API_URL } from "../../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import Shimmer from "../layout/Shimmer";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videos, setVidoes] = useState([]);
  const countryCode = useSelector((store) => store.app.countryCode) || "IN";
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const videosURL = GET_VIDEOS_API_URL(countryCode);
        const res = await fetch(videosURL);
        const data = await res.json();
        setVidoes(data?.items);
      } catch (e) {
        console.error(e.message);
      }
    };
    getVideos();
  }, []);
  if (!videos) return <Shimmer />;
  return (
    <div
      className={`video-container pb-32 flex flex-wrap ${
        isMenuOpen ? "gap-x-3" : "gap-x-4"
      } gap-y-3`}>
      {videos.map((video) => (
        <Link to={`/watch?v=${video?.id}`} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideosContainer;
