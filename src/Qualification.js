import React, { useEffect } from "react";
import './CSS/Qualification.css'; // Import the CSS file

const Qualification = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target); // Stops observing after appearing
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="qualificationsContainer">
      <h1>My Qualifications</h1>

      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>B.Tech IT</strong> - Aray College of Engineering (2021-2025)</li>
          <li><strong>High School</strong> - Government School, Jaipur (2021)</li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Full Stack Development - <strong>HackerRank</strong></li>
          <li>React, JavaScript, SQL, Java - <strong>HackerRank</strong></li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <ul>
          <li>Full Stack Developer Intern - <strong>Full Stack Learning (2023)</strong></li>
          <li>Java Programmer (Trainee) - <strong>DZONE (2024)</strong></li>
        </ul>
      </section>
    </div>
  );
};

export default Qualification;
