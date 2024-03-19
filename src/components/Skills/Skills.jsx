import React from 'react';
import './Skills.css';
import skillsBg from '../../images/skillsBg.png';

function Skills({ scrollToElement }) {
    return (
        <div className="mySkills">
            {/* <img className='skills-bg' src={skillsBg} alt="" /> */}
            <h1 className='text-center'>My <span className='purple'>Skills</span></h1>
            <div className="skill-container">
                <div className="experience">
                    <div>
                        <span>Hard Skills</span>
                        <div className="skills">
                            <button className='animatedBtn btn'>NodeJS</button>
                            <button className='animatedBtn btn'>ExpressJS</button>
                            <button className='animatedBtn btn'>ReactJS</button>
                            <button className='animatedBtn btn'>MongoDB</button>
                            <button className='animatedBtn btn'>Redux</button>
                            <button className='animatedBtn btn'>Stripe</button>
                            <button className='animatedBtn btn'>Socket.io</button>
                            <button className='animatedBtn btn'>CSS3</button>
                            <button className='animatedBtn btn'>HTML5</button>
                            <button className='animatedBtn btn'>JavaScript</button>
                            <button className='animatedBtn btn'>C++</button>
                        </div>
                    </div>
                    <div>
                        <span>Soft Skills</span>
                        <div className="skills">
                            <button className='animatedBtn btn'>Communication</button>
                            <button className='animatedBtn btn'>Team Working</button>
                            <button className='animatedBtn btn'>Leadership</button>
                            <button className='animatedBtn btn'>Problem Solving</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills