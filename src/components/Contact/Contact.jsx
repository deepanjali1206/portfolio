import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axbtt7a", 
        "template_1ziboq3", 
        form.current,
        "Rz7W9pVF0HdDryNNL" 
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
    
      <ToastContainer />

    
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Let’s Connect</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Looking for internships, projects, or opportunities to learn and contribute? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-12">
        <div className="flex items-center space-x-4 bg-[#0d081f] p-4 rounded-lg border border-gray-700">
          <FaEnvelope className="text-purple-500 text-2xl" />
          <a
            href="mailto:deepanjalisingh0612@gmail.com"
            className="text-gray-300 hover:text-purple-400"
          >
            deepanjalisingh0612@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4 bg-[#0d081f] p-4 rounded-lg border border-gray-700">
          <FaLinkedin className="text-purple-500 text-2xl" />
          <a
            href="https://www.linkedin.com/in/deepanjali-singh-a6086728b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400"
          >
            linkedin.com/in/deepanjali-singh
          </a>
        </div>
        <div className="flex items-center space-x-4 bg-[#0d081f] p-4 rounded-lg border border-gray-700">
          <FaGithub className="text-purple-500 text-2xl" />
          <a
            href="https://github.com/deepanjali1206"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400"
          >
            github.com/deepanjali1206
          </a>
        </div>
        <div className="flex items-center space-x-4 bg-[#0d081f] p-4 rounded-lg border border-gray-700">
          <FaMapMarkerAlt className="text-purple-500 text-2xl" />
          <span className="text-gray-300">Renukoot Sonebhadra ,India</span>
        </div>
      </div>

      
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Send Me a Message <span className="ml-1">✉️</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          
         
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
