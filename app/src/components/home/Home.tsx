import React from "react";
import "./home.scss";
import me from "../../images/me.jpg";
import linkedin from "../../images/linkedin.png";
import linkedinHover from "../../images/linkedin-hover.png";
import github from "../../images/github.png";
import githubHover from "../../images/github-hover.png";
import resume from "../../images/resume.png";
import resumeHover from "../../images/resume-hover.png";

const Home = () => {
  return (
    <div className="Home">
      <main>
        <div className="Hello">
          <h1>Hello, I’m Mallory Loomis</h1>
          <h2>I'm a full stack web developer located in Boston</h2>
          <div className="Socials">
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

        <img className="Portrait" src={me} alt="portrait of me" />
      </main>
    </div>
  );
};

export default Home;
