import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // console.log("isScrolled:", isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`py-4 fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[12vw] shadow-md`}
      style={
        isScrolled
          ? {
              backgroundColor: "rgba(5, 4, 20, 0.5)",
              backdropFilter: "blur(8px)",
            }
          : {}
      }
    >
      <div className="flex text-white justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer pt-4">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Mohammad</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Sahil</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="text-gray-300 hidden md:flex space-x-8 pt-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)} className="cursor-pointer">
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 pt-4">
          <a target="_blank" className="text-gray-300 hover:text-[#8245ec] cursor-pointer transition-transform transform hover:scale-110" href="https://github.com/S-Khan786">
            <FaGithub size={24} />
          </a>
          <a target="_blank" className="text-gray-300 hover:text-[#8245ec] cursor-pointer transition-transform transform hover:scale-110" href="https://www.linkedin.com/in/mohammad-sahil-a23696200/">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden pt-4">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-15 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#4e4d5c]/80 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 pt-4 pb-2 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)} className="cursor-pointer">
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                <FaGithub size={24} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
