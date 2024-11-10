import React from 'react'
import ani from '../../assets/Animation.json'
import Lottie from 'lottie-react'

const Home2 = () => {
    return (
        <section class="sm:fit sm:h-[80vh] pt-0  lg:px-8 mt-5">
            <div
                class="rounded-2xl h-full bg-indigo-50 py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl flex justify-center items-center">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
                    <div class="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
                        <div class="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
                            {/* <div class="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
                                    <span class="bg-indigo-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">#1</span>
                                    Investment app
                                </div> */}
                            <h1 class="py-8 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px]">
                                Empower Your Product with <span class="text-indigo-600">Xcentic's Expertise</span>
                            </h1>
                            <p class=" text-gray-500 text-lg text-center lg:text-left">
                                Transform your ideas into engaging digital experiences. Our team is here to build high-performance, scalable web applications tailored to your product's unique needs.
                            </p>
                            <div
                                class="relative p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-transparent md:bg-white transition-all duration-500 hover:border-indigo-600 focus-within:border-indigo-600">
                                <input type="text" name="email" placeholder="Enter email to get started"
                                    class="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full" />
                                <button
                                    class="bg-indigo-600 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-indigo-700 cursor-pointer transition-all duration-500 md:w-fit w-full">Get
                                    Started</button>
                            </div>
                            {/* <div class="flex items-center flex-col lg:flex-row">
                                        <div class="flex items-center">
                                            <img src="https://pagedone.io/asset/uploads/1694846673.png" alt="Rounded image "
                                                class="border-2 border-solid border-indigo-50 rounded-full relative z-50 object-cover" />
                                            <img src="https://pagedone.io/asset/uploads/1694846691.png" alt="Rounded image"
                                                class="border-2 border-solid border-indigo-50 rounded-full relative z-30 -ml-3 object-cover" />
                                            <img src="https://pagedone.io/asset/uploads/1694846704.png" alt="Rounded image"
                                                class="border-2 border-solid border-indigo-50 rounded-full relative z-20 -ml-3 object-cover" />
                                        </div>
                                        <span class="mt-3 text-base text-gray-600 font-medium lg:ml-3">People have joined</span>
                                    </div> */}
                        </div>
                        <div class="w-full xl:col-span-7  lg:col-span-6 justify-items-end  items-end hidden sm:block" >
                            <div class="">
                                <Lottie
                                    animationData={ani}
                                    autoplay
                                    className='scale-75'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home2
