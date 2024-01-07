import { useState } from "react";
import getStatsCount from "../../utils/custom-hooks/getStatsCount";
import getTextTrim from "../../utils/custom-hooks/getTextTrim";
import getTimeFormat from "../../utils/custom-hooks/getTimeformat";
import CommentsContainer from "./CommentsContainer";
import { COMMENTS } from "../../utils/constants";
const ChannelInfoBody = ({ description, publishedAt, viewCount }) => {
  const [truncText, setTruncText] = useState(true);
  const date = getTimeFormat(publishedAt);
  const views = getStatsCount(viewCount, "views");
  const plainTextDescription = description.replace(/\n/g, "<br/>");

  const formattedResult = {
    dangerouslySetInnerHTML: {
      __html: truncText
        ? getTextTrim(plainTextDescription, 0, 170)
        : plainTextDescription,
    },
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='description flex flex-col px-3 py-5 bg-[#605b5b17] rounded-lg'>
        <div className='flex gap-3'>
          <p className='font-semibold'>{views}</p>
          <p className='font-semibold'>{date}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <p className='text-sm' {...formattedResult} />
          <span
            onClick={() => setTruncText(!truncText)}
            className='font-semibold text-sm text-black/90 cursor-pointer'>
            {truncText ? "More" : "Show less"}
          </span>
        </div>
      </div>
      <CommentsContainer comments={COMMENTS} />
    </div>
  );
};

export default ChannelInfoBody;
