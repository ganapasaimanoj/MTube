import { User } from "@phosphor-icons/react";
import {
  ThumbsUp,
  ThumbsDown,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import generateRandomId from "../../utils/helpers/getRandomId";

const Comment = ({ commentData }) => {
  const { name, comment, replies } = commentData;
  const [showReplies, setShowReplies] = useState(false);
  return (
    <div
      className={`flex flex-col
      }`}>
      <div className='profile flex gap-5 '>
        <div className='profile-img flex w-7 h-7 rounded-full items-center justify-center bg-gray-200 p-1'>
          <User size={15} weight='fill' color={"#393939"} />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2'>
            <p className='font-medium leading-[0.8]'>{name}</p>
            <p className='text-sm text-neutral-600'>{comment}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 items-center'>
              <div className='flex items-center justify-center w-[27px] h-[27px] rounded-full p-1 cursor-pointer hover:bg-[#d5e1f7]'>
                <ThumbsUp size={18} weight='regular' color={"#393939"} />
              </div>
              <div className='flex items-center justify-center w-[27px] h-[27px] rounded-full p-1 cursor-pointer hover:bg-[#d5e1f7]'>
                <ThumbsDown size={18} weight='regular' color={"#393939"} />
              </div>
              <div className='flex justify-center w-[27px] h-[27px] rounded-xl px-7 py-1 cursor-pointer hover:bg-[#d5e1f7]'>
                <p className='text-xs font-medium'>Reply</p>
              </div>
            </div>
            {replies.length !== 0 && (
              <div className='flex flex-col gap-3'>
                <div
                  className='flex gap-2 items-center cursor-pointer'
                  onClick={() => setShowReplies(!showReplies)}>
                  {!showReplies ? (
                    <CaretDown size={15} weight='fill' color={"#2f6bd7"} />
                  ) : (
                    <CaretUp size={15} weight='fill' color={"#2f6bd7"} />
                  )}
                  <p className='font-medium text-[15px] text-[#2f6bd7]'>
                    {`${replies.length} ${
                      replies.length === 1 ? "reply" : "replies"
                    }`}
                  </p>
                </div>
                {showReplies && (
                  <div
                    className={`replies flex flex-col gap-3 ${
                      showReplies ? "pl-3 border-l-[1px] border-black/25" : ""
                    }`}>
                    {replies.map((reply, i) => (
                      <Comment key={generateRandomId(i)} commentData={reply} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
