import React from "react";

const Home = () => {
  const groupMember = [
    { label: "AI Engineer", Name: "Wetu Vexo", path: "/image/wetuLinkedIn2.jpg" },
    { label: "IoT Engineer", Name: "Muhammad Tumio", path: "/image/muhammad-Tumio.png" },
    { label: "Front End Developer", Name: "BellaTu Lopez", path: "/image/BellaTu.jpg" },
    { label: "Backend Developer", Name: "TuTu Mamadou", path: "/image/TuTuMamadou.jpg" },
    { label: "Data Scientist", Name: "Shivtu Mei Jing", path: "/image/TuMeiJing.png" },
    { label: "Software Developer", Name: "Steve Tu", path: "/image/SteveTu.png" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12 mt-24">
      {/* ===== Intro Section ===== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl w-full">
        <img 
          src="/image/wetuLinkedIn2.jpg" 
          alt="Wetu Vexo" 
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full shadow-lg mb-6 md:mb-0"
        />
        <div className="font-mono text-center md:text-left md:ml-8 flex-1 px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hello There</h1>
          <p className="text-base sm:text-lg text-justify">
            My name is <span className="font-semibold">Wetu Vexo</span>, and I’m an AI Engineer specializing in Computer Vision and IoT.
            My work focuses on developing AI and IoT solutions for industrial applications. I have over three years of experience in this field, gained from both international and local projects.
            If you’re interested, please click on <span className="text-blue-500 font-semibold">Projects</span> to explore my work.
          </p>
        </div>
      </div>

      {/* ===== Team Section ===== */}
      <div className="flex flex-col items-center justify-center my-16 w-full">
        <h1 className="text-3xl sm:text-4xl font-mono mb-8 text-blue-500">Our Team</h1>

        <div className="shadow-xl w-full max-w-6xl h-auto p-6 sm:p-10 flex items-center justify-center rounded-2xl bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {groupMember.map((user, index) => (
              <div key={index} className="text-center flex flex-col items-center transition transform hover:scale-105 px-2">
                <p className="font-bold font-mono mb-2">{user.label}</p>
                <img
                  src={user.path}
                  alt={user.Name}
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-md shadow-lg mb-2"
                />
                <p className="font-mono font-semibold">{user.Name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
