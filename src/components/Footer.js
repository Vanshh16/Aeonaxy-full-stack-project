import React from "react";
import dribble from "../assets/images/dribble.png";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa6";

function Footer() {
  return (
    <section className="footer m-1 pl-2">
      <div className="grid md:grid-cols-7 grid-rows-2 gap-x-1">
        <div className="col-span-2">
          <img className="h-24 w-24" src={dribble}></img>
          <p className="text-sm">
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
          <div className="mt-5">
            <FaFacebook className="inline text-gray-600 mx-1" />
            <FaTwitter className="inline text-gray-600 mx-1" />
            <FaPinterest className="inline text-gray-600 mx-1" />
            <FaInstagram className="inline text-gray-600 mx-1" />
            <FaDribbble className="inline text-gray-600 mx-1" />
          </div>
        </div>
        <div className="space-y-1 md:space-y-3 text-xs md:text-sm">
          <p className="font-bold">For designers</p>
          <p>Go Pro!</p>
          <p>Explore design work</p>
          <p>Design blog</p>
          <p>Overtime podcast</p>
          <p>Playoffs</p>
          <p>Weekly Warm-Up</p>
          <p>Refer a Friend</p>
          <p>Code of conduct</p>
        </div>
        <div className="space-y-1 md:space-y-3 text-xs md:text-sm">
          <p className="font-bold">Hire designers</p>
          <p>Post a job opening</p>
          <p>Post a freelance project</p>
          <p>Search for designers</p>
          <p className="font-bold">Brands</p>
          <p>Advertise with us</p>
        </div>
        <div className="space-y-1 md:space-y-3 text-xs md:text-sm">
          <p className="font-bold"> Company</p>
          <p>About</p>
          <p>Careers</p>
          <p>Support</p>
          <p>Media kit</p>
          <p>Testimonials</p>
          <p>API</p>
          <p>Terms of service</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </div>
        <div className="space-y-1 md:space-y-3 text-xs md:text-sm">
          <p className="font-bold"> Directories</p>
          <p>Design jobs</p>
          <p>Designers for hire</p>
          <p>Freelance designers for hire</p>
          <p>Tags</p>
          <p>Places</p>
          <p className="font-bold">Design assets</p>
          <p>Dribbble Marketplace</p>
          <p>Creative Market</p>
          <p>Fontspring|</p>
          <p>Font Squirrel</p>
        </div>
        <div className="space-y-1 md:space-y-3 text-xs md:text-sm">
          <p className="font-bold"> Design Resources</p>
          <p>Freelancing</p>
          <p>Design Hiring</p>
          <p>Design Portfolio</p>
          <p>Design Education</p>
          <p>Creative Process</p>
          <p>Design Industry</p>
          <p>Trends</p>
        </div>
      </div>
      <div className="px-10 pt-20">
        <div className="grid grid-cols-2 border-0 pt-14 px-2 border-t-2 w-full text-sm">
          <div className="text-left text-gray-500">
            <p>&copy; 2023 Dribble. All Rights Reserved. </p>
          </div>
          <div className="text-right">
            <p>
              <span className="font-bold text-base">20,501,853</span> shots dribbled{" "}
              <FaDribbble className="inline mx-1 text-pink-600 font-black size-5" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
