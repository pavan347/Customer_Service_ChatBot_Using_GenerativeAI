import React from "react";
import { FaRobot } from "react-icons/fa6";

const ChatMessage = ({ role, text, isError, hiddenInChat }) => {
  return (
    <>
      {!hiddenInChat && (
        <div
          className={
            `chat-message flex items-start mb-4 w-full ` +
            (role === "user" ? "justify-end " : "justify-start  ")
          }
        >
          {role === "user" ? (
            ""
          ) : (
            <p className="bg-primary min-w-8 min-h-8 rounded-full text-white flex items-center justify-center text-xl mr-1">
              <FaRobot />
            </p>
          )}
          <div
            className={
              "message-box mr-2 p-2 rounded-md " +
              (role === "model"
                ? "bg-gray-200 rounded-bl-none"
                : "bg-primary rounded-br-none")
            }
          >
            <p
              className={
                " " +
                (role === "user"
                  ? "text-gray-100"
                  : isError
                  ? " text-red-600"
                  : " text-black")
              }
            >
              {text}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatMessage;
