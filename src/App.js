import React from "react";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="#">WORDALL•E</a>
          </div>
          <div className="social">
            <a
              href="https://github.com/jkalili/WorDalle"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>WORDALL•E IS COMING SOON!</h1>
          </div>
          <a href="mailto:admin@wordalle.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer"></div>
      </div>
    );
  };
}

export default App;
