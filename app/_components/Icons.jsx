"use client";
import React, { useState, useEffect } from "react";
import _1 from "../../public/icons/Rectangle 2848.svg";
import _2 from "../../public/icons/Rectangle 2849.svg";
import _3 from "../../public/icons/Rectangle 2850.svg";
import _4 from "../../public/icons/Rectangle 2851.svg";
import _5 from "../../public/icons/Rectangle 2852.svg";
import _6 from "../../public/icons/Rectangle 2853.svg";
import _7 from "../../public/icons/Rectangle 2854.svg";
import _8 from "../../public/icons/Rectangle 2855.svg";
import _9 from "../../public/icons/Rectangle 2856.svg";
import _10 from "../../public/icons/Rectangle 2857.svg";
import _11 from "../../public/icons/Rectangle 2858.svg";
import _12 from "../../public/icons/Rectangle 2859.svg";
import _13 from "../../public/icons/Rectangle 2860.svg";
import _14 from "../../public/icons/Rectangle 2861.svg";
import _15 from "../../public/icons/Rectangle 2862.svg";
import _16 from "../../public/icons/Rectangle 2863.svg";
import _17 from "../../public/icons/Rectangle 2864.svg";
import Image from "next/image";

const icons = [
  _1,
  _2,
  _3,
  _4,
  _5,
  _6,
  _7,
  _8,
  _9,
  _10,
  _11,
  _12,
  _13,
  _14,
  _15,
  _16,
  _17,
];
import Marquee from "react-fast-marquee";

const Icons = () => {
  const [speed, setSpeed] = useState(50);
  const [gap, setGap] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setSpeed(30);
        setGap(8);
      } else if (window.innerWidth < 1024) {
        setSpeed(40);
        setGap(12);
      } else {
        setSpeed(50);
        setGap(16);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto 2xl:px-[104px] lg:px-10 px-5 pt-12 flex gap-3.5 justify-center relative z-10">
      <div className="w-full">
        <Marquee speed={speed} gradient={false} pauseOnHover={false} autoFill>
          {icons.map((icon, i) => (
            <div key={i} style={{ marginRight: `${gap}px` }}>
              <Image
                src={icon.src}
                alt="icon"
                width={70}
                height={70}
                className="md:h-[70px] h-12 w-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Icons;
