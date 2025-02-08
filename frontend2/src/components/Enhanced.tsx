'use client';
import React from "react";
import { FaRobot, FaMagic, FaChartBar, FaCloud, FaLock, FaDatabase, FaCubes, FaVrCardboard, FaNetworkWired, FaPaperPlane } from "react-icons/fa";

const items = [
  { title: "Artificial Intelligence", description: "We leverage AI to craft intelligent solutions that streamline operations and enhance decision-making capabilities.", icon: <FaRobot /> },
  { title: "Generative AI", description: "We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.", icon: <FaMagic /> },
  { title: "Machine Learning", description: "We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.", icon: <FaChartBar /> },
  { title: "Data Analytics", description: "Our data analytics solutions enable organizations to extract actionable insights from complex datasets.", icon: <FaDatabase /> },
  { title: "Cloud Computing", description: "We help businesses transition to the cloud, ensuring scalability, security, and cost-efficiency.", icon: <FaCloud /> },
  { title: "Cybersecurity", description: "Our cybersecurity solutions protect your digital assets from evolving threats.", icon: <FaLock /> },
  { title: "IoT Solutions", description: "We develop IoT solutions that connect devices and streamline operations for smart ecosystems.", icon: <FaNetworkWired /> },
  { title: "Blockchain", description: "Our blockchain solutions ensure transparency, security, and efficiency in digital transactions.", icon: <FaCubes /> },
  { title: "AR/VR", description: "We create immersive AR/VR experiences that transform how users interact with digital environments.", icon: <FaVrCardboard /> },
];

const Enhanced: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-10">
            We Create New Solutions And Transform Existing Ones With Technologies That Beat Industry-Best Timelines
          </h1>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-xl shadow-lg w-full md:w-[80%] mx-auto md:mx-0 text-left">
            <div className="flex items-center space-x-4">
              <FaPaperPlane size={36} className="text-white mb-3" />

            </div>
            <div>
              <h4 className="text-2xl font-bold text-white capitalize">Fuel Your Digital-First Idea</h4>
              <p className="text-gray-200 text-sm sm:text-base">With 1600+ Transformation Experts</p>
            </div>
            <button className="mt-4 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-2xl">
              Innovate With Us
            </button>
          </div>
        </div>

        {/* Right Section - Scrollable List */}
        <div className="md:w-1/2 w-full max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
          <div className="flex flex-col gap-6">
            {items.map((item, index) => (
              <div key={index} className="p-6  shadow-md border-b border-gray-700">
                <div className="text-3xl text-white mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhanced;
