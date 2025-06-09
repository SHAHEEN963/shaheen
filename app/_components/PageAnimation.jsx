"use client";
import React from "react";
import { motion } from "motion/react";

export const fadeInAnimation = () => {
  return {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      duration: 0.5,
    }
  }
}

function PageAnimation({ children }) {
  const animate = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const slide = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "0",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const prespective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <div className="bg-[#f2ddb0]">
      <motion.div
        {...animate(slide)}
        className="fixed w-screen h-screen z-10 top-0 left-0 bg-white"
      />
      <motion.div {...animate(prespective)}>{children}</motion.div>
    </div>
  );
}

export default PageAnimation;
