import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="mySkills">
      {/* <img className='skills-bg' src={skillsBg} alt="" /> */}
      <h1 className="text-center">
        My <span className="purple">Skills</span>
      </h1>
      <div className="skill-container">
        <div className="skills-grid-container">
          <div>
            <h2 className="text-center">
              <span className="purple">&lt;</span> Frontend Development <span className="purple">/&gt;</span>
            </h2>
            <div className="skills">
              <button className="animatedBtn-light btn">Next.js</button>
              <button className="animatedBtn-light btn">ReactJS</button>
              <button className="animatedBtn-light btn">TailwindCSS</button>
              <button className="animatedBtn-light btn">Redux</button>
              <button className="animatedBtn-light btn">Typescript</button>
              <button className="animatedBtn-light btn">JavaScript</button>
              <button className="animatedBtn-light btn">CSS3</button>
              <button className="animatedBtn-light btn">HTML5</button>
            </div>
          </div>

          <div>
            <h2 className="text-center">
              <span className="purple">{`{ `}</span> Backend Development <span className="purple">{` }`}</span>
            </h2>
            <div className="skills">
              <button className="animatedBtn-light btn">NodeJS</button>
              <button className="animatedBtn-light btn">ExpressJS</button>
              <button className="animatedBtn-light btn">MongoDB</button>
              <button className="animatedBtn-light btn">PostgreSQL</button>
              <button className="animatedBtn-light btn">RESTful APIs</button>
              <button className="animatedBtn-light btn">Socket.io</button>
              <button className="animatedBtn-light btn">JWT</button>
            </div>
          </div>

          <div>
            <h2 className="text-center">
              <span className="purple">[</span> Tools & Technologies <span className="purple">]</span>
            </h2>
            <div className="skills">
              <button className="animatedBtn-light btn">Git</button>
              <button className="animatedBtn-light btn">AWS</button>
              <button className="animatedBtn-light btn">OAuth 2.0</button>
              <button className="animatedBtn-light btn">Docker</button>
              <button className="animatedBtn-light btn">Postman</button>
              <button className="animatedBtn-light btn">Stripe</button>
              <button className="animatedBtn-light btn">Swagger</button>
              <button className="animatedBtn-light btn">react-i18next</button>
              <button className="animatedBtn-light btn">C++</button>
            </div>
          </div>

          <div>
            <h2 className="text-center">
              <span className="purple">✧</span> Soft Skills <span className="purple">✧</span>
            </h2>
            <div className="skills">
              <button className="animatedBtn-light btn">Problem Solving</button>
              <button className="animatedBtn-light btn">Attention to Detail</button>
              <button className="animatedBtn-light btn">Teamwork</button>
              <button className="animatedBtn-light btn">Time Management</button>
              <button className="animatedBtn-light btn">Adaptability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
