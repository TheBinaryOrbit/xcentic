"use client"
import { FaMobileAlt, FaLaptopCode, FaCloud, FaCogs, FaSync, FaGlobe } from "react-icons/fa";

const services = [
  {
    title: "Mobile App Development",
    description:
      "We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.",
    icon: <FaMobileAlt size={36} className="text-blue-400" />,
  },
  {
    title: "Software Development",
    description:
      "From custom development to system upgrades, we craft software that enhances operational efficiency and drives innovation.",
    icon: <FaLaptopCode size={36} className="text-green-400" />,
  },
  {
    title: "Digital Transformation",
    description:
      "We help businesses stay competitive by transforming legacy systems with modern, digital-first solutions that drive growth.",
    icon: <FaGlobe size={36} className="text-purple-400" />,
  },
  {
    title: "IT Consulting",
    description:
      "We provide expert IT consulting services to help your organization navigate complex technology decisions and align IT strategies with business objectives.",
    icon: <FaCogs size={36} className="text-red-400" />,
  },
  {
    title: "DevOps",
    description:
      "Our DevOps services streamline development and operations to accelerate your project timelines and improve the overall product quality.",
    icon: <FaSync size={36} className="text-pink-400" />,
  },
  {
    title: "Cloud Managed Services",
    description:
      "We manage your cloud infrastructure end-to-end, ensuring it is optimized, secure, and cost-effective; allowing you to focus on strategic business activities.",
    icon: <FaCloud size={36} className="text-indigo-400" />,
  },
];

const Domains = () => {
  return (
    <div className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-start items-center h-fit">
          {/* <p className="flex justify-start items-center border-[1px] border-slate-300 px-3 rounded-lg text-xs  gap-1 mb-4 py-1 text-slate-700 font-semibold">
            <FiUser size={12} /><span className="text-xs -translate-y-[1px]  font-semibold"></span>
          </p> */}
        </div>
        <h1 className="text-5xl/tight  font-bold  capitalize mb-4">Our Services</h1>
        <p className="text-md text-start text-slate-500  max-w-3xl mb-10">We prioritize delivering outstanding solutions, comprehensive training, and seamless execution
        to ensure success.</p>
        <div className="grid grid-cols-3 gap-7">
          {services.map((service, index) => (
            <div key={index} className="w-full h-[220px] rounded-2xl shadow-reviwcard p-5 flex flex-col gap-3 mb-10 ">
              <div className="rounded-lg pt-2 pl-2 cursor-pointer transition-all duration-500 group-hover:bg-indigo-600 mb-5">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900  capitalize">{service.title}</h4>
              <p className="text-sm font-normal text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Domains;
