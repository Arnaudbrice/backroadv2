import React from "react";
import { pageLinks } from "../data";

import PageLink from "./PageLink";

const PageLinks = props => {
  return (
    <ul className={props.parentClass} id="nav-links">
      {pageLinks.map(linkItem => {
        return (
          <PageLink
            key={linkItem.id}
            href={linkItem.href}
            text={linkItem.text}
            childClass={props.childClass}
          />
        );
      })}
    </ul>
  );
};

export default PageLinks;
