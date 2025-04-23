import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v3dk0p6",
        "template_t6lts07",
        form.current,
        "ObkuWDFB1SdEqx02_"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setSuccess(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-balck to-gray-900 text-black-800 px-6 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl bg-gray/60 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >

        <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Let's Talk</h2>
          <p className="text-lg mb-6">
            I’d love to collaborate, help you with your ideas, or just have a chat.
          </p>
          <div className="space-y-4 text-sm text-blue-100">
            <p>📬 ajai12346aji@gmail.com</p>
            <p>📍 Kochi Kerala</p>
          </div>
        </div>


        <div className="p-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Send Me a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="peer w-full px-4 py-3 rounded-md bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
             
            </div>
            <div className="relative">
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                required
                className="peer w-full px-4 py-3 rounded-md bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
             
            </div>
            <div className="relative">
              <textarea
                name="message"
                rows="5"
                placeholder="Your message..."
                required
                className="peer w-full px-4 py-3 rounded-md bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
             
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              Send Message
            </button>

            {success && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 mt-4 text-sm font-medium"
              >
                Message sent successfully! ✅
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
