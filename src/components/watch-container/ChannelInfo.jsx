import ChannelInfoBody from "./ChannelInfoBody";
import ChannelInfoHeader from "./ChannelInfoHeader";
export const ChannelInfo = ({ channelData, items }) => {
  const {
    snippet: {
      thumbnails: {
        medium: { url: channelImgURL },
      },
    },
    statistics: { subscriberCount },
  } = channelData;

  const {
    snippet: { description, publishedAt, channelTitle },
    statistics: { likeCount, viewCount },
  } = items;

  return (
    <div className='flex flex-col gap-4'>
      <ChannelInfoHeader
        title={channelTitle}
        channelImgURL={channelImgURL}
        subscriberCount={subscriberCount}
        likeCount={likeCount}
      />
      <ChannelInfoBody
        description={description}
        publishedAt={publishedAt}
        viewCount={viewCount}
      />
    </div>
  );
};
