import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PortfolioButton, PortfolioCard } from "./components/PortfolioItem";

function App() {
  const projects = [
    {
      title: "Serenity Scribe",
      description:
      "Serenity Scribe is a digital platform that allows users to record their daily moods and journal entries. It aims to help users track their emotional well-being over time, offering insights and affirmations to encourage positive mental health practices.",
      image: "https://via.placeholder.com/150",
      url: "https://example.com",
      repo: "https://github.com/example/super-awesome-project",
    },
    {
      title: "Super Awesome Project 2",
      description:
        "This is a super awesome project that does a lot of super awesome things.",
      image: "https://via.placeholder.com/150",
      url: "https://example.com",
      repo: null,
    },
    {
      title: "Best Awesome Project",
      description:
        "This is a super awesome project that does a lot of super awesome things.",
      image: "https://via.placeholder.com/150",
      url: "https://example.com",
      repo: "https://github.com/example/super-awesome-project",
    },
  ];

  return (
    <>
      <div className="fluid-container">
        <nav class="navbar navbar-expand-sm bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
             Scott B Bowman Dev Portfolio:
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
               
                {projects.map((item, idx) => <PortfolioButton  title={item.title} key={idx}  />)}

              </ul>
            </div>
          </div>
        </nav>
        <div className="container pt-5 d-flex flex-column gap-3">
          {projects.map((item, idx) => (<PortfolioCard maxWidth="100%" item={item} key={idx} />)
        )}
        </div>
      </div>
    </>
  );
}

export default App;
