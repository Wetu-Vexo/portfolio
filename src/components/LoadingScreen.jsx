import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Welcome />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        // wait a bit, then signal completion
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white text-gray-900 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
