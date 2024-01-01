import {
  DotsThreeOutlineVertical,
  Television,
  DotOutline,
} from "@phosphor-icons/react";
import getTimeformat from "../../utils/custom-hooks/getTimeformat";
import getDuration from "../../utils/custom-hooks/getDuration";
import getViewsCount from "../../utils/custom-hooks/getViewsCount";
import { useSelector } from "react-redux";
const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!info) return;
  const {
    contentDetails: { duration },
    snippet: {
      channelTitle,
      publishedAt,
      title,
      thumbnails: { medium },
    },
    statistics: { viewCount },
  } = info;

  const dateTime = getTimeformat(publishedAt);
  const views = getViewsCount(viewCount);
  const videoDuration = getDuration(duration);
  return (
    <div
      className={`video-card ${
        isMenuOpen ? "max-w-[22rem] " : "max-w-[25rem]"
      } flex flex-col gap-3`}>
      <div
        className={`${
          isMenuOpen ? "w-[22rem] h-[12rem]" : "w-[25rem]  h-[13.5rem]"
        } rounded-xl overflow-hidden relative`}>
        <div className='absolute right-2 bottom-1 rounded-md bg-[#000000d3] px-2 py-[2px] '>
          <p className='text-white text-xs font-medium'>{videoDuration}</p>
        </div>
        <img
          className='w-full h-full object-cover'
          src={medium.url}
          alt={title}
        />
      </div>
      <div className='flex py-2 items-start gap-3'>
        <div className='channel-logo flex items-center justify-center min-w-9 h-9 rounded-full bg-gradient-to-b from-neutral-600 to-black/75'>
          <Television size={22} color={"#fff"} />
        </div>
        <div className='flex w-full flex-col gap-1 items-start'>
          <div className='w-full flex items-start justify-between'>
            <h3 className='title w-[95%] font-medium'>{title}</h3>
            <div className='pt-1'>
              <DotsThreeOutlineVertical size={14} weight='fill' />
            </div>
          </div>
          <div className='info flex flex-col'>
            <p className='text-[15px] text-zinc-500'>{channelTitle}</p>
            <div className='flex  items-center gap-[2px] text-[15px] text-zinc-500'>
              <p>{views}</p>
              <p className='font-extrabold'>
                <DotOutline size={18} weight='fill' />
              </p>
              <p> {dateTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
