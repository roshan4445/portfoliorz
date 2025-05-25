

import { useState,useEffect} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);   }, []);// Cleanup the event listener on component unmount
  
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4 md:px-10">
        <h1 className="text-2xl font-bold text-gray-800">Roshan.</h1>

        <ul className="hidden md:flex space-x-6 text-lg font-semibold text-gray-700">
         
           <li className="group relative cursor-pointer">
            <a href="#Home"> <span className="text-gray-800 text-lg font-semibold group-hover:text-blue-500 transition">Home</span></a>
   
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative cursor-pointer">
   
          <a href="#Aboutme"><span className="text-gray-800 text-lg font-semibold group-hover:text-blue-500 transition">About Me</span></a>    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative cursor-pointer">
   <a href="#Skills"><span className="text-gray-800 text-lg font-semibold group-hover:text-blue-500 transition">Skills</span></a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative cursor-pointer">
   <a href="#Project"><span className="text-gray-800 text-lg font-semibold group-hover:text-blue-500 transition">Projects</span></a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative cursor-pointer">
  <a href="#Contact"><span className="text-gray-800 text-lg font-semibold group-hover:text-blue-500 transition">Contact Me</span></a> 
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
         
        
        </ul>
        <div className="md:hidden text-2xl text-gray-800 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>


      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white text-lg font-semibold text-gray-700 space-y-4 py-4 shadow-md">
           <li className="group relative cursor-pointer">
   <span className="text-gray-800 text-lg font-semibold group-hover:text-blue-500 transition">Home</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative cursor-pointer">
   <span className="text-gray-800 text-lg font-semibold group-hover:text-blue-500 transition">About Me</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative cursor-pointer">
   <span className="text-gray-800 text-lg font-semibold group-hover:text-blue-500 transition">Projects</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative cursor-pointer">
   <span className="text-gray-800 text-lg font-semibold group-hover:text-blue-500 transition">Contact Me</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
         
        </ul>
      )}
    </header>
  );
};

export default Header;


