import profile from "../assets/ley.jpg";
import profile2 from "../assets/petlg.png";
import profile3 from "../assets/hazel.png";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="subtext">
        We’re here to help! If you have any questions, don’t hesitate to reach out to our friendly support team.
      </p>

      <div className="email-links">
        {/* First Contact */}
        <div className="contact-card">
          <img src={profile} alt="lbeldad" className="contact-image" />
          <div className="contact-details">
            <h3>Lea Beldad</h3>
            <p className="contact-role">BS Computer Science</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lbeldad@gbox.ncf.edu.ph&su=Support%20Request"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contact-button">Email</button>
            </a>
          </div>
        </div>

        {/* Second Contact */}
        <div className="contact-card">
          <img src={profile2} alt="ccasilihan" className="contact-image" />
          <div className="contact-details">
            <h3>Charisse Casilihan</h3>
            <p className="contact-role">BS Computer Science</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ccasilihan@gbox.ncf.edu.ph&su=Support%20Request"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contact-button">Email</button>
            </a>
          </div>
        </div>

        {/* Third Contact */}
        <div className="contact-card">
          <img src={profile3} alt="hanaval" className="contact-image" />
          <div className="contact-details">
            <h3>Hazel Anne Naval</h3>
            <p className="contact-role">BS Computer Science</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hanaval@gbox.ncf.edu.ph&su=Support%20Request"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contact-button">Email</button>
            </a>
          </div>
        </div>
      </div>

      {/* Additional Support Section */}
      <div className="additional-support">
        <h3>Need Immediate Help?</h3>
        <p>
          Contact our Phone: <strong>+639123456789</strong> {" "}
          for common issues and solutions.
        </p>
      </div>
    </div>
  );
}

export default Contact;
