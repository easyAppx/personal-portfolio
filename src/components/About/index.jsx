import React from "react";
import AboutImg from "./AboutImg";
import "./About.css";
import { Bio } from "assets/portfolio"
import { darkTheme } from "theme";

const About = () => {
  const theme = darkTheme;
  return (
  <div className="main pb-[12rem]">
      <div className="fade-in">
        <div className="heading-div">
          <div className="heading-img-div lg:mt-[5rem] sm:mt-5">
            <AboutImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: theme.orange }}>
              Brief Bio
            </h1>
            <h3 
              className="heading-sub-text text-justify" 
              style={{ color: theme.text }}
            >
              {Bio.bio}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
