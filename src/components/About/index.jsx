import React from "react";
import AboutImg from "./AboutImg";
import "./About.css";
import { Bio } from "assets/portfolio"
import { Fade } from "react-reveal";
import { darkTheme } from "theme";

const About = () => {
  const theme = darkTheme;
  return (
  <div className="main pb-[12rem]">
      <Fade bottom duration={2000} distance="40px">
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
      </Fade>
    </div>
  );
}

export default About;
