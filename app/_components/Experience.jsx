"use client";
import Image from "next/image";
import person from "../../public/Person.png";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeInAnimation } from "./PageAnimation";

const socials = [
  {
    icon: <FaFacebookF className="text-[18px]" />,
    link: "https://www.facebook.com/963shaheen",
  },
  {
    icon: <FaDribbble className="text-[18px]" />,
    link: "https://dribbble.com/SHAHEEN-",
  },
  {
    icon: <FaInstagram className="text-[18px]" />,
    link: "https://www.instagram.com/mohammad.shaheen_",
  },
  {
    icon: <FaLinkedinIn className="text-[18px]" />,
    link: "https://www.linkedin.com/in/shaheen-",
  },
  {
    icon: <FaBehance className="text-[18px]" />,
    link: "https://www.behance.net/shaheen-",
  },
];
const Experience = () => {
  return (
    <motion.div
      {...fadeInAnimation()}
      className="2xl:px-[104px] lg:px-8 px-4"
    >
      <div className="shadow-experience-double container mx-auto relative lg:top-20 top-10 flex lg:flex-row flex-col justify-between items-center 2xl:gap-32 xl:gap-24 md:gap-10 gap-16  xl:px-28 lg:px-12 px-4 lg:py-20 py-8 rounded-2xl bg-white">
        {/* image-side */}
        <div className="xl:w-[424px] xl:h-[468px] lg:w-[380px] lg:h-[400px] md:w-[330px] md:h-[350px] w-[270px] h-[290px] bg-[#F0F1F3] overflow-visible rounded-[10px] relative z-10">
          <div className="size-full bg-[#F0F1F3] overflow-visible rounded-[10px] absolute inset-0 z-10"></div>
          <Image
            src={person.src}
            alt="person"
            width={480}
            height={483}
            className="relative z-10 xl:w-[460px] xl:h-[463px] lg:size-[400px] md:w-[350px] md:h-[350px] w-[295px]c h-[295px] bottom-1 md:bottom-0 max-w-max rounded-[10px]"
          />
          <div className="absolute inset-0 w-[calc(100%+10px)] h-[calc(100%+10px)] rounded-[10px] bg-primary z-0 animate-shake"></div>
          {/* socials */}
          <div className="flex mx-auto bg-white p-3 shadow-md w-fit relative rounded bottom-7 z-10">
            {socials.map((item, i) => (
              <a
                target="_blank"
                key={i}
                href={item.link}
                className="xl:size-12 md:size-10 size-8 rounded-[4px] text-primary bg-white transition hover:bg-primary hover:text-white text-center flex items-center justify-center"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        {/* info-side */}
        <div className="max-w-[536px] lg:text-left text-center">
          <h3 className="xl:text-[32px] font-semibold md:text-[20px] text-[16px] text-tprimary md:leading-[50px] md:mb-8 mb-4">
            I am a Creative UI/UX Designer
          </h3>
          <p className="text-lg text-[#556070] mb-4 tracking-wide">
            I design and develop digital solutions for clients, including stylish, modern websites, desktop and web applications, dashboards, and online stores.
          </p>
          <p className="text-lg text-[#556070] mb-4 tracking-wide">
            I bridge the gap between design and development , creating pixel-perfect interfaces that are as functional as they are beautiful.
            <br /> <br />
            
          </p>
          <div className="flex md:flex-row flex-col justify-center lg:justify-start gap-4">
            <Link
              className="flex items-center rounded tracking-wider md:w-auto w-full bg-primary px-6 py-3 text-base font-semibold text-white transition hover:scale-110 hover:shadow-xl focus:outline-hidden"
              href="#portfolio"
            >
              My Projects
            </Link>

            <a
              className="flex items-center tracking-wider gap-3 md:w-auto w-full justify-center rounded border border-current px-6 py-3 text-base font-semibold text-primary transition hover:scale-110 hover:shadow-xl focus:outline-hidden"
              download="Mohammad Shaheen CV 2025.pdf"
              href={"Mohammad Shaheen CV 2025.pdf"}
            >
              <FiDownload className="size-6" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
