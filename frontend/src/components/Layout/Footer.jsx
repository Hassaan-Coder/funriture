import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-[#e0e0e0] py-7">
        <h1 className="mb-6 text-3xl font-bold lg:text-4xl md:mb-0 lg:leading-normal md:w-2/5">
          <span className="text-[#56d879]">Contact </span>
          <span className="text-[#080a08]"> us for Any Query </span>
          <span className="text-[#080a08]"> "03003220839"</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 px-5 py-16 sm:gird-cols-3 lg:grid-cols-4 sm:px-8 sm:text-center">
        <ul className="flex flex-col items-center px-5 text-center sm:text-start sm:block">
          <img
            src="https://res.cloudinary.com/dejass0mo/image/upload/v1698427478/WhatsApp_Image_2023-10-27_at_20.00.43_66522abe_qokj5a.jpg"
            alt=""
            style={{}}
          />
          <br />
          <p>The home and elements needeed to create beautiful products.</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        {/* <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-sm leading-6 text-gray-400 duration-300 cursor-pointer hover:text-teal-400"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul> */}

        {/* <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-sm leading-6 text-gray-400 duration-300 cursor-pointer hover:text-teal-400"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul> */}

        {/* <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-sm leading-6 text-gray-400 duration-300 cursor-pointer hover:text-teal-400"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>

      <div className="grid grid-cols-1 gap-10 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-3">
        <span>© 2023 Hassan Ahmed. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
