import React from "react";

const OurProject = () => {
    const ProjectVideo = [
        { label: "Action Recognition", linkTo: "https://www.youtube.com/watch?v=Kil6rIbppjo" },
        { label: "Face recognition Door Lock", linkTo: "https://www.youtube.com/watch?v=8N2M0KuJCKE" },
        { label: "Numerical OCR", linkTo: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ" },
        { label: "Shoes counting", linkTo: "https://www.youtube.com/watch?v=AERVFUuGbsY" },
        { label: "Object Detection", linkTo: "https://www.youtube.com/watch?v=YzyN5_p5RP8" }
    ];

    const getThumbnail = (url) => {
        const videoId = url.split("v=")[1]?.split("&")[0];
        return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
    };

    return (
        <div className="min-h-screen px-4 py-10">
            <h1 className="text-3xl font-bold text-center mt-20 mb-[10%]">Our Projects</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center w-full max-w-5xl mx-auto">

                {ProjectVideo.map((video, index) => (
                    <a
                        key={index}
                        href={video.linkTo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-56"
                    >
                        <img
                            src={getThumbnail(video.linkTo)}
                            alt={video.label}
                            className="w-full h-32 object-cover rounded-md shadow hover:scale-105 transition-transform duration-300"
                        />
                        <p className="text-center mt-1 text-sm font-medium">{video.label}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default OurProject;
