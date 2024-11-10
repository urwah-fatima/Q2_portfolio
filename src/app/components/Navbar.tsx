import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#basic-info">About Me</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
