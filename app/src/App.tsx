import React from "react";
import "./app.scss";
import "./about.scss";
import linkedin from "./images/linkedin.png";
import linkedinHover from "./images/linkedin-hover.png";
import github from "./images/github.png";
import githubHover from "./images/github-hover.png";
import resume from "./images/resume.png";
import resumeHover from "./images/resume-hover.png";
import hiking from "./images/hiking.jpg";
import typescript from "./images/typescript.png";
import react from "./images/react.png";
import sass from "./images/sass.png";
import postgres from "./images/postgres.png";
import node from "./images/node.png";
import html from "./images/html.png";
import aws from "./images/aws.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="Nav-bar">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact-me">Contact Me</a>
        </div>
      </header>
      <section className="row home float">
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
      </section>

      <section className="about" id="about">
        <div className="row">
          <div className="column">
            <img className="hiking" src={hiking} alt="me hiking" />
          </div>
          <div className="column">
            <h1 className="knowMe">GET TO KNOW ME</h1>
            <div className="bio">
              <p>
                I peaked an interest in computer science my senior year of high
                school when I took a basic web development class. Since then my
                love for the field grew, and I went on to pursue a Bachelor's
                Degree in Information Science at Northeastern University. During
                my time there, I had several internships including a project
                management role at Boston Private Bank, a web development role
                at Collette, and as an application developer at Workday, where I
                decided to continue full time.
              </p>
              <p>
                Currently, I'm working as a full stack web developer on the
                Onboarding team at Pluralsight. Our team focuses on enhacing the
                Skills platform by adding new features that allow new users to
                understand our product and functionality. I work closely with
                other engineers, designers, and product managers to guarantee
                that we are building scalable, quality software.
              </p>
              <p>
                Through all my experiences, one fact has held true. I love
                technology and the power it gives you to solve real world
                problems. I feel fulfilled knowing that in the technical
                industry, there is always something new to learn and someone to
                help.
              </p>
              <p>
                Out of the office you'll find me anywhere outside. I love to
                hike, camp and ski!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 className="skills">SKILLS</h1>
        </div>
        <div className="row logos">
          <div className="column">
            <img src={typescript} alt="typescript logo" />
            <p>TYPESCRIPT</p>
          </div>
          <div className="column">
            <img src={react} alt="react logo" />
            <p>REACT</p>
          </div>
          <div className="column">
            <img src={node} alt="node logo" />
            <p>NODE JS</p>
          </div>
          <div className="column">
            <img src={html} alt="html logo" />
            <p>HTML</p>
          </div>
          <div className="column">
            <img src={aws} alt="aws logo" />
            <p>AWS</p>
          </div>
          <div className="column">
            <img src={postgres} alt="postgres logo" />
            <p>POSTGRES</p>
          </div>
          <div className="column">
            <img src={sass} alt="sass logo" />
            <p>SASS</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
