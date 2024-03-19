import React from 'react'
import './Projects.css';
import { MDBIcon } from 'mdb-react-ui-kit';

function ProjectItem(props) {

    const flip = (element) => {
        let temp = element.target.offsetParent.offsetParent.firstChild;
        if (temp.style.transform === "rotateY(180deg)")
            temp.style.transform = "rotate(0deg)";
        else
            temp.style.transform = "rotateY(180deg)";
    }

    return (
        <div className="project-container">
            <div className="project-card">
                <div className='project project-front'>
                    <a href={props.live} target='_blank' rel='noreferrer'><img src={props.image} alt="" /></a>
                    <div className='overview mt-5'>
                        <a href={props.live} target='_blank' rel='noreferrer'><h1>{props.title}</h1></a>
                        <div>
                            <a href={props.code} target='_blank' rel='noreferrer'>
                                <MDBIcon fab icon="github" size="2x" />
                            </a>
                        </div>
                    </div>
                    <h4 className='text-start my-3'>Technology Used</h4>
                    <div className="skills my-3">
                        {props.skills !== undefined && props.skills.map((element, index) => {
                            return (
                                <button className='animatedBtn btn me-2 mb-4' key={index}>{element}</button>
                            )
                        })}
                    </div>
                </div>
                <div className="project project-back">
                    <div className="description">
                        {props.desc}
                    </div>
                </div>
            </div>
            <div className='flip-button' onClick={(element) => { flip(element) }}>
                <MDBIcon fas icon="info" size="2x" />
            </div>
        </div>
    )
}

export default ProjectItem