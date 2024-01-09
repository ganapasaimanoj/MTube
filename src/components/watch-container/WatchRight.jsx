import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "../main-container/VideoCard";
import LiveChat from "./LiveChat";

const WatchRight = ({ currentId }) => {
  const videosData = useSelector((store) => store.videos.homePageData);
  const filteredData = videosData
    .filter((video) => video.id !== currentId)
    .slice(0, 20);

  if (!filteredData) return;
  return (
    <div className='side-video-container flex flex-col gap-5 px-3 w-full'>
      <LiveChat />
      <div className=' flex flex-col gap-3 '>
        {filteredData.map((video) => (
          <Link to={`/watch?v=${video?.id}`} key={video?.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchRight;
