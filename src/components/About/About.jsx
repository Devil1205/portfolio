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
                I am Pulkit Sachdeva currently pursuing B.Tech in Information Technology from Dr. Akhilesh Das Gupta Institute of Technology & Management. I am a programmar and Web Developer, have successfully completed various projects using ReactJS, JavaScript, Bootstrap etc. I am an enthusiastic and self motivated person who loves to explore new opportunities in technology.
            </div>
        </div>
        </div >
    )
}

export default About