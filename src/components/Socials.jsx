import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaYoutube />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} className={iconStyles} hrefLang={social.path}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
