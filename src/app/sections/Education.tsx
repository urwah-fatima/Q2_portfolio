

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
    institution: "[Your High School Name]",
    degree: "Matriculation (Science)",
    graduation: "Graduation: 2019",
    courses: "Key Courses: Biology, Physics, Chemistry, Mathematics."
  }
];

const Education = () => {
  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>Educational Background</h2>
      <div className={styles.educationContainer}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.educationItem}>
            <h3 className={styles.institution}>{item.institution}</h3>
            <p className={styles.degree}>{item.degree}</p>
            <p className={styles.graduation}>{item.graduation}</p>
            <p className={styles.courses}>{item.courses}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
