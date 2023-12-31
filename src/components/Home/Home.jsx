import React from 'react';
import keepNotes from '../../images/banner.jpg';
import './Home.css'
import Typewriter from 'typewriter-effect';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Home({scrollToElement}) {

    return (
        <div className="myHome">
            <div className='myHomeBanner'>
                <div>
                    <div>Hi, I am <span className='purple mx-2'>Pulkit</span></div>
                    <div>and I am a <span className="purple mx-2">
                        <Typewriter
                            options={{
                                strings: ['Programmar', 'MERN Developer', 'Frontend Developer'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 1500,
                                delay: 60,
                                deleteSpeed: 60,
                            }}
                        /></span></div>
                    <div className="objective">
                        Self-motivated tech enthusiast with proven leadership capabilities, who likes to take initiative to learn and explore new challenges. Proficient in
                        various languages like C,C++,Javascript as well as various frameworks like Reactjs, Bootstrap.
                    </div>
                    <div className='cv'>
                        <Link to="https://drive.google.com/u/0/uc?id=1xy-HWFiVgcMGdLRAHr0Rp0lJzb6hMtIM&export=download" download={"Pulkit_Resume"}><button className="btn myBtn me-4">Download CV</button></Link>
                        <button className="btn myBtn" onClick={()=>{scrollToElement('.myProjects')}}>Projects</button>
                    </div>
                </div>
                <div className='imageSet'>
                    <img src={keepNotes} alt="" />
                    <div className="social-media">
                        <Link to="https://www.linkedin.com/in/pulkit-sachdeva-8a72a7121" target='_blank'>
                            <MDBIcon fab icon="linkedin-in" size="2x" />
                        </Link>
                        <Link to="https://github.com/Devil1205" target='_blank'>
                            <MDBIcon fab icon="github" size="2x" />
                        </Link>
                        <Link to="https://www.instagram.com/_im_pulkit" target='_blank'>
                            <MDBIcon fab icon="instagram" size="2x" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home