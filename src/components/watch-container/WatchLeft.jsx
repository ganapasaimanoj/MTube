import React from "react";

const WatchLeft = ({ items }) => {
  const {
    id,
    contentDetails: { duration },
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    statistics: { commentCount, likeCount, viewCount },
  } = items[0];
  return (
    <div className='flex-flex-col'>
      <div className='w-[40rem] h-[24rem] rounded-xl overflow-hidden'>
        <iframe
          className='w-full h-full'
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default WatchLeft;
