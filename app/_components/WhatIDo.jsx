"use client";
import Link from "next/link";
import React from "react";
import { fadeInAnimation } from "./PageAnimation";
import { motion } from "motion/react"

const Card = ({ title, text }) => (
  <div className="hover:border-l-[5px] hover:translate-x-4 transition-all bg-white border-l-primary rounded-md shadow-card p-8">
    <h3 className="text-tprimary font-bold">{title}</h3>
    <p className="text-tsecondary tracking-wide">{text}</p>
  </div>
);
const data = [
  {
    title: "User Experience (UX) Design",
    text: "I architect seamless user journeys through deep research, persona development, and interaction mapping.",
  },
  {
    title: "User Interface (UI) Design",
    text: "I craft visually stunning interfaces grounded in design systems and accessibility standards.",
  },
  {
    title: "Visual Identity Design",
    text: "I create magic brands that tell powerful stories - from strategic colors and logos to consistent experiences across all platforms. ",
  },
];
const WhatIDo = () => {
  return (
    <motion.div
      {...fadeInAnimation()}
      className="bg-section-secondary lg:py-20 py-10 2xl:px-[104px] lg:px-8 px-4"
    >
      <div className="container mx-auto flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between">
        <div className="lg:max-w-[40%] lg:text-left text-center">
          <h2 className="lg:text-5xl font-semibold md:text-3xl text-2xl text-[#333] lg:mb-6 mb-4 ">
            What I do?
          </h2>
          <p className="text-tsecondary text-lg mb-4 tracking-wide">
            I transform complex problems into intuitive, human-centered solutions. 
            Through research-driven design and strategic thinking, I create meaningful experiences that bridge user needs with business goals.
          </p>
          <p className="text-tsecondary text-lg tracking-wide">
             Every pixel serves a purpose in my mission to make technology feel effortless.
          </p>
          <Link
            href="#contact"
            className="lg:mt-12 mt-4 inline-block rounded md:w-auto w-full bg-primary px-6 py-3 text-base font-semibold tracking-wider text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"
          >
            Say Hello!
          </Link>
        </div>
        <div className="flex flex-col lg:gap-6 gap-4 lg:max-w-[50%]">
          {data.map((item, i) => (
            <div key={i}>
              <Card title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhatIDo;
