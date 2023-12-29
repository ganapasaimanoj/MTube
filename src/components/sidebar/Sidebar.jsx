import { SIDE_NAV } from "../../utils/constants";
import SideNavCatagories from "./SideNavCategories";
const Sidebar = () => {
  return (
    <div className='w-[17%] px-3 flex flex-col'>
      {SIDE_NAV.map((section, i) => (
        <SideNavCatagories {...section} key={section.heading || i} />
      ))}
    </div>
  );
};

export default Sidebar;
