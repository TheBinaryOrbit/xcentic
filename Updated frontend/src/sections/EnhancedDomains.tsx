'use client';
import React from "react";
import { FaRobot, FaMagic, FaChartBar, FaCloud, FaLock, FaDatabase, FaCubes, FaVrCardboard, FaNetworkWired } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const items = [
  {
    title: "Artificial Intelligence",
    description:
      "We leverage AI to craft intelligent solutions that streamline operations and enhance decision-making capabilities.",
    icon: <FaRobot />,
  },
  {
    title: "Generative AI",
    description:
      "We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.",
    icon: <FaMagic />,
  },
  {
    title: "Machine Learning",
    description:
      "We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.",
    icon: <FaChartBar />,
  },
  {
    title: "Data Analytics",
    description:
      "Our data analytics solutions enable organizations to extract actionable insights from complex datasets.",
    icon: <FaDatabase />,
  },
  {
    title: "Cloud Computing",
    description:
      "We help businesses transition to the cloud, ensuring scalability, security, and cost-efficiency.",
    icon: <FaCloud />,
  },
  {
    title: "Cybersecurity",
    description:
      "Our cybersecurity solutions protect your digital assets from evolving threats.",
    icon: <FaLock />,
  },
  {
    title: "IoT Solutions",
    description:
      "We develop IoT solutions that connect devices and streamline operations for smart ecosystems.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Blockchain",
    description:
      "Our blockchain solutions ensure transparency, security, and efficiency in digital transactions.",
    icon: <FaCubes />,
  },
  {
    title: "AR/VR",
    description:
      "We create immersive AR/VR experiences that transform how users interact with digital environments.",
    icon: <FaVrCardboard />,
  },
];

const Enhanced: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black py-10">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-6 md:px-0">
        {/* Left side with image-like box */}
        <div className="md:w-1/2 w-full h-auto md:h-[100vh] flex flex-col items-center justify-center sticky top-0">
          <h1 className="text-white text-4xl  font-bold mb-10">
            We Create New Solutions And Transform Existing Ones With Technologies That Beat Industry-Best Timelines
          </h1>
          
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 md:p-8 rounded-xl shadow-lg w-[80%] mr-auto text-center">
            <div className="rounded-lg pt-2 pl-2 cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
              <FaPaperPlane size={36} className="text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white text-left capitalize mb-3">Fuel Your Digital-First Idea</h4>
            <p className="text-lg font-normal text-gray-200 text-left">With 1600+ Transformation Experts</p>
            <button className="text-sm mt-4 px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white  font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl float-start rounded-2xl">
              Innovate With Us
            </button>
          </div>
          
        </div>
        {/* Right side scrollable */}
        <div className="md:w-1/2 w-full relative overflow-y-scroll h-[100vh] scrollbar">
          <div className="w-full flex flex-col">
            {items.map((item, index) => (
              <div
                key={index}
                className="h-[40vh] md:h-[30vh] flex flex-col justify-center p-6 md:p-8 border-b border-gray-700"
              >
                <div className="text-2xl md:text-3xl mb-2 text-white">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-1 text-white">{item.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhanced;
