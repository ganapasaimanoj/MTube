import React from "react";

const WatchVideoEmbed = ({ id }) => {
  return (
    <div className='w-[43rem] h-[24rem] rounded-xl overflow-hidden'>
      <iframe
        className='w-full h-full object-cover'
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen></iframe>
    </div>
  );
};

export default WatchVideoEmbed;
