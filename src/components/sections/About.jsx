import React from "react";

const About = ()=>{
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 mt-[15%]">
            <div className="flex flex-col items-center justify-center gap-8 max-w-5xl w-full">
                <img 
                    src="src/image/wetuLinkedIn2.jpg" 
                    alt="Wetu Vexo" 
                    className="w-64 h-64 object-cover rounded-full shrink-0"
                />
                <div className="font-mono text-center md:text-left ml-[10%]">
                    <p className="text-xl mt-2 text-justify">
                    Wetu Vexo graduate his bacholor degree of electrical and automation from Institute of Technology of Cambodia
                    He gradudate his engineer master degree in AI and IoT from a joint Program between tokyo tech University and
                    Thammasat University.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}


export default About;