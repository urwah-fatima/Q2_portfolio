import React from "react";
import Link from "next/link";
import Image from "next/image";

const educationData = [
  {
    institution: "Federal Urdu University of Arts, Science, and Technology",
    degree: "Bachelor's in Physics",
    graduation: "Expected Graduation: 2025",
    courses: "Key Courses: Quantum Mechanics, Thermodynamics, Classical Mechanics, Electromagnetism."
  },
  {
    institution: "Intermediate College, Karachi",
    degree: "Pre-Engineering (FSc)",
    graduation: "Graduation: 2021",
    courses: "Key Courses: Calculus, Physics, Chemistry, Computer Science."
  },
  {
    institution: "Seneca Academy",
    degree: "Cambridge O-level(Science)",
    graduation: "Graduation: 2019",
    courses: "Key Courses: Biology, Physics, Chemistry, Mathematics."
  }
];

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

const AboutPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <nav>
          <ul style={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/education">Education</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.aboutTitle}>About Me</h2>

        {/* Education Section */}
        <section id="education" style={styles.educationSection}>
          <h3 style={styles.sectionTitle}>Educational Background</h3>
          <div style={styles.educationContainer}>
            {educationData.map((item, index) => (
              <div key={index} style={{ ...styles.educationItem, backgroundColor: index % 2 === 0 ? '#f4f4f4' : '#e2e8f0' }}>
                <h4 style={styles.institution}>{item.institution}</h4>
                <p style={styles.degree}>{item.degree}</p>
                <p style={styles.graduation}>{item.graduation}</p>
                <p style={styles.courses}>{item.courses}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={styles.skillsSection}>
          <h3 style={styles.sectionTitle}>Skills</h3>
          <div style={styles.skillIcons}>
            {skills.map((skill) => (
              <div key={skill.name} style={styles.skill}>
                <Image src={skill.icon} alt={`${skill.name} icon`} width={50} height={50} />
                <span style={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Your Portfolio. All Rights Reserved.</p>
        <p>
          <Link href="/privacy-policy" style={styles.footerLink}>Privacy Policy</Link> | 
          <Link href="/terms-of-service" style={styles.footerLink}>Terms of Service</Link>
        </p>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    backgroundColor: '#1e1e2f',
    padding: '10px',
    color: 'white',
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    padding: 0,
  },
  section: {
    marginTop: '2rem',
  },
  aboutTitle: {
    textAlign: 'center',
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  educationSection: {
    marginTop: '2rem',
  },
  educationContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  educationItem: {
    textAlign: 'center',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '250px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  institution: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'black',
  },
  degree: {
    fontSize: '1rem',
    color: '#333',
  },
  graduation: {
    fontSize: '1rem',
    color: '#555',
  },
  courses: {
    fontSize: '0.9rem',
    color: '#777',
  },
  skillsSection: {
    marginTop: '2rem',
  },
  skillIcons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  skill: {
    textAlign: 'center',
  },
  skillName: {
    display: 'block',
    marginTop: '0.5rem',
    fontSize: '1rem',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#1e1e2f',
    color: 'white',
    marginTop: '2rem',
  },
  footerLink: {
    color: '#8e7cc3',
    textDecoration: 'none',
  },
};

export default AboutPage;
