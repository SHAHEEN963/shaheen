"use client"
import Link from "next/link";
import React from "react";
import { motion } from "motion/react"
import { fadeInAnimation } from "./PageAnimation";

const ProjectIdea = () => {
  return (
    <motion.div {...fadeInAnimation()} className="bg-tprimary md:py-24 py-8 2xl:px-12 lg:px-8 px-4">
      <div className="container mx-auto text-center ">
        <h2 className="text-white xl:text-5xl font-semibold md:text-3xl text-2xl">
          Do you have Project Idea?
          <br /> Let's discuss your project!
        </h2>
        <p className="text-[#A5ACB5] text-lg md:my-8 my-6 tracking-wide">
          Whether you are launching a new product, refreshing your brand, or solving a complex user experience challenge. <br />{" "}
          I transform ideas into exceptional digital solutions.
        </p>
        <Link
          className="group relative inline-flex items-center overflow-hidden md:w-auto w-full justify-center rounded bg-primary px-8 py-3 text-white focus:ring-3 focus:outline-hidden"
          href="#contact"
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-base font-semibold transition-all group-hover:me-4 tracking-wider">
            Let's work Together
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectIdea;
