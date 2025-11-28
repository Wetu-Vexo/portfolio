import React from "react";

// Import images
import wetuImage from "./image/wetuLinkedIn2.jpg";
import muhammadImage from "./image/muhammad-Tumio.png";
import bellaImage from "./image/BellaTu.jpg";
import tutuImage from "./image/TuTuMamadou.jpg";
import shivtuImage from "./image/TuMeiJing.png";
import steveImage from "./image/SteveTu.png";
const Home = () => {
    const groupMember = [
        { label: "AI Engineer", Name: "Wetu Vexo", path: wetuImage },
        { label: "IoT Engineer", Name: "Muhammad Tumio", path: muhammadImage },
        { label: "Front End Developer", Name: "BellaTu Lopez", path: bellaImage },
        { label: "Backend Developer", Name: "TuTu Mamadou", path: tutuImage },
        { label: "Data Scientist", Name: "Shivtu Mei Jing", path: shivtuImage },
        { label: "Software Developer", Name: "Steve Tu", path: steveImage }
    ];
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 mt-[15%]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl w-full">
                <img 
                    src="src/image/wetuLinkedIn2.jpg" 
                    alt="Wetu Vexo" 
                    className="w-64 h-64 object-cover rounded-full shrink-0"
                />
                <div className="font-mono text-center md:text-left ml-[10%]">
                    <h1 className="text-3xl">Hello There</h1>
                    <p className="text-xl mt-2 text-justify">
                    My name is Wetu Vexo, and I’m an AI engineer specializing in Computer Vision and IoT.
                    My work focuses on developing AI and IoT solutions for industrial applications.
                    I have over three years of experience in this field, gained from both international and local projects.
                    If you’re interested, please click on Projects to explore my work.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center my-[10%] w-full">
                <h1 className="text-3xl font-mono mb-6 text-blue-500">Our Team</h1>
       
                <div className="shadow-xl w-[80%] md:w-[60%] h-auto p-10 flex items-center justify-center rounded-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center w-full max-w-5xl mx-auto">
                        {groupMember.map((user, index) => (
                            <div key={index} className="text-center justify-items-center m-10">
                                <p className="font-bold font-mono ">{user.label}</p>
                                <img
                                    src={user.path}
                                    alt={user.Name}
                                    className="w-full h-32 object-cover rounded-md shadow m-5"
                                />
                                <p className="font-mono">
                                    {user.Name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
