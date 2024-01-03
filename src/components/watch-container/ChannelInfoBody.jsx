import getStatsCount from "../../utils/custom-hooks/getStatsCount";
import getTimeFormat from "../../utils/custom-hooks/getTimeformat";

const ChannelInfoBody = ({ description, publishedAt, viewCount }) => {
  const date = getTimeFormat(publishedAt);
  const views = getStatsCount(viewCount, "views");

  const formattedData = description.replace(/\n/g, "<br/>");
  const formattedResult = {
    dangerouslySetInnerHTML: { __html: formattedData },
  };

  return (
    <div className='flex flex-col px-3 py-5 bg-[#605b5b17] rounded-lg'>
      <div className='flex gap-3'>
        <p className='font-semibold'>{views}</p>
        <p className='font-semibold'>{date}</p>
      </div>
      <p {...formattedResult} />
    </div>
  );
};

export default ChannelInfoBody;
