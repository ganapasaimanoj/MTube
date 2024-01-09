import { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import {
  getRandomMessages,
  getRandomName,
} from "../../utils/helpers/getRandomData";
import getRandomId from "../../utils/helpers/getRandomId";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../../redux/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.messages);
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    const removeIntervals = (...fn) => {
      fn.forEach((interval) => clearInterval(interval));
    };

    const insertMessages = setInterval(() => {
      const name = getRandomName();
      const message = getRandomMessages();
      dispatch(addMessages({ name: name, message: message }));
    }, 2000);
    return () => {
      removeIntervals(insertMessages);
    };
  }, []);

  return (
    <section className='chat-container rounded-md border-[1.5px]  flex flex-col'>
      <header className='chat-header px-4 py-2 border-b-[1.5px]'>
        <h3 className='text-lg font-normal'>Live chat</h3>
      </header>
      <main className='chat-body flex flex-col-reverse pb-4 h-96 overflow-y-auto'>
        {chats.map((chat, i) => (
          <LiveChatMessage key={getRandomId(i)} {...chat} />
        ))}
      </main>
      <footer className='chat-footer px-4 pb-2 border-t-[1.5px] flex flex-col '>
        <form
          className='flex gap-3 border-b py-2'
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessages({ name: "Praneep..", message: chatInput }));
            setChatInput("");
          }}>
          <input
            type='text'
            placeholder='Type your message'
            className='px-2 w-full py-1'
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <button className='bg-black/90 text-white text-sm px-3 rounded-md hover:bg-black/95'>
            Submit
          </button>
        </form>
        <h3 className='text-base font-medium text-center cursor-pointer py-2 text-black/85 hover:bg-gray-100 hover:text-black/95'>
          Hide chat
        </h3>
      </footer>
    </section>
  );
};

export default LiveChat;
