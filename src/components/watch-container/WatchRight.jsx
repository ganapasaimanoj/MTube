import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "../main-container/VideoCard";
/* import { useEffect, useState } from "react"; */
const WatchRight = ({ currentId }) => {
  /* const [sideContainer, setSideContainer] = useState(null); */
  const videosData = useSelector((store) => store.videos.homePageData);
  const filteredData = videosData
    .filter((video) => video.id !== currentId)
    .slice(0, 20);
  /*   useEffect(() => {
    setSideContainer(filteredData);
  }, [filteredData]); */
  if (!filteredData) return;
  return (
    <div className='side-video-container w-full flex flex-col gap-3 px-3'>
      {filteredData.map((video) => (
        <Link to={`/watch?v=${video?.id}`} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default WatchRight;
