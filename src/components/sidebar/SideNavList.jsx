import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SideNavList = ({ icon_stroke, icon_fill, route, title, id }) => {
  const [navId, setNavId] = useState(5300);
  const [active, setActive] = useState(id === navId);
  const refID = useRef();
  const handleActiveTab = () => {
    setNavId(id);
    setActive(id === navId ? true : false);
  };
  return (
    <div className='flex flex-col' ref={refID}>
      <div
        onClick={handleActiveTab}
        className={`py-2 rounded-md ${!active && "hover:bg-[#605b5b17]"} ${
          active ? "bg-[#605b5b17]" : "bg-[#605b5b00]"
        }`}>
        <Link to={route} className='flex items-center gap-5 px-3'>
          <img
            className='max-w-6'
            src={active ? icon_fill : icon_stroke}
            alt={`Icon for ${title}`}
          />
          <p
            className={`text-neutral-800 text-sm ${active && "font-semibold"}`}>
            {title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideNavList;
