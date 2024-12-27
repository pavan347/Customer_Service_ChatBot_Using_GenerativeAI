import React, { useRef } from "react";
import { FiSend } from "react-icons/fi";

const ChatInput = ({ chatHistory, setchatHistory, generateResponse }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) {
      return;
    }
    inputRef.current.value = "";
    setchatHistory((prev) => [...prev, { role: "user", text: userMessage }]);
    setTimeout(() => {
      setchatHistory((prev) => [
        ...prev,
        { role: "model", text: "Thinking..." },
      ]);

      generateResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Using the details of Pixel Perfection Studio (a photography digital studio) provided, answer the user's query as accurately as possible. The details include information about the studio's heading, tagline, about section, services, products, contact info, location, and social media links.

    If the answer to the user's question is not covered in the provided details:

    1. Apologize politely for the lack of information.
    2. Suggest reaching out directly to the studio via the provided contact information (phone, email, or website).
    3. Offer to forward the query to the appropriate team for further assistance.
    
    ${userMessage}`,
        },
      ]);
    }, 600);
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="flex items-center justify-between"
    >
      <input
        type="text"
        ref={inputRef}
        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-purple-600"
        placeholder="Type a text..."
        required
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-md ml-2"
      >
        <FiSend />
      </button>
    </form>
  );
};

export default ChatInput;
