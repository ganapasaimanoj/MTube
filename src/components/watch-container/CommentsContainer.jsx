import { User } from "@phosphor-icons/react";
import generateRandomId from "../../utils/custom-hooks/getRandomId";
import Comment from "./Comment";
const CommentsContainer = ({ comments }) => {
  return (
    <div className='comments-container pr-9'>
      <h2 className='font-semibold text-xl mb-4'>{comments.length} Comments</h2>
      <section className='comment flex flex-col gap-8'>
        <div className='flex gap-5 '>
          <div className='profile-img flex w-7 h-7 rounded-full items-center justify-center bg-[#6d6b6b] p-1'>
            <User size={15} weight='bold' color={"#fff"} />
          </div>
          <input
            type='text'
            placeholder='Add a comment'
            className='w-full border-b focus:outline-none focus:border-b-2 focus:border-b-blue-700/85'
          />
        </div>
        <div className='comment flex flex-col gap-6'>
          {comments.map((comment, i) => (
            <Comment key={generateRandomId(i)} commentData={comment} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommentsContainer;
