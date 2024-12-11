import React from 'react';
import { FaCode, FaLaptopCode } from "react-icons/fa6";
import { FaMobileAlt, FaBullhorn } from 'react-icons/fa';
import { MdHomeRepairService } from "react-icons/md";
import { TbBrand4Chan } from "react-icons/tb";

const Service = () => {
    return (
        <section class="py-24">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mb-14 text-center">
                    <h2 class="text-4xl text-center font-bold text-gray-900 py-5">
                        Our services
                    </h2>
                    <p class="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                        Developed from scratch for seamless online functionality
                    </p>
                </div>
                <div
                    class="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    <div class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                        <div class="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                            <FaLaptopCode size={28} className='text-indigo-500 group-hover:text-white'/>
                        </div>
                        <h4 class="text-lg font-medium text-gray-900 mb-3 capitalize">
                            Website Development
                        </h4>
                        <p class="text-[12px] font-normal text-gray-400">
                            We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
                        </p>
                    </div>
                    <div class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                        <div class="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                            <FaMobileAlt size={28} className='text-pink-500 group-hover:text-white'/>
                        </div>
                        <h4 class="text-lg font-medium text-gray-900 mb-3 capitalize">
                            Application Development
                        </h4>
                        <p class="text-[12px] font-normal text-gray-400">
                            We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
                        </p>
                    </div>
                    <div class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                        <div class="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                            <MdHomeRepairService size={28} className='text-teal-500 group-hover:text-white'/>
                        </div>
                        <h4 class="text-lg font-medium text-gray-900 mb-3 capitalize">
                            Legal Services
                        </h4>
                        <p class="text-[12px] font-normal text-gray-400">
                            We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
                        </p>
                    </div>
                    <div class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                        <div class="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                            <TbBrand4Chan size={28} className='text-orange-500 group-hover:text-white'/>
                        </div>
                        <h4 class="text-lg font-medium text-gray-900 mb-3 capitalize">
                            Graphics and Branding
                        </h4>
                        <p class="text-[12px] font-normal text-gray-400">
                            We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
                        </p>
                    </div>
                    <div class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                        <div class="bg-yellow-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-yellow-600">
                            <FaBullhorn size={28} className='text-yellow-500 group-hover:text-white'/>
                        </div>
                        <h4 class="text-lg font-medium text-gray-900 mb-3 capitalize">
                            Digital Marketing
                        </h4>
                        <p class="text-[12px] font-normal text-gray-400">
                            We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;