// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import aboutpetimage from "../assets/pets.png";
import profile from "../assets/jean.png";
import profile2 from "../assets/hazel.png";
import profile3 from "../assets/ronel.png";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-fade");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="about">
      <div className="about-container scroll-fade">
        <div className="about-text-container">
          <h1 className="h1-about">About</h1>
          <h2 className="h2-about">e-Vet: A Platform for Veterinary Health System</h2>
          <p className="about-paragraph">
          e-Vet is a veterinary telehealth solution designed to bridge the gap between veterinarians and pet owners. Unlike traditional clinic visits, e-Vet makes use of online platforms to facilitate symptom detection, medication, and emergency contacts, improving access to high-quality veterinary care, particularly in remote areas.
          </p>
        </div>
        <div className="about-image-container">
          <img
            src={aboutpetimage}
            alt="Animal group"
            className="about-animal-image"
          />
        </div>
      </div>
      {/* Project Goals */}
      <section className="about-goals-section scroll-fade">
        <h2 className="about-goals-title">Our Goals</h2>
        <ul className="about-goals-list">
          <li>One of the primary goals of e-Vet is to reduce the anxiety pets experience in unfamiliar environments like hospitals. </li>
          <li>By allowing pet owners to monitor their pet's symptoms through image processing, e-Vet provides health recommendations, </li>
          <li>resulting in less worry and more personalized treatment approaches.</li>
         
        </ul>
      </section>

      {/* Contact Section */}
      <div className="contact-container scroll-fade">
        <h1>Contact Us</h1>
        <p className="contact-subtext">
          We’re here to help! If you have any questions, don’t hesitate to reach out to our friendly support team.
        </p>
        <div className="email-links">
          {[profile, profile2, profile3].map((image, index) => (
            <div key={index} className="contact-card">
              <img src={image} alt="Team member" className="contact-image" />
              <div className="contact-details">
                <h3>{["Jean Marie Bercasio", "Hazel Anne Naval", "Ronel Simon"][index]}</h3>
                <p className="contact-role">Program Chair - BSCS</p>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${[
                    "jmbercasio",
                    "hanaval",
                    "rsimon",
                  ][index]}@gbox.ncf.edu.ph&su=Support%20Request`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="contact-button">Email</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-support">
          <h3>Need Immediate Help?</h3>
          <p>
            Contact our Phone: <strong>+639308644171 or +639930593570 </strong> for common issues and solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
