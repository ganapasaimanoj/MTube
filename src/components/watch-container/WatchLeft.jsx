import React from "react";
import WatchVideoEmbed from "./WatchVideoEmbed";
import WatchVideoDescription from "./WatchVideoDescription";
const WatchLeft = ({ items }) => {
  const { id } = items[0];
  return (
    <div className='flex flex-col gap-4'>
      <WatchVideoEmbed id={id} />
      <WatchVideoDescription items={items[0]} />
    </div>
  );
};

export default WatchLeft;
