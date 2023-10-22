import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="images/React-icon.svg.png" alt="" />
          <h1>React Projects</h1>
        </div>
        <div className="credit">
          Made By{" "}
          <a target="_blank" href="https://jacerchetoui.co" rel="noreferrer">
            Jacer Chetoui
          </a>
          <div className="socials">
            <a
              target={"_blank"}
              href="https://github.com/jacerchetoui56/"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/jacer-chetoui/"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
