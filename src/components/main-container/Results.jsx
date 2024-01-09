import { useEffect, useState } from "react";
import { SEARCH_RESULTS_URL } from "../../utils/constants";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import UnderProgress from "../layout/UnderProgress";

const Results = () => {
  const [searchResults, setSearchResults] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [searchParam] = useSearchParams();
  const query = searchParam.get("q");
  const getSearchResults = async () => {
    const res = await fetch(SEARCH_RESULTS_URL(query));
    const data = await res.json();
    setSearchResults(data);
  };
  useEffect(() => {
    //getSearchResults();
  }, []);

  return (
    <>
      <UnderProgress page={"Search Results"} />
      {/*<div className='flex flex-col mt-24 items-center'>
       <div
      className={`video-container pb-32 flex flex-wrap ${
        isMenuOpen ? "gap-x-3" : "gap-x-4"
      } gap-y-3`}>
      *{searchResults.map((video) => (
        <Link to={`/watch?v=${video?.id.videoId}`} key={video?.id.videoId}>
          <VideoCard info={video} />
        </Link>
     ))}
      <img alt='devImg' src='assets/dev.png' className='w-[20%]' />
      <h3 className='text-2xl font-semibold '>
        Thank you for visiting. Search Results under progress.
      </h3>
    </div>*/}
    </>
  );
};

export default Results;
