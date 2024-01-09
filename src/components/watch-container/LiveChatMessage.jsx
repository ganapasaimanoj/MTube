import React from "react";
import { User } from "@phosphor-icons/react";
const LiveChatMessage = ({ name, message }) => {
  return (
    <div className='flex gap-5 hover:bg-gray-100 px-4 py-1'>
      <div className='flex gap-4 items-start'>
        <div className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-600 p-1'>
          <User weight='fill' size={16} color='#fff' />
        </div>
        <div className='flex gap-2'>
          <p className='name text-sm text-zinc-500'>{name}</p>
          <p className='comment text-sm text-black'>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveChatMessage;
