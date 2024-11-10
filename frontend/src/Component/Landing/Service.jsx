import React from 'react'
import { FaCode , FaLaptopCode } from "react-icons/fa6";
import {FaMobileAlt , FaBullhorn} from 'react-icons/fa'
import { MdHomeRepairService } from "react-icons/md";
import { TbBrand4Chan } from "react-icons/tb";



const Service = () => {
    return (
        <section class="py-10">
            <div class="mx-auto max-w-7xl">
                <div class="mb-14 text-center">
                    <h2 class="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">Developed from scratch for seamless online functionality</h2>
                    <p class="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">Using technology to make finance simpler, smarter and more rewarding. </p>
                </div>
                <div className='flex gap-5 flex-wrap  justify-center items-center px-3'>
                    <div class="group relative bg-gray-100 rounded-2xl p-4 transition-all duration-500  md:w-[45%] hover:bg-indigo-600 cursor-pointer">
                        <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                            <FaLaptopCode size={22}  className=' text-indigo-500'/>
                        </div>
                        <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Website Developement</h4>
                        <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
                        </p>
                    </div>
                    <div class="group relative bg-gray-100 rounded-2xl p-4 transition-all duration-500  md:w-[45%] hover:bg-indigo-600 cursor-pointer">
                        <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                            <FaMobileAlt size={22}  className=' text-indigo-500'/>
                        </div>
                        <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Application Development</h4>
                        <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
                        </p>
                    </div>
                    <div class="group relative bg-gray-100 rounded-2xl p-4 transition-all duration-500  md:w-[45%] hover:bg-indigo-600 cursor-pointer">
                        <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                        <MdHomeRepairService size={22}  className=' text-indigo-500'/>

                        </div>
                        <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white ">Legal services </h4>
                        <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
                        </p>
                    </div>

                    <div class="group relative bg-gray-100 rounded-2xl p-4 transition-all duration-500  md:w-[45%] hover:bg-indigo-600 cursor-pointer">
                        <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                        <TbBrand4Chan size={22}  className=' text-indigo-500'/>
                        </div>
                        <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Graphics and Branding</h4>
                        <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
                        </p>
                    </div>
                    <div class="group relative bg-gray-100 rounded-2xl p-4 transition-all duration-500  md:w-[45%] hover:bg-indigo-600 cursor-pointer">
                        <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                            <FaBullhorn size={22}  className=' text-indigo-500'/> 
                        </div>
                        <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Digital Marketing</h4>
                        <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
                        </p>
                    </div>
                </div>
                </div>
        </section>

    )
}

export default Service
