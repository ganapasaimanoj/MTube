import {
  List,
  MagnifyingGlass,
  Microphone,
  XCircle,
  User,
  Bell,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/appSlice";
import { Link } from "react-router-dom";
import { GET_VIDEOS_API_URL, SEARCH_URL } from "../../utils/constants";
import { setHomePageData } from "../../redux/videosSlice";
import { setCacheResults } from "../../redux/searchCacheSlice";
import getSearchQueryFormat from "../../utils/custom-hooks/getSearchQueryFormat";
const Header = () => {
  const [input, setInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const dispatch = useDispatch();
  const countryCode = useSelector((store) => store.app.countryCode);
  const videos = useSelector((store) => store.videos.homePageData);
  const searchCache = useSelector((store) => store.searchCache);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const getVideos = async () => {
    try {
      const videosURL = GET_VIDEOS_API_URL(countryCode || "IN");
      const res = await fetch(videosURL);
      const data = await res.json();

      dispatch(setHomePageData(data?.items));
    } catch (e) {
      console.error(e.message);
    }
  };
  const getSearchSuggestions = async () => {
    try {
      const res = await fetch(SEARCH_URL(input));
      const data = await res.json();
      setSearchSuggestions(data[1]);
      dispatch(setCacheResults({ [input]: data[1] }));
    } catch (e) {
      console.error(e.message);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      searchCache[input]
        ? setSearchSuggestions(searchCache[input])
        : getSearchSuggestions();
    }, 200);
    videos.length === 0 && getVideos();
    const documentClick = document.addEventListener("click", () => {
      searchSuggestions.length !== 0 && setInput("");
    });
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", documentClick);
    };
  }, [input, videos.length]);

  return (
    <header className='w-full header flex justify-between px-5 pt-2 pb-4 '>
      <section className='left flex gap-5 items-center '>
        <div className='cursor-pointer' onClick={handleMenuToggle}>
          <List size={24} weight={"thin"} color={"#1a1a1a"} />
        </div>
        <Link to='/' className='w-[8.5rem]'>
          <img src='assets/mocktube.png' className='w-full' alt='logo' />
        </Link>
      </section>
      <section className='relative search flex gap-3 w-[48%]'>
        <div className='input-feild flex  rounded-full w-full '>
          <div className='relative w-full rounded-l-full'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              spellCheck={true}
              placeholder='Search'
              className='py-[0.4rem] inline-flex w-full border border-r-0 border-gray-200 px-5 rounded-l-full placeholder:text-base focus:outline-none focus:ring-2 focus:border-sky-500'
            />

            {input && (
              <div
                className='absolute right-2 top-[0.57rem] cursor-pointer'
                onClick={() => setInput("")}>
                <XCircle size={18} color={"#817f7f"} />
              </div>
            )}
          </div>
          <button className='icon-search inline-flex px-6 border  border-gray-300 items-center rounded-r-full bg-[#605b5b17] hover:bg-[#817f7f2d]'>
            <MagnifyingGlass size={22} color={"#1a1a1a"} />
          </button>
        </div>
        <button className='px-[10px] py-2 flex items-center justify-center rounded-full bg-[#605b5b17] hover:bg-[#817f7f2d]'>
          <Microphone size={22} color={"#1a1a1a"} />
        </button>
        {input && (
          <div className='w-[32rem] absolute top-10 mt-1 pt-4 pb-6 bg-white rounded-lg z-10 shadow-[0px_2px_8px_-4px_rgba(0,0,0,0.59)]'>
            {searchSuggestions.length === 0 ? (
              <h2 className='text-center font-semibold text-black/65'>
                No suggestions found
              </h2>
            ) : (
              <ul className='flex flex-col'>
                {searchSuggestions.map((result, i, arr) => {
                  return (
                    <li key={result} className='py-1 px-5 hover:bg-stone-200'>
                      <Link
                        to={`/results?q=${
                          arr.indexOf(result) === i
                            ? getSearchQueryFormat(result)
                            : getSearchQueryFormat(input)
                        }`}
                        className='flex items-center gap-[14px] '>
                        <MagnifyingGlass
                          size={18}
                          color={"rgb(92 92 92 / 93%)"}
                        />
                        <p className='text-black/90 font-medium'>
                          <span className='font-normal text-black/75'>
                            {result.charAt(0)}
                          </span>
                          {result.slice(1)}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}{" "}
      </section>
      <section className='right flex gap-7 items-center flex-row-reverse justify-end pr-3'>
        <div className='p-2 flex items-center justify-center rounded-full bg-[#6d6b6b]'>
          <User size={20} weight='bold' color={"#fff"} />
        </div>
        <Bell size={24} color={"#1a1a1a"} />
        <VideoCamera size={24} color={"#1a1a1a"} />
      </section>
    </header>
  );
};

export default Header;
