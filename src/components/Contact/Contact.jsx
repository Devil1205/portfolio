import React from "react";
import "./Contact.css";
import contactUs from "../../images/contactUs.jpg";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="myContact">
      <h1 className="text-center">
        Contact <span className="purple">Me</span>
      </h1>
      <div>
        <div className="contact-container">
          <Link to="mailto:sachdeva.pulkit2599@gmail.com">
            <img src={contactUs} alt="" />
          </Link>
          <div className="contact-details">
            <h3>Contact Details</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p className="purple">
                  Email:{" "}
                  <a
                    href="mailto:sachdeva.pulkit2599@gmail.com "
                    target="_blank"
                    rel="noreferrer"
                  >
                    sachdeva.pulkit2599@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p className="purple">
                  Phone:{" "}
                  <a href="tel:+918470950994" target="_blank" rel="noreferrer">
                    +91 8470950994
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p className="purple">
                  Address:{" "}
                  <a
                    href="https://goo.gl/maps/1234567890"
                    target="_blank"
                    rel="noreferrer"
                  >
                    New Delhi, India
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
