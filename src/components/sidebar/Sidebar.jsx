import { useSelector } from "react-redux";
import { SIDE_NAV } from "../../utils/constants";
import SideNavCategories from "./SideNavCategories";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${
        isMenuOpen ? "w-[14.5rem] px-3 " : "w-[5rem] gap-3"
      } flex flex-col h-screen overflow-y-auto`}>
      {isMenuOpen ? (
        SIDE_NAV.map((section, i) => (
          <SideNavCategories {...section} key={section.heading || i} />
        ))
      ) : (
        <>
          <Link
            to='/'
            className={`flex flex-col items-center gap-1 px-2 py-2 rounded-md 
          hover:bg-[#605b5b17] bg-[#605b5b00]`}>
            <img
              className='max-w-[1.35rem]'
              src='assets/icons/home.svg'
              alt='Icon for home'
            />
            <p className={`text-neutral-800  text-[11px]`}>Home</p>
          </Link>
          <Link
            to='/'
            className={`flex flex-col items-center gap-1 px-2 py-2 rounded-md 
          hover:bg-[#605b5b17] bg-[#605b5b00]`}>
            <img
              className='max-w-[1.35rem]'
              src='assets/icons/subscribe.svg'
              alt='Icon for subscriptions'
            />
            <p className={`text-neutral-800  text-[11px]`}>Subscriptions</p>
          </Link>
          <Link
            to='/'
            className={`flex flex-col items-center gap-1 px-2 py-2 rounded-md 
          hover:bg-[#605b5b17] bg-[#605b5b00]`}>
            <img
              className='max-w-[1.35rem]'
              src='assets/icons/podcasts.svg'
              alt='Icon for podcasts'
            />
            <p className={`text-neutral-800 text-xs`}>Podcasts</p>
          </Link>
          <Link
            to='/'
            className={`flex flex-col items-center gap-1 px-2 py-2 rounded-md 
          hover:bg-[#605b5b17] bg-[#605b5b00]`}>
            <img
              className='max-w-[1.35rem]'
              src='assets/icons/learning.svg'
              alt='Icon for learning'
            />
            <p className={`text-neutral-800 text-[11px]`}>Learning</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;
