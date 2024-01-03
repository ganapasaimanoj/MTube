import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "../layout/Shimmer";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const videos = useSelector((store) => store.homePage.homePageData);

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
