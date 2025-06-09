"use client";
import Image from "next/image";
import React from "react";
import avatar from "../../public/Subtract.png";
import Counters from "./Counters";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeInAnimation } from "./PageAnimation";

const Hero = () => {
  return (
      <motion.div
        {...fadeInAnimation()}
        className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-4 container mx-auto 2xl:justify-around items-center lg:pt-14 md:pt-10 pt-6 2xl:px-12 lg:px-8 px-4 overflow-hidden"
      >
        {/* info-side */}
        <div className="2xl:max-w-[780px] lg:max-w-full w-auto lg:text-left text-center lg:mt-0 mt-4">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold xl:leading-[65px] text-tprimary xl:mb-6 mb-3">
            Hello, I'm
            <br />
            {/* animated-underlaying-tape */}
            <div className="whitespace-nowrap relative w-fit lg:mx-0 mx-auto">
              <p className="relative z-10">Mohammad Shaheen</p>
              <div className="absolute inset-0 -left-1 h-full bg-beige-to-transparent animate-stretch -z-0"></div>
            </div>
          </h1>
          <h3 className="text-tsecondary xl:text-xl text-base xl:mb-6 mb-4">
            I'm a{" "}
            <div className="inline-block relative">
              <p className="relative left-0.5 z-10">UI/UX Designer</p>
              <div className="absolute inset-0 left-0 h-full animate-stretch -z-0 bg-beige-to-transparent "></div>
            </div>{" "}
            and{" "}
            <div className="inline-block relative">
              <p className="relative left-0.5 z-10">Product Designer</p>
              <div className="absolute inset-0 left-0 h-full animate-stretch -z-0 bg-beige-to-transparent "></div>
            </div>{" "}
            designing digital products with enterprises and startups since 2023.
            Highly experienced in working with international teams and clients,
            seeking a new challenge to user-centered designs that enhance
            usability, engagement, and business goals.
          </h3>
          <Link
            href="#contact"
            className="inline-block rounded bg-primary lg:px-5 lg:py-3 px-12 py-3 sm:w-auto w-full lg:mb-9 mb-8 lg:text-lg tracking-wider font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none"
          >
            Say Hello!
          </Link>
          <Counters />
        </div>
        {/* avatar-side */}
        <div className="relative md:mt-0 mt-4">
          <Image
            src={avatar.src}
            alt="avatar"
            width={369}
            height={459}
            className="2xl:w-[373px] lg:w-[316px] md:w-[307px] sm:w-[264px] size-[236px] h-auto z-10 absolute 2xl:left-[39px] md:left-[36px] sm:left-5 left-5 md:bottom-[7px] bottom-1"
          />
          <div className="2xl:size-[424px] lg:size-[368px] md:size-[352px] sm:size-[289px] size-[262px] avatar-spinner rounded-full flex items-center justify-center animate-rotate">
            <div className="2xl:size-[408px] lg:size-[352px] md:size-[336px] sm:size-[280px] size-[252px] bg-biege rounded-full z-[1]" />
          </div>
        </div>
      </motion.div>
  );
};

export default Hero;
