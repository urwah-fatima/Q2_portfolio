import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/pages/about">About Me</Link>
        </li>
        <li>
          <Link href="/pages/skills">Skills</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="/pages/projects">Projects</Link>
        </li>
        <li>
          <Link href="/pages/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
