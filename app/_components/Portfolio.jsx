"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { motion } from "motion/react"

import project1 from "../../public/images/portfolio/project1.webp";
import project2 from "../../public/images/portfolio/project2.webp";
import project3 from "../../public/images/portfolio/project3.webp";
import project4 from "../../public/images/portfolio/project4.webp";
import project5 from "../../public/images/portfolio/project5.webp";
import project6 from "../../public/images/portfolio/project6.webp";
import { fadeInAnimation } from "./PageAnimation";


const options = { next: { revalidate: 30 } };

const Card = ({ img, category, title, text, url }) => (
  <div className="rounded-lg overflow-hidden text-left shadow-card ">
    {/* check image's shadow please */}
    <Image
      src={img}
      alt={title}
      width={424}
      height={248}
      className="shadow-mdd w-full"
      priority
    />
    <div className="p-8 xl:h-auto min-h-[257.6px]">
      <p className="text-xs text-tsecondary">{category}</p>
      <p className="text-lg mb-3">{title}</p>
      <p className="text-tsecondary mb-5">{text}</p>
      <Link
        className="group relative inline-flex items-center md:justify-start justify-center overflow-hidden rounded border md:w-fit w-full border-current px-8 py-3 text-primary focus:ring-3 focus:outline-none"
        href={url}
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

        <span className="text-base font-bold tracking-wider transition-all group-hover:me-4">
          Case Study
        </span>
      </Link>
    </div>
  </div>
);
const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      category: "UI/UX Design",
      description:
        "A platform focused on identifying security bugs in Syrian websites.",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: project1,
          _type: "reference",
        },
      },
      projectname: "Bug Bounty Arab Website",
    },
    {
      category: "UI/UX Design",
      description:
        "A specialized mobile app providing healthy food with a different details.",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: project2,
          _type: "reference",
        },
      },
      projectname: "Good Food App",
    },
    {
      category: "Visual Identity",
      description:
        "This identity reflects my passion for creating visuals that embody a brand's essence.",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: project3,
          _type: "reference",
        },
      },
      projectname: "Shaheen Visual Identity",
    },
    {
      category: "UI/UX Design",
      description:
        "Highlights my expertise in crafting seamless digital experiences.",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: project4,
          _type: "reference",
        },
      },
      projectname: "My Portfolio Website",
    },
    {
      category: "UI/UX Design",
      description:
        "An AI-powered platform identifies and organizes the top-rated websites.",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: project5,
          _type: "reference",
        },
      },
      projectname: "WEBHO Website",
    },
    {
      category: "UI/UX Design",
      description:
        "The first Syrian platform for promoting brands through content creators.",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: project6,
          _type: "reference",
        },
      },
      projectname: "Double B Website",
    },
  ]);
  const [showAll, setShowAll] = useState(false);

  const moreProjects = [
    {
      category: "Visual Identity",
      description:
        "This identity reflects my passion for creating visuals that embody a brand's essence.",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: project3,
          _type: "reference",
        },
      },
      projectname: "Shaheen Visual Identity",
    },
  ];

  useEffect(() => {
    if (showAll) {
      setProjects([...projects, ...moreProjects]);
    }
  }, [showAll]);
  useEffect(() => {
    console.log("projects", projects);
  }, [projects]);

  const toggleShowAll = () => setShowAll(true);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <motion.div
      {...fadeInAnimation()}
      className="container mx-auto text-center py-20 2xl:px-12 lg:px-8 px-4"
    >
      <h2 className="xl:text-5xl font-semibold md:text-3xl text-2xl xl:leading-[56px] mb-6">
        Portfolio
      </h2>
      <p className="text-tsecondary text-lg md:mb-16 mb-8 max-w-[650px] mx-auto">
        I love to create things, and I'm always working on something new! You
        can view some of my favorite projects below.
      </p>
      <div className="xl:grid grid-cols-3 gap-6 hidden">
        {projects.map((project, i) => {
          return (
            <div key={i}>
              <Card
                category={project.category}
                img={project.poster.asset._ref}
                title={project.projectname}
                text={project.description}
                url={project.link}
              />
            </div>
          );
        })}
      </div>
      <div className="xl:hidden w-full">
        <Slider {...settings}>
          {projects.map((project) => {
            return (
              <div className="p-2" key={project.projectname}>
                <Card
                  category={project.category}
                  img={project.poster.asset._ref}
                  title={project.projectname}
                  text={project.description}
                  url={project.link}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <button
        onClick={toggleShowAll}
        disabled={showAll}
        className="mt-12 inline-block rounded bg-primary px-8 py-3 text-base font-semibold tracking-wider text-white transition enabled:hover:scale-110 disabled:bg-opacity-60 hover:shadow-xl focus:ring-3 focus:outline-hidden"
      >
        More Project
      </button>
    </motion.div>
  );
};

export default Portfolio;
