import React from "react";

const SocialLink = ({ href, iconClass, listItemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={listItemClass}>
        <i className={iconClass}></i>
      </a>
    </li>
  );
};

export default SocialLink;
