'use client';
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const  {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0,1], [600,-600])
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your Productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            fugit dolorum ipsa esse porro natus eum adipisci.
          </p>
        </div>
        <div className="realtive">
          <Image src={productImage} alt="product-image" className="mt-10" />
          {/* <Image
            src={pyramidImage}
            alt="Pyramid image"
            height={262}
            width={262}
            className="absolute -right-5 -bottom-[-500px]"
          /> */}
          {/* <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="absolute bottom-24 -left-[5px] sm:hidden"
            style = {{
              translateY, 
            }}
          /> */}
        </div>
      </div>
    </section>
  );
};
