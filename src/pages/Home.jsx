import React, { useState } from "react";
import ChatBot from "../components/ChatBot";
import './Home.css';

const Home = () => {

    const [model, setModel] = useState(false);


  return (
    <>
      { !model && <div className="main">
        {/* <!-- Header Section --> */}
      <header className="bg-purple-700 text-white py-6">
        <div className="container px-4 flex flex-col gap-y-2 md:flex-row justify-between items-center  mx-auto max-w-[95%] md:max-w-[80%]">
          <h1 className="text-2xl md:text-3xl font-bold text-center">Conversational ChatBot</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#use-cases" className="hover:underline">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <!-- Hero Section --> */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-20">
        <div className="container px-4 text-center  mx-auto max-w-[95%] md:max-w-[80%]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Conversational ChatBot</h2>
          <p className="text-lg mb-6">
            Your AI-powered assistant for seamless customer service and instant
            responses.
          </p>
          <button
            onClick={() => setModel(true)}
            className="inline bg-white text-purple-700 py-3 px-6 rounded-lg text-lg font-bold hover:bg-gray-200"
          >
            Start Chatting
          </button>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container  px-4  mx-auto max-w-[95%] md:max-w-[80%]">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Smart Responses</h3>
              <p>
                Provide instant, accurate, and context-aware responses to user
                queries using AI-powered algorithms.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">24/7 Availability</h3>
              <p>
                Be there for your customers anytime, anywhere with a chatbot
                that never sleeps.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Customizable Design</h3>
              <p>
                Easily adapt the chatbot's look, feel, and functionality to
                match your brand identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Use Cases Section --> */}
      <section id="use-cases" className="py-16 bg-purple-100">
        <div className="container px-4  mx-auto max-w-[95%] md:max-w-[80%]">
          <h2 className="text-4xl font-bold text-center mb-12">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Customer Support</h3>
              <p>
                Resolve customer queries efficiently and enhance satisfaction
                with automated responses.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Lead Generation</h3>
              <p>
                Engage potential customers, capture leads, and drive sales
                through interactive conversations.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Appointment Booking</h3>
              <p>
                Streamline scheduling and booking processes with real-time
                availability checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Us Section --> */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center max-w-[95%] md:max-w-[80%]">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We are passionate about delivering innovative chatbot solutions that
            help businesses streamline customer interactions and improve service
            efficiency. With cutting-edge AI technology, we empower companies to
            connect with their customers like never before.
          </p>
        </div>
      </section>

    {/* <!-- FAQ Section --> */}
    <section id="faq" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-[95%] md:max-w-[80%]">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
                <details className="bg-white shadow-lg p-6 rounded-lg">
                    <summary className="text-xl font-bold cursor-pointer">What is YourChatBot?</summary>
                    <p className="mt-2">YourChatBot is an AI-powered chatbot designed to provide instant, accurate, and context-aware responses for customer support, lead generation, and more.</p>
                </details>
                <details className="bg-white shadow-lg p-6 rounded-lg">
                    <summary className="text-xl font-bold cursor-pointer">How can I integrate YourChatBot into my business?</summary>
                    <p className="mt-2">You can integrate YourChatBot into your website or application using our API, which is easy to set up and fully customizable.</p>
                </details>
                <details className="bg-white shadow-lg p-6 rounded-lg">
                    <summary className="text-xl font-bold cursor-pointer">Is YourChatBot available 24/7?</summary>
                    <p className="mt-2">Yes, YourChatBot is available round the clock to assist your customers at any time.</p>
                </details>
                <details className="bg-white shadow-lg p-6 rounded-lg">
                    <summary className="text-xl font-bold cursor-pointer">What happens if YourChatBot cannot answer a query?</summary>
                    <p className="mt-2">When the chatbot cannot provide an answer, it will suggest contacting support or escalating the query to a human representative.</p>
                </details>
            </div>
        </div>
    </section>

    {/* <!-- Footer Section --> */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center  max-w-[95%] md:max-w-[80%]">
          <p>&copy; 2024 YourChatBot. All rights reserved.</p>
        </div>
      </footer>
      </div>}

      <ChatBot model={model} setModel={setModel} />
    </>
  );
};

export default Home;
