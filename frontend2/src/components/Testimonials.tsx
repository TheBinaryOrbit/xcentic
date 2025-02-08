"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "As an IT consultant always looking for cutting-edge solutions, this agency's software development services exceeded my expectations.",
    imageSrc: avatar1.src,
    name: "Amit Sharma",
    username: "@amit_techie",
  },
  {
    text: "Our company's workflow efficiency has significantly improved since partnering with this IT firm.",
    imageSrc: avatar2.src,
    name: "Neha Verma",
    username: "@neha_dev",
  },
  {
    text: "Their agile development approach ensured our project was delivered on time with exceptional quality.",
    imageSrc: avatar3.src,
    name: "Rahul Iyer",
    username: "@rahul_codes",
  },
  {
    text: "From UI/UX design to backend development, this agency's expertise is unmatched.",
    imageSrc: avatar4.src,
    name: "Pooja Mehta",
    username: "@poojamehta_ui",
  },
  {
    text: "Managing multiple IT projects has never been easier. Their solutions provide seamless integration and automation.",
    imageSrc: avatar5.src,
    name: "Vikram Singh",
    username: "@vikram_it",
  },
  {
    text: "The level of customization and security in their software products is outstanding.",
    imageSrc: avatar6.src,
    name: "Ananya Kapoor",
    username: "@ananya_kapoor",
  },
  {
    text: "Their IT consulting services have streamlined our business operations and boosted overall productivity.",
    imageSrc: avatar7.src,
    name: "Rohan Joshi",
    username: "@rohan_j_it",
  },
  {
    text: "With their robust enterprise solutions, we can manage projects, track progress, and enhance collaboration effortlessly.",
    imageSrc: avatar8.src,
    name: "Sanya Rajput",
    username: "@sanya_techpro",
  },
  {
    text: "Their technical expertise and proactive support have been a game-changer for our company.",
    imageSrc: avatar9.src,
    name: "Devansh Malhotra",
    username: "@devansh_m",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?:number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY:'-50%',
      }}
      transition={{
        duration:props.duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(
            ({ text, imageSrc, name, username }, index) => (
              <div key={index} className="card">
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What Our Clients Say</h2>
          <p className="section-description section-heading mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center h-[30rem] overflow-hidden gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
