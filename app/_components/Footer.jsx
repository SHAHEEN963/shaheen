import React from "react";
import logo from "../../public/footerLogo.svg";
import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa";
const links = [
  "Home",
  "About",
  "Process",
  "Portfolio",
  "Blog",
  "Services",
  "Contact",
];
const Footer = () => {
  return (
    <footer className="2xl:px-[104px] lg:px-8 px-4 bg-tprimary lg:py-20 py-10">
      <div className="mx-auto container mt-20">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-between mb-10">
          <a className="block" href="#">
            <div className="flex items-center gap-3">
              <Image src={logo.src} alt="logo" width={56} height={56} />
              <h2 className="text-3xl text-white font-medium">Thank you</h2>
            </div>
          </a>

          <nav aria-label="Global">
            <ul className="grid lg:grid-cols-7 grid-cols-2 lg:gap-0 gap-8 items-center text-xl leading-6 text-white ">
              {links.map((item, index) => (
                <li
                  key={index}
                  className={
                    "mx-auto hover:text-primary transition" +
                    (index === 6 ? " lg:col-span-1 col-span-2" : "")
                  }
                >
                  <a className="p-3" href={"#" + item.toLocaleLowerCase()}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-white">
            Copyright <FaRegCopyright className="inline" /> 2025 Shaheen.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
