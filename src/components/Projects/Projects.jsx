import React from 'react'
import './Projects.css';
import keepNotes from '../../images/keepNotes.png';
import goCalci from '../../images/goCalci.png';
import newsify from '../../images/newsify.png';
import textAbout from '../../images/textAbout.png';
import youtubeClone from '../../images/youtubeClone.png';
import timberCraft from '../../images/timberCraft.png';
import ProjectItem from './ProjectItem';

function Projects() {

    return (
        <div className='myProjects container-fluid'>
            {/* <hr /> */}
            <h1 className='text-center'>My <span className='purple'>Projects</span></h1>
            <div className='row gy-4' style={{ margin: "10px 0px" }}>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis velit quae nihil minima eligendi tempora harum, vero perferendis repellat fugiat!"} title={"TimberCraft"} image={timberCraft} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://devil1205.github.io/timbercraft/"}/></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis velit quae nihil minima eligendi tempora harum, vero perferendis repellat fugiat!"} title={"Newsify"} image={newsify} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://github.com/Devil1205/Newsify"}/></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis velit quae nihil minima eligendi tempora harum, vero perferendis repellat fugiat!"} title={"TextAbout"} image={textAbout} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://devil1205.github.io/TextAbout/"}/></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis velit quae nihil minima eligendi tempora harum, vero perferendis repellat fugiat!"} title={"Youtube Clone"} image={youtubeClone} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://devil1205.github.io/Youtube-Clone/"}/></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis velit quae nihil minima eligendi tempora harum, vero perferendis repellat fugiat!"} title={"GoCalci"} image={goCalci} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://devil1205.github.io/GoCalci/"}/></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis velit quae nihil minima eligendi tempora harum, vero perferendis repellat fugiat!"} title={"KeepNotes"} image={keepNotes} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://devil1205.github.io/keepnotes/"}/></div>
            </div>
        </div>
    )
}

export default Projects