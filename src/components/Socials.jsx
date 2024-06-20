import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/suryansh9315" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/suryansh-sharma-776563226/" },
  { icon: <FaTwitter />, path: "https://x.com/Suryanshhsharma" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <a key={index} className={iconStyles} href={social.path} target="_blank">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
