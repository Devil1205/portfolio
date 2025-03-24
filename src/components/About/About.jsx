import React from "react";
import "./About.css";
import { MDBIcon } from "mdb-react-ui-kit";

function About() {
  return (
    <div className="myAbout">
      <h1 className="text-center">
        About <span className="purple">Me</span>
      </h1>
      <div className="about-container">
        <div className="experience">
          <div>
            <MDBIcon
              className="my-2"
              fas
              icon="medal"
              color="primary"
              size="2x"
            />
            <span>Experience Level</span>
            <span className="text-secondary text-center">
              9+ Months of Experience <br /> as Full Stack Developer
            </span>
          </div>
          <div>
            <MDBIcon
              className="my-2"
              far
              icon="file-code"
              color="primary"
              size="2x"
            />
            <span>Projects</span>
            <span className="text-secondary">
              4 - Full Stack Projects <br />3 - Frontend Projects
            </span>
          </div>
        </div>
        <div className="about-desc">
          I am an enthusiastic and detail-oriented Full Stack Developer with
          expertise in the MERN stack along with PostgreSQL. With a strong
          foundation in building scalable and high-performance web applications,
          I am passionate about developing innovative solutions and optimizing
          user experiences. I have experience working with technologies like
          React.js, Node.js, Express.js, and Redux, and I am adept at designing
          and implementing RESTful APIs.
          <br />
          Currently working as a Software Engineer at Neuronimbus Software
          Services, I collaborate with cross-functional teams to create
          efficient and user-friendly applications. I have also contributed to
          open-source projects and participated in hackathons, constantly
          expanding my technical skills and problem-solving abilities.
          <br />
          My portfolio showcases projects ranging from recruitment and
          onboarding platforms to e-commerce applications, highlighting my
          ability to develop both frontend and backend solutions. I am always
          eager to take on new challenges and leverage my expertise to drive
          impactful digital experiences.
        </div>
      </div>
    </div>
  );
}

export default About;
