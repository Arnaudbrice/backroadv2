import React from "react";
import logo from "../images/logo.svg";

import { socialLinks } from "../data";
import PageLinks from "./PageLinks.js";
import SocialLink from "./SocialLink.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClass="nav-links" childClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map(socialLink => (
            <SocialLink
              key={socialLink.id}
              {...socialLink}
              listItemClass="nav-icon"
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
