import React from "react";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: "/icons/javascript-svgrepo-com (1).svg" },
    { name: "TypeScript", icon: "/icons/typescript-official-svgrepo-com.svg" },
    { name: "HTML", icon: "/icons/html-5-svgrepo-com (1).svg" },
    { name: "CSS", icon: "/icons/css-svgrepo-com.svg" },
    { name: "C++", icon: "/icons/c-plusplus-svgrepo-com.svg" },
    { name: "Python", icon: "/icons/python-svgrepo-com (1).svg" },
    { name: "Figma", icon: "/icons/figma-svgrepo-com (1).svg" },
    { name: "WordPress", icon: "/icons/wordpress-svgrepo-com.svg" },
  ];

  return (
    <section id="skills">
      <h4 style={{ textAlign: "center", fontSize: "2.5rem" }}>
        <strong>Skills</strong>
      </h4>
      <div className="skill-icons" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
        {skills.map((skill) => (
          <div key={skill.name} className="skill" style={{ textAlign: "center" }}>
            <img src={skill.icon} alt={`${skill.name} icon`} style={{ width: "50px", height: "50px" }} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
