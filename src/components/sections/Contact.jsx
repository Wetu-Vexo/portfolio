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
    <div className="flex flex-col items-center justify-center min-h-screen mt-[10%] font-mono mb-[20%]">
      {/* ===== Main Contact Section ===== */}
      <div className="flex bg-white shadow-lg rounded-2xl p-10 w-[70%] md:w-[60%] h-auto">
        
        {/* Left Side: Intro */}
        <div className="p-1 text-justify flex-1">
          <h1 className="font-bold text-4xl mb-3">Keep In Touch</h1>
          <p className="mb-4">If you like my work, please reach me on:</p>
          <img
            src="src/image/contactImage.png"
            alt="Contact"
            className="w-[60%] h-auto"
          />
        </div>

        {/* Right Side: Social Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 flex-1">
          {contactList.map((item) => (
            <button
              key={item.name}
              onClick={() => window.open(item.url, "_blank")}
              className="flex flex-row items-center justify-center w-64 h-24 bg-blue-100 hover:bg-blue-200 rounded-xl shadow-md transition gap-2"
            >
              {item.icon}
              <span className="text-sm mt-2">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== Anonymous Message Section ===== */}
      <div className="mt-[10%] text-center">
        <h1 className="text-3xl font-bold mb-6">
          Or Send Me an Anonymous Message
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* NGL Box */}
          <div className="flex flex-col items-center justify-center w-64 h-32 bg-blue-100 hover:bg-blue-200 rounded-xl shadow-md transition gap-2">
            <a
              href="https://ngl.link/cmtallezvous1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold"
            >
              NGL Link
            </a>
          </div>

          {/* Facebook Box */}
          <div className="flex flex-col items-center justify-center w-64 h-32 bg-green-100 hover:bg-green-200 rounded-xl shadow-md transition gap-2">
            <a
              href="https://www.facebook.com/share/p/17L2ysStG3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Facebook className="w-6 h-6" />
              <span>Facebook Response</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
