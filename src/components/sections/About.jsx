import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12 mt-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl w-full">
        {/* Profile Image */}
        <img
          src="/image/wetuLinkedIn2.jpg"
          alt="Wetu Vexo"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full shadow-lg mb-6 md:mb-0"
        />

        {/* Text Section */}
        <div className="font-mono text-center md:text-left flex-1 px-2 sm:px-4">
          <p className="text-base sm:text-lg text-justify">
            <span className="font-semibold">Wetu Vexo</span> graduated with a Bachelor's degree in Electrical and Automation from the Institute of Technology of Cambodia.  
            He then completed his Master's degree in AI and IoT through a joint program between <span className="font-semibold">Tokyo Tech University</span> and <span className="font-semibold">Thammasat University</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
