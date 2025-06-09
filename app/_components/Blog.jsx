"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Slider from "react-slick";
import blog1 from "../../public/images/blogs/blog1.webp";
import blog2 from "../../public/images/blogs/blog2.webp";
import blog3 from "../../public/images/blogs/blog3.webp";
import blog4 from "../../public/images/blogs/blog4.webp";
import { fadeInAnimation } from "./PageAnimation";

export function formatDate(isoDateString) {
  const date = new Date(isoDateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const Card = ({ img, date, title, url }) => (
  <Link
    href={url}
    className="rounded-lg block overflow-hidden text-left shadow-card h-full "
  >
    {/* check image's shadow please */}
    <Image
      src={img}
      alt={title}
      width={424}
      height={248}
      className="shadow-mdd w-full"
    />
    <div className="p-6 ">
      <p className="text-sm text-tsecondary mb-2">{formatDate(date)}</p>
      <p className="text-lg text-[#333] line-clamp-2">{title}</p>
    </div>
  </Link>
);
const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      blogName: "Top Tools Every UX Designer Should Know About in 2025",
      date: "2020-10-22T19:15:00.000Z",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: blog1,
          _type: "reference",
        },
      },
    },
    {
      blogName: "Top 10 Resources to Kickstart Careers in UI Design",
      date: "2020-10-22T19:15:00.000Z",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: blog2,
          _type: "reference",
        },
      },
    },
    {
      blogName: "The Key Differences Between UI and UX Design",
      date: "2025-01-26T20:43:59.610Z",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: blog3,
          _type: "reference",
        },
      },
    },
    {
      blogName: "Top 10 UI/UX Trends to Watch in 2025",
      date: "2020-10-22T19:15:00.000Z",
      link: "https://www.google.com/",
      poster: {
        _type: "image",
        asset: {
          _ref: blog4,
          _type: "reference",
        },
      },
    },
  ]);

  useEffect(() => {
    console.log("blogs", blogs);
  }, [blogs]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
      className="container mx-auto text-center py-20 2xl:px-12 lg:px-8 px-4 overflow-x-hidden "
    >
      <h2 className="text-5xl leading-[56px] mb-6">My Blog</h2>
      <p className="text-tsecondary text-lg mb-16 max-w-[650px] mx-auto">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </p>
      <Slider {...settings}>
        {blogs.map((blog) => {
          return (
            <div className="px-3" key={blog.blogName}>
              <Card
                date={blog.date}
                img={blog.poster.asset._ref}
                title={blog.blogName}
                url={blog.link}
              />
            </div>
          );
        })}
      </Slider>
    </motion.div>
  );
};

export default Blog;
