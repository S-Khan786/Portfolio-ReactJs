import React from "react";
import profileImage from "../../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <div
      id="about"
      className="py-4 mt-4 md:mt-10 font-sans flex flex-col-reverse md:flex-row justify-between items-center px-[7vw] md:px-[7vw] lg:px-[12vw]"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 mt-8 md:mt-4 text-center md:text-left">
        <div className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-2 leading-tight">
          Hi, I am
        </div>
        <div className="text-3xl sm:text-5xl md:text-6xl text-white font-bold mb-2 leading-tight">
          Mohammad Sahil
        </div>
        <span className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-2 leading-tight">
          I am a{" "}
        </span>
        <span className="text-[#8245ec] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          <Typewriter
            words={["Frontend Developer", "Fullstack Developer", "Coder"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
        <p className="text-base sm:text-lg text-gray-400 mb-10 mt-4 leading-relaxed">
          I am a Frontend Developer with over 8 months of experience in building
          responsive and user-friendly web interfaces. I specialize in creating
          seamless user experiences using modern technologies like React.js,
          Tailwind CSS, JavaScript, and TypeScript. While my core strength lies
          in frontend development, I also have hands-on knowledge of the MERN
          stack, allowing me to collaborate effectively with backend teams and
          contribute to full-stack solutions when needed.
        </p>
        <a
          href="https://github.com/S-Khan786"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transform transition-transform duration-300 ease-in-out hover:scale-110"
          style={{
            background: "linear-gradient(90deg, #8245ec, #a855f7)",
            boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
          }}
        >
          View Github
        </a>
      </div>
      {/* Right Side */}
      <div>
        <Tilt
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <img
            src={profileImage}
            alt="Mohammad Sahil"
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
        </Tilt>
      </div>
    </div>
  );
}

export default About;
