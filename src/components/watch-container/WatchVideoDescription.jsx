import { useEffect, useState } from "react";
import { GET_SUBSCRIBER_API_URL } from "../../utils/constants";
import { ChannelInfo } from "./ChannelInfo";
const WatchVideoDescription = ({ items }) => {
  const [channelData, setChannelData] = useState(null);

  const {
    snippet: { channelId, title },
  } = items;
  useEffect(() => {
    const getSubscriberCount = async () => {
      try {
        const url = GET_SUBSCRIBER_API_URL(channelId);
        const res = await fetch(url);
        const data = await res.json();
        if (!data) return;
        setChannelData(data.items[0]);
      } catch (e) {
        console.error(e);
      }
    };
    if (!channelData) getSubscriberCount();
  }, []);
  if (!channelData) return;

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-xl font-bold text-black/90'>{title}</h2>
      <ChannelInfo channelData={channelData} items={items} />
    </div>
  );
};

export default WatchVideoDescription;
