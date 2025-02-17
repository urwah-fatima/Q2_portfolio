import React from "react";
import Image from "next/image";
export default function BasicInfo() {
  return (
    <section id="basic-info">
      <div className="">
        <Image
          src="/images/profile-picture.svg"
          alt="Syeda Urwah Fatima"
          className="profile-picture"
        />
      </div>
      <div>
        <h1 style={{ fontSize: "3rem" }}>Syeda Urwah Fatima</h1>
        <h2 style={{ fontSize: "2.5rem" }}>Aspiring Developer</h2>
        <p style={{ textAlign: "justify", maxWidth: "80vw" }}>
          Hello! ’m an undergraduate Physics major at the Federal Urdu
          University of Arts, Science, and Technology, with a passion for web
          development.I'm a developer skilled in Next.js, Tailwind CSS, Python,
          C++, and WordPress, with a focus on creating responsive, visually
          appealing, and scalable solutions. I have ability to turn complex
          designs into pixel-perfect websites and solve challenging programming
          problems.
        </p>
      </div>
    </section>
  );
}
