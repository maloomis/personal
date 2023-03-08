import React from "react";
import "./app.scss";
import "./about.scss";
import me from "./images/me.jpg";
import linkedin from "./images/linkedin.png";
import linkedinHover from "./images/linkedin-hover.png";
import github from "./images/github.png";
import githubHover from "./images/github-hover.png";
import resume from "./images/resume.png";
import resumeHover from "./images/resume-hover.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="Nav-bar">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact-me">Contact Me</a>
        </div>
      </header>
      <section className="row home">
        <div className="column intro">
          <h1>Hello, I’m Mallory Loomis</h1>
          <h2>I'm a full stack web developer located in Boston</h2>
          <div className="socials">
            <a href="https://www.linkedin.com/in/mallory-loomis-47245787/">
              <img src={linkedin} alt="LinkedIn icon" className="LinkedIn" />
              <img
                src={linkedinHover}
                alt="LinkedIn Hover icon"
                className="LinkedInHover"
              />
            </a>

            <a href="https://github.com/maloomis">
              <img src={github} alt="Github icon" className="Github" />
              <img
                src={githubHover}
                alt="Github hover icon"
                className="GithubHover"
              />
            </a>

            <a href="https://docs.google.com/document/d/11uHk1xbGW641zm5dFMAxsAjHz4NLd0sqAoN6ACn0hAg/edit?usp=sharing">
              <img src={resume} alt="Resume Icon" className="Resume" />
              <img
                src={resumeHover}
                alt="Resume hover icon"
                className="ResumeHover"
              />
            </a>
          </div>
        </div>
        <div className="column">
          <img className="portrait" src={me} alt="portrait of me" />
        </div>
      </section>

      <section className="row about">
        <div className="column">
          <p>
            I peaked an interest in computer science my senior year of high
            school when I took a basic web development class. Since then my love
            for the field grew, and I went on to pursue a Bachelor's Degree in
            Information Science at Northeastern University. During my time
            there, I had several internships including a project management role
            at Boston Private Bank, a web development role at Collette, and
            finally as an application developer at Workday, where I decided to
            continue full time. Through all my experiences, one fact has held
            true. I love technology and the power it gives you to solve real
            world problems. I feel fulfilled knowing that in the technical
            industry, there is always something new to learn and someone to
            help.
          </p>
          <p>
            Skills/Interests: Javascript, React, Angular, Node, Redux, CSS,
            HTML, Git, Mongo, SQL
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
