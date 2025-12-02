import React from "react";
import { Mail, Linkedin, Send, Facebook } from "lucide-react";

const Contact = () => {
  const contactList = [
    {
      name: "Gmail",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:wetuvexo@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/wetu-vexo-916951191/",
    },
    {
      name: "Telegram",
      icon: <Send className="w-6 h-6" />,
      url: "https://t.me/Wetu_Vexo",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-24 mb-24 font-mono px-4 sm:px-8">
      {/* ===== Main Contact Section ===== */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-5xl gap-6">
        {/* Left Side: Intro */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h1 className="font-bold text-3xl sm:text-4xl">Keep In Touch</h1>
          <p>If you like my work, please reach me on:</p>
          <img
            src="image/contactImage.png"
            alt="Contact"
            className="w-3/4 md:w-1/2 h-auto"
          />
        </div>

        {/* Right Side: Social Buttons */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          {contactList.map((item) => (
            <button
              key={item.name}
              onClick={() => window.open(item.url, "_blank")}
              className="flex flex-row items-center justify-center w-full max-w-xs h-20 sm:h-24 bg-blue-100 hover:bg-blue-200 rounded-xl shadow-md transition gap-3 px-4"
            >
              {item.icon}
              <span className="text-base sm:text-lg font-semibold">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== Anonymous Message Section ===== */}
      <div className="mt-12 text-center w-full max-w-5xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Or Send Me an Anonymous Message
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* NGL Box */}
          <a
            href="https://ngl.link/cmtallezvous1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full sm:w-64 h-32 bg-blue-100 hover:bg-blue-200 rounded-xl shadow-md transition gap-2 p-4"
          >
            <span className="text-lg font-semibold">NGL Link</span>
          </a>

          {/* Facebook Box */}
          <a
            href="https://www.facebook.com/share/p/17L2ysStG3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full sm:w-64 h-32 bg-green-100 hover:bg-green-200 rounded-xl shadow-md transition gap-2 p-4"
          >
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Facebook className="w-6 h-6" />
              <span>Facebook Response</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
