import React from "react";
import keepNotes from "../../images/banner.jpg";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Home({ scrollToElement }) {
  return (
    <div className="myHome">
      <div className="myHomeBanner">
        <div>
          <div>
            Hi, I am <span className="purple mx-2">Pulkit</span>
          </div>
          <div>
            I am a{" "}
            <span className="purple mx-2">
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer",
                    "Programmer",
                    "MERN/PERN Expert",
                    "Problem Solver",
                    "Tech Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 1500,
                  delay: 60,
                  deleteSpeed: 60,
                }}
              />
            </span>
          </div>
          <div className="objective">
            <span className="purple">❝</span> I'm a passionate Full Stack
            Developer specializing in the MERN stack and PostgreSQL. I build
            scalable, high-performance web applications with clean, efficient
            code. With experience in React.js, Node.js, and RESTful APIs, I
            strive to create seamless digital experiences. Currently working as
            a Software Engineer, I love solving complex problems and bringing
            ideas to life through technology. <span className="purple">❞</span>
          </div>
          <div className="cv">
            <Link
              to="https://drive.google.com/file/d/1Ie1T96gZHWhF62klpzj9Ow0rtPVTpLLG/view?usp=sharing"
              download={"Pulkit_Resume"}
              target="_blank"
            >
              <button className="btn myBtn me-4">View CV</button>
            </Link>
            <button
              className="btn myBtn"
              onClick={() => {
                scrollToElement(".myProjects");
              }}
            >
              Projects
            </button>
          </div>
        </div>
        <div className="imageSet">
          <img src={keepNotes} alt="" />
          <div className="social-media">
            <Link
              to="https://www.linkedin.com/in/pulkit-sachdeva-8a72a7121"
              target="_blank"
            >
              <MDBIcon fab icon="linkedin-in" size="2x" />
            </Link>
            <Link to="https://github.com/Devil1205" target="_blank">
              <MDBIcon fab icon="github" size="2x" />
            </Link>
            <Link to="https://www.instagram.com/_im_pulkit" target="_blank">
              <MDBIcon fab icon="instagram" size="2x" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
