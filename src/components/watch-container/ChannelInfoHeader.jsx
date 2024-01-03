import {
  Television,
  ThumbsUp,
  ThumbsDown,
  DotsThreeOutline,
  ShareFat,
} from "@phosphor-icons/react";
import getStatsCount from "../../utils/custom-hooks/getStatsCount";

const ChannelInfoHeader = ({
  title,
  channelImgURL,
  subscriberCount,
  likeCount,
}) => {
  const subscribers = getStatsCount(subscriberCount, "subscribers");
  const likes = getStatsCount(likeCount);

  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-6 items-center'>
        <div className='flex gap-3'>
          <div
            className={`channel-logo flex items-center justify-center max-w-11 rounded-full overflow-hidden ${
              !channelImgURL && "bg-gradient-to-b from-neutral-600 to-black/75"
            }`}>
            {channelImgURL ? (
              <img
                className='w-full h-full object-cover'
                src={channelImgURL}
                alt={title}
              />
            ) : (
              <Television size={22} color={"#fff"} />
            )}
          </div>
          <div className='flex flex-col'>
            <h3 className='font-medium text-base text-black/90'>{title}</h3>
            <p className='text-sm text-black/70'>{subscribers}</p>
          </div>
        </div>
        <button className='bg-black/95 text-white rounded-3xl px-5 h-9 hover:bg-black/80'>
          Subscribe
        </button>
      </div>
      <div className='flex gap-2'>
        <div className='flex bg-[#605b5b17] items-center h-9 rounded-3xl'>
          <button className='flex gap-2 hover:bg-[#817f7f2d] px-4 items-center h-9 rounded-l-3xl'>
            <ThumbsUp size={24} weight='light' />
            <p className='text-sm text-black/80 font-semibold'>{likes}</p>
          </button>
          <div className='h-6 px-[0.9px] bg-neutral-400'></div>
          <button className='flex gap-2 hover:bg-[#817f7f2d] px-4 items-center h-9 rounded-r-3xl'>
            <ThumbsDown size={24} weight='light' />
          </button>
        </div>
        <button className='flex gap-2 bg-[#605b5b17] hover:bg-[#817f7f2d]  px-4 items-center rounded-3xl h-9 '>
          <ShareFat size={24} weight='light' />
          <p className=' text-black/80 font-semibold'>Share</p>
        </button>
        <button className='flex bg-[#605b5b17] hover:bg-[#817f7f2d] px-2 items-center rounded-full w-9 h-9 '>
          <DotsThreeOutline size={24} weight='fill' color='rgba(0,0,0,0.7)' />
        </button>
      </div>
    </div>
  );
};

export default ChannelInfoHeader;
