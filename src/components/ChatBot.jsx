import React, { useEffect, useRef, useState } from "react";
import { FaRobot } from "react-icons/fa6";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { CompanyInfo } from "../CompanyInfo";
import { IoIosArrowDown } from "react-icons/io";


const ChatBot = ({model, setModel}) => {
  

  const [chatHistory, setchatHistory] = useState([
    {
      hiddenInChat: true,
      role: "model",
      text: CompanyInfo,
    },
  ]);

  const updateHistory = (text, isError = false) => {
    setchatHistory((prev) => [
      ...prev.filter((chat) => chat.text !== "Thinking..."),
      { role: "model", text, isError },
    ]);
  };

  const chatBodyRef = useRef();

  const generateResponse = async (history) => {
    history = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong");
      console.log(data);

      const botResponse = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      updateHistory(botResponse);
    } catch (error) {
      updateHistory(error.message, true);
      console.error(error);
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className={"w-full bg-gray-200 absolute top-0 right-0" + (model ? " h-screen" : " h-0")}>
      <div
        className={
          "chat-bot mx-5 md:mx-10 bg-white  shadow-md rounded-md overflow-hidden my-4  flex flex-col transition-all duration-500 " +
          (model ? " opacity-100  min-h-[95vh]" : " opacity-0 h-0")
        }
      >
        <div className="heading bg-primary p-4 flex items-center justify-start text-white relative">
          <p className="bg-white w-8 h-8 rounded-full text-purple-600 flex items-center justify-center text-xl">
            <FaRobot />
          </p>
          <h1 className="ml-2 text-xl font-bold">Conversational Chatbot</h1>

          <button
            className="absolute right-4 top-4 bg-white text-primary rounded-full p-2"
            onClick={() => setModel(false)}
          >
            <IoIosArrowDown />
          </button>
        </div>
        <div
          ref={chatBodyRef}
          className="chat-box max-h-[80vh] p-4 overflow-y-auto flex-grow"
        >
          <div className="chat-message chat-message flex items-start mb-4 w-full">
            <p className="bg-primary min-w-8 min-h-8 rounded-full text-white flex items-center justify-center text-xl mr-1">
              <FaRobot />
            </p>
            <div className="message-box mr-2 p-2 rounded-md bg-gray-200 rounded-bl-none">
              <p className="text-black">
                Hii there👋 I am a conversational chatbot. Ask me anything.
              </p>
            </div>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage
              key={index}
              role={chat.role}
              text={chat.text}
              isError={chat.isError}
              hiddenInChat={chat.hiddenInChat}
            />
          ))}
        </div>
        <div className="form-input-box px-4 py-2">
          <ChatInput
            chatHistory={chatHistory}
            setchatHistory={setchatHistory}
            generateResponse={generateResponse}
          />
        </div> 
      </div>
      {!model && (
        <div
          onClick={() => setModel(!model)}
          className="z-10 w-12 h-12 bg-primary text-white rounded-full fixed bottom-10 right-10 flex items-center justify-center cursor-pointer"
        >
          <FaRobot />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
