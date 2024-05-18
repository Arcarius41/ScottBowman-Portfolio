import { useRef } from "react";
import "./App.css";
import { PortfolioButton, PortfolioCard } from "./components/PortfolioItem";

function App() {
  const projects = useRef([
    {
      title: "Serenity Scribe",
      description:
        "Serenity Scribe is a digital platform that allows users to record their daily moods and journal entries. It aims to help users track their emotional well-being over time, offering insights and affirmations to encourage positive mental health practices.",
      image: "dist/assets/SerinityScribeScreenShot.png",
      url: null,
      repo: "https://github.com/Arcarius41/Albert_Derek_Scott-Mood-Journal",
      ref: useRef(null),
    },
    {
      title: " School Management System",
      description:
        "The School Management System is a Java application for managing classrooms, teachers, and students. It features user input handling, object-oriented design, and report generation, demonstrating fundamental programming skills ideal for junior developers and recruiter showcases.",
      image: "dist/assets/ScreenCropJavaProject-wide.png",
      url: null,
      repo: "https://github.com/Arcarius41/Scotts-Java-School-Management-System",
      ref: useRef(null),
    },
    {
      title: "Personal Portfolio Project",
      description:
        "You are looking at the project in action. Click on the buttons in the navigation bar to scroll to the corresponding project card. This project demonstrates the use of React, Bootstrap, and CSS to create a responsive, single-page portfolio website.",
      image: "dist/assets/HereIsLookingAtU.jpg",
      url: null,
      repo: "https://github.com/Arcarius41/ScottBowman-Portfolio",
      ref: useRef(null),
    },
  ]);

  const handleClick = (item) => {
    item.ref.current.scrollIntoView();
  };

  return (
    <>
      <div className="container-fluid">
        <nav class="navbar navbar-expand-sm bg-body-tertiary fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" onClick={() => window.scroll(0, 0)}>
              Developer Scott B Bowman's Portfolio:
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                {projects.current.map((item, idx) => (
                  <PortfolioButton
                    title={item.title}
                    onClick={() => handleClick(item)}
                    key={idx}
                  />
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="container d-flex flex-column gap-3"
          style={{ paddingTop: "7.5rem" }}
        >
          {projects.current.map((item, idx) => (
            <PortfolioCard
              maxWidth="100%"
              item={item}
              key={idx}
              ref={item.ref}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
