import React, { useState } from "react";
import "./Projects.css";
import keepNotes from "../../images/keepNotes.png";
import goCalci from "../../images/goCalci.png";
import newsify from "../../images/newsify.png";
import textAbout from "../../images/textAbout.png";
import youtubeClone from "../../images/youtubeClone.png";
import timberCraft from "../../images/timberCraft.png";
import quotify from "../../images/quotify.png";
import chitChat from "../../images/chit-chat.png";
import myStore from "../../images/myStore.png";
import nnPortfolio from "../../images/NNPortfolio.png";
import neurotalRecruit from "../../images/neurotalRecruit.png";
import kluvor from "../../images/kluvor.png";
import hindware from "../../images/hindware.svg";
import storeflow from "../../images/storeflow.svg";
import ProjectItem from "./ProjectItem";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = {
    Professional: [
      {
        title: "Hindware",
        desc: "An e-commerce website for Hindware Ltd. to list their wide range of products along with an admin panel for required actions.",
        image: hindware,
        skills: [
          "NodeJs",
          "ExpressJs",
          "Next.js",
          "ReactJs",
          "PostgreSQL",
          "AWS"
        ],
        live: "https://website1.hindware.com",
        code: "",
        type: "Professional",
      },
      {
        title: "Storeflow (Starbucks)",
        desc: "Storeflow comprises of a mobile app and a website that manages the different actions required to open and maintain the stores of a company like store creation, visits planning etc. ",
        image: storeflow,
        skills: [
          "NodeJs",
          "ExpressJs",
          "ReactJs",
          "MongoDB",
        ],
        live: "http://64.227.135.221:3000",
        code: "",
        type: "Professional",
      },
      {
        title: "Neurotal Recruit",
        desc: "Neurotal Recruit is a platform that helps companies to find the best candidates for their open positions by providing a comprehensive job portal and candidate management system.",
        image: neurotalRecruit,
        skills: [
          "NodeJs",
          "ExpressJs",
          "Next.js",
          "ReactJs",
          "PostgreSQL",
          "Redux",
          "react-i18next",
        ],
        live: "https://dev.itsneobot.com",
        code: "",
        type: "Professional",
      },
      {
        title: "NN Portfolio",
        desc: "Neuronimbus Portfolio is the company's portfolio website that showcases the company's services and products.",
        image: nnPortfolio,
        skills: ["Next.js", "PostgreSQL", "CSS"],
        live: "https://www.neuronimbus.com/portfolio",
        code: "",
        type: "Professional",
      },
      {
        title: "Kluvor",
        desc: "Kluvor is an inventory management web application that is designed to order, receive, use, return and manage the inventory of products.",
        image: kluvor,
        skills: ["Node.js", "Express.js", "React.js", "PostgreSQL", "MUI"],
        live: "https://kims.kluvor.co",
        code: "",
        type: "Professional",
      },
      {
        title: "Neurotal Onboard",
        desc: "Neurotal Onboarding is a platform that helps companies to onboard their new employees by providing a comprehensive onboarding process and employee management system with trainings and certifications.",
        image: neurotalRecruit,
        skills: ["NodeJs", "ExpressJs", "ReactJs", "PostgreSQL", "nodemailer"],
        live: "http://20.244.90.232:5300",
        code: "",
        type: "Professional",
      },
    ],
    Personal: [
      {
        title: "myStore",
        desc: "myStore is an online e-commerce platform that offers an elegant interface and provides users to view products, add them to cart, pay securely and order their favourite goods.",
        image: myStore,
        skills: [
          "Stripe",
          "NodeJs",
          "ExpressJs",
          "ReactJs",
          "MongoDB",
          "Redux",
          "React-Charts2",
        ],
        live: "https://mystore-2twg.onrender.com",
        code: "https://github.com/Devil1205/myStore",
        type: "Personal",
      },
      {
        title: "TimberCraft",
        desc: "TimberCraft is a website designed to list all the products available in a furniture store. It offers simplest and attractive design which is comfortable for user to use.",
        image: timberCraft,
        skills: ["ReactJs", "Javascript", "Bootstrap"],
        live: "https://devil1205.github.io/timbercraft/",
        code: "https://github.com/Devil1205/timbercraft",
        type: "Personal",
      },
      {
        title: "Quotify",
        desc: "Quotify is a random quote generator that provides a random quote to the users. It also offers user to create and login their account to write, update or delete their own quotes.",
        image: quotify,
        skills: ["NodeJs", "ExpressJs", "ReactJs", "MongoDB", "OAuth 2.0", "Docker"],
        live: "https://quotify1234.netlify.app/",
        code: "https://github.com/Devil1205/quotify",
        type: "Personal",
      },
      {
        title: "Newsify",
        desc: "Newsify is a news application that provides top news headlines of 50+ countries including every category like entertainment, sports, finance etc. It quick and attractive interface makes it very comfortable to use.",
        image: newsify,
        skills: ["ReactJs", "Javascript", "Bootstrap"],
        live: "",
        code: "https://github.com/Devil1205/Newsify",
        type: "Personal",
      },
      {
        title: "mChat",
        desc: "mChat is an online realtime chat application that provides users feature to chat with any other user registered on mChat easily and privately.",
        image: chitChat,
        skills: ["Socket.io", "NodeJs", "ExpressJs", "ReactJs", "MongoDB"],
        live: "https://chat-zone.vercel.app",
        code: "https://github.com/Devil1205/Chit-Chat",
        type: "Personal",
      },
      {
        title: "TextAbout",
        desc: "TextAbout is an online text-editor that provides various functions over text processing like removing extra whitespaces, extracting email IDs etc. which makes it a very useful tool in daily life.",
        image: textAbout,
        skills: ["ReactJs", "Javascript", "Bootstrap"],
        live: "https://devil1205.github.io/TextAbout/",
        code: "https://github.com/Devil1205/TextAbout",
        type: "Personal",
      },
      {
        title: "Youtube Clone",
        desc: "This is a clone of google youtube made using HTML, CSS and JavaScript. Data is fetched in realtime from youtube API offered by google.",
        image: youtubeClone,
        skills: ["ReactJs", "Javascript", "Bootstrap"],
        live: "https://devil1205.github.io/Youtube-Clone/",
        code: "https://github.com/Devil1205/Youtube-Clone",
        type: "Personal",
      },
      {
        title: "GoCalci",
        desc: "GoCalci is a GUI calculator that offers a beautiful classic calculator design and performs various mathematical calculations.",
        image: goCalci,
        skills: ["ReactJs", "Javascript", "Bootstrap"],
        live: "https://devil1205.github.io/GoCalci/",
        code: "https://github.com/Devil1205/GoCalci",
        type: "Personal",
      },
      {
        title: "KeepNotes",
        desc: "KeepNotes is a website that stores user notes. It overs the user to add, update and delete their notes.",
        image: keepNotes,
        skills: ["ReactJs", "Javascript", "Bootstrap"],
        live: "https://devil1205.github.io/keepnotes/",
        code: "https://github.com/Devil1205/keepnotes",
        type: "Personal",
      },
    ],
  };

  return (
    <div className="myProjects container-fluid">
      <h1 className="text-center">
        My <span className="purple">Projects</span>
      </h1>

      <div className="category-buttons text-center">
        <button
          className={`btn btn-md m-2 ${
            activeCategory === "all" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveCategory("all")}
        >
          All Projects
        </button>
        <button
          className={`btn btn-md m-2 ${
            activeCategory === "Professional"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setActiveCategory("Professional")}
        >
          Professional
        </button>
        <button
          className={`btn btn-md m-2 ${
            activeCategory === "Personal"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setActiveCategory("Personal")}
        >
          Personal
        </button>
      </div>

      <div className="row gy-4 m-0">
        {activeCategory === "all" ? (
          <>
            {projects.Professional.map((project, index) => (
              <div className="col-12 col-sm-6 col-lg-4" key={`prof-${index}`}>
                <ProjectItem {...project} category="Professional" />
              </div>
            ))}
            {projects.Personal.map((project, index) => (
              <div className="col-12 col-sm-6 col-lg-4" key={`pers-${index}`}>
                <ProjectItem {...project} category="Personal" />
              </div>
            ))}
          </>
        ) : (
          <>
            {projects[activeCategory].map((project, index) => (
              <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <ProjectItem
                  {...project}
                  category={
                    activeCategory === "Professional"
                      ? "Professional"
                      : "Personal"
                  }
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;
