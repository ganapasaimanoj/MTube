import SideNavList from "./SideNavList";

const SideNavCatagories = ({ heading, layout }) => {
  return (
    <div className='first:pb-3 py-3 last:border-0 border-b border-gray-400'>
      {heading && (
        <div className='heading px-3 mb-3 font-semibold text-lg text-neutral-800'>
          {heading}
        </div>
      )}
      {layout.map((nav) => (
        <SideNavList key={nav.id} {...nav} />
      ))}
    </div>
  );
};
export default SideNavCatagories;
