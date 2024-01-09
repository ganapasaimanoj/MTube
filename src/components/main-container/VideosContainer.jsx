import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { ShimmerCard } from "../layout/Shimmer";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const videos = useSelector((store) => store.videos.homePageData);

  if (!videos) return <ShimmerCard />;
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
