"use client";
import { MdOutlineEventNote } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import Slider from "react-slick";
import React from "react";

const Card = ({ icon, title, text }) => (
  <div className="group md:hover:shadow-[32px_32px_124px_0px_#2B384C1A] hover:shadow-lg rounded-xl bg-white xl:p-8 p-6 md:hover:-translate-y-4 transition-all">
    {icon}
    <h3 className="text-xl mt-8 mb-3">{title}</h3>
    <p className="text-tsecondary leading-6">{text}</p>
  </div>
);

const cards = [
  <Card
    icon={
      <MdOutlineEventNote className="text-primary size-[72px] p-5 rounded-md bg-biege bg-opacity-40 group-hover:bg-primary group-hover:text-white transition-all " />
    }
    text={
      "Gather insights to understand your goals and audience and requirements."
    }
    title={"1. Research"}
  />,
  <Card
    icon={
      <FaChartBar className="text-primary size-[72px] p-5 rounded-md bg-biege bg-opacity-40 group-hover:bg-primary group-hover:text-white transition-all " />
    }
    text={"Collected data, identify challenges, and create a clear roadmap."}
    title={"2. Analyze"}
  />,
  <Card
    icon={
      <FaPencilAlt className="text-primary size-[72px] p-5 rounded-md bg-biege bg-opacity-40 group-hover:bg-primary group-hover:text-white transition-all " />
    }
    text={"Create user-focused, visually appealing, and functional designs."}
    title={"3. Design"}
  />,
  <Card
    icon={
      <FaLaptop className="text-primary size-[72px] p-5 rounded-md bg-biege bg-opacity-40 group-hover:bg-primary group-hover:text-white transition-all " />
    }
    text={"Deliver and deploy with precision, ensuring a seamless experience."}
    title={"4. Launch"}
  />,
];
const WorkProcess = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div
      className="bg-section-secondary w-full lg:py-40 py-20 2xl:px-[104px] lg:px-8 px-4"
    >
      <div className="container mx-auto bg-section-secondary flex lg:flex-row flex-col justify-between gap-8 items-center">
        {/* info */}
        <div className="lg:max-w-[40%] lg:text-left text-center tracking-wide">
          <h2 className="lg:text-5xl font-semibold md:text-3xl text-2xl leading-[56px] lg:mb-6 mb-4">
            Work Process
          </h2>
          <p className="xl:text-2xl text-lg mb-4 text-tsecondary">
            Our streamlined process ensures efficiency and excellence at every
            stage.
          </p>
          <p className="xl:text-2xl text-lg text-tsecondary">
            We begin with in-depth research to understand your goals, analyze
            data to craft a strategic plan, design user-centric solutions that
            blend functionality with aesthetics, and finally launch the project
            with precision, ensuring a flawless experience.
          </p>
        </div>
        {/* cards md */}
        <div className="md:flex gap-6 xl:max-w-[50%] hidden tracking-wide">
          <div className=" flex flex-col gap-6">
            {cards[0]}
            {cards[2]}
          </div>
          <div className="mt-6 flex flex-col gap-6">
            {cards[1]}
            {cards[3]}
          </div>
        </div>
        {/* cards */}
        <div className="md:hidden w-full max-w-full overflow-x-hidden ">
          <Slider {...settings}>
            {cards.map((card, index) => {
              return <div key={index}>{card}</div>;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
