import React from 'react';
import keepNotes from '../../images/banner.jpg';
import './Home.css'
import Typewriter from 'typewriter-effect';
import { MDBIcon } from 'mdb-react-ui-kit';

function Home({scrollToElement}) {

    return (
        <div className="myHome">
            <div className='myHomeBanner'>
                <div>
                    <div>Hi, I am <span className='purple mx-2'>Pulkit</span></div>
                    <div>and I am a <span className="purple mx-2">
                        <Typewriter
                            options={{
                                strings: ['Programmar', 'Web Developer', 'Frontend Developer'],
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
                        <button className="btn myBtn me-4">Download CV</button>
                        <button className="btn myBtn" onClick={()=>{scrollToElement('.myProjects')}}>Projects</button>
                    </div>
                </div>
                <div>
                    <img src={keepNotes} alt="" />
                    <div className="social-media">
                        <a href="/">
                            <MDBIcon fab icon="linkedin-in" size="2x" />
                        </a>
                        <a href="/">
                            <MDBIcon fab icon="github" size="2x" />
                        </a>
                        <a href="/">
                            <MDBIcon fab icon="instagram" size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home