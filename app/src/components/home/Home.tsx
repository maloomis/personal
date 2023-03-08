import React from "react";
import "./home.css";
import me from "../../images/me.jpg";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";

const Home = () => {
  return (
    <div className="Home">
      <main>
        <div className="Hello">
          <h1>
            <b>Hello, I’m Mallory Loomis</b>
          </h1>
          <h2>I'm a full stack web developer located in Boston</h2>
          <div className="Socials">
            <img src={linkedin} alt="LinkedIn icon" />

            <img src={github} alt="Github icon" />
          </div>
        </div>

        <img className="Portrait" src={me} alt="portrait of me" />
      </main>
    </div>
  );
};

export default Home;
