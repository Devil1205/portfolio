import React from 'react'
import './About.css'
import { MDBIcon } from 'mdb-react-ui-kit';

function About() {
    return (
        <div className='myAbout'>
            <h1 className='text-center'>About <span className='purple'>Me</span></h1>
            <div className="about-container">
                <div className="experience">
                    <div>
                        <MDBIcon className='my-2' fas icon="medal" color='primary' size="2x" />
                        <span>Experience Level</span>
                        <span className='text-secondary'>Fresher</span>
                    </div>
                    <div>
                        <MDBIcon className='my-2' far icon="file-code" color='primary' size="2x" />
                        <span>Projects</span>
                        <span className='text-secondary'>10+ Projects</span>
                    </div>
            </div>
            <div className="about-desc">
                I am Pulkit Sachdeva currently pursuing final year of B.Tech in Information Technology from Dr. Akhilesh Das Gupta Institute of Technology & Management. I am passionate about software development, particularly in the MERN stack, skilled in creating innovative web applications through self-driven projects and coursework. I possess a solid understanding of MongoDB, Express.js, React.js, and Node.js, with a keen interest in learning and adopting new technologies. Eager to leverage academic knowledge and personal projects to contribute effectively to dynamic development teams and pursue a successful career in software engineering.
            </div>
        </div>
        </div >
    )
}

export default About