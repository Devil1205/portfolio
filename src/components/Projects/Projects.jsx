import React from 'react'
import './Projects.css';
import keepNotes from '../../images/keepNotes.png';
import goCalci from '../../images/goCalci.png';
import newsify from '../../images/newsify.png';
import textAbout from '../../images/textAbout.png';
import youtubeClone from '../../images/youtubeClone.png';
import timberCraft from '../../images/timberCraft.png';
import quotify from '../../images/quotify.png';
import chitChat from '../../images/chit-chat.png';
import ProjectItem from './ProjectItem';

function Projects() {

    return (
        <div className='myProjects container-fluid'>
            {/* <hr /> */}
            <h1 className='text-center'>My <span className='purple'>Projects</span></h1>
            <div className='row gy-4' style={{ margin: "10px 0px" }}>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"Chit-Chat is a web application that provides two chat applications to the users, chat-zone for instant crowd chat and mChat which offers user a personal chatting application to chat with anyone over mChat."} title={"Chit-Chat"} image={chitChat} skills={["Socket.io", "NodeJs", "ExpressJs", "ReactJs", "MongoDB"]} link={"https://chat-zone.vercel.app"} /></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"TimberCraft is a website designed to list all the products available in a furniture store. It offers simplest and attractive design which is comfortable for user to use."} title={"TimberCraft"} image={timberCraft} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://devil1205.github.io/timbercraft/"} /></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"Quotify is a random quote generator that provides a random quote to the users. It also offers user to create and login their account to write, update or delete their own quotes."} title={"Quotify"} image={quotify} skills={["NodeJs", "ExpressJs", "ReactJs", "MongoDB"]} link={"https://quotify1234.netlify.app/"} /></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"Newsify is a news application that provides top news headlines of 50+ countries including every category like entertainment, sports, finance etc. It quick and attractive interface makes it very comfortable to use."} title={"Newsify"} image={newsify} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://github.com/Devil1205/Newsify"} /></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"TextAbout is an online text-editor that provides various functions over text processing like removing extra whitespaces, extracting email IDs etc. which makes it a very useful tool in daily life."} title={"TextAbout"} image={textAbout} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://devil1205.github.io/TextAbout/"} /></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"This is a clone of google youtube made using HTML, CSS and JavaScript. Data is fetched in realtime from youtube API offered by google."} title={"Youtube Clone"} image={youtubeClone} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://devil1205.github.io/Youtube-Clone/"} /></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"GoCalci is a GUI calculator that offers a beautiful classic calculator design and performs various mathematical calculations."} title={"GoCalci"} image={goCalci} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://devil1205.github.io/GoCalci/"} /></div>
                <div className="col-12 col-sm-6 col-md-4"><ProjectItem desc={"KeepNotes is a website that stores user notes. It overs the user to add, update and delete their notes."} title={"KeepNotes"} image={keepNotes} skills={["ReactJs", "Javascript", "Bootstrap"]} link={"https://devil1205.github.io/keepnotes/"} /></div>
            </div>
        </div>
    )
}

export default Projects