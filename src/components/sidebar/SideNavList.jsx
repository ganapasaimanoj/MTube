import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideNavList = ({ icon_stroke, icon_fill, route, title, id }) => {
  const [navId, setNavId] = useState(5300);
  const [active, setActive] = useState(id === navId);
  const refID = useRef(id);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const handleActiveTab = () => {
    setNavId(id);
    setActive(id === navId ? true : false);
  };

  return (
    <Link
      ref={refID}
      to={route}
      onClick={handleActiveTab}
      className={`flex items-center gap-5 px-3 py-[10px]
       rounded-lg ${!active && "hover:bg-[#605b5b17]"} ${
        isMenuOpen && active ? "bg-[#605b5b17]" : "bg-[#605b5b00]"
      }`}>
      <img
        className='max-w-[1.35rem]'
        src={active ? icon_fill : icon_stroke}
        alt={`Icon for ${title}`}
      />
      <p className={`text-neutral-800 text-sm ${active && "font-semibold"}`}>
        {title}
      </p>
    </Link>
  );
};

export default SideNavList;
