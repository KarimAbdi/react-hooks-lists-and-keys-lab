import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}</nav>;
  links.map ((link) => (
    <a key={link} href = {`#${link}` }>
      {link}
      </a>
  ))
}

export default NavBar;
