import React from "react";
import profileImage from "../../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";

function About() {
  return (
    <div
      id="about"
      className="py-4 font-sans flex flex-col-reverse md:flex-row justify-between items-center px-[7vw] md:px-[7vw] lg:px-[12vw]"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
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
            words={[
              "Fullstack Developer",
              "App Developer",
              "UI/UX Designer",
              "Coder",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
        <p className="text-base sm:text-lg text-gray-400 mb-10 mt-4 leading-relaxed">
          I am a full-stack developer with over 2 years of experience in
          building scalable web applications. Skilled in both front-end and
          back-end development, I specialize in the MERN stack and other modern
          technologies to create seamless user experiences and efficient
          solutions.
        </p>
      </div>
      {/* Right Side */}
      <div>
        <img
          src={profileImage}
          alt="Mohammad Sahil"
          className="w-full h-full md:h-120 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
        />
      </div>
    </div>
  );
}

export default About;
