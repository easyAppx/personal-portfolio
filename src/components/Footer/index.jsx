import React from "react";
import "./Footer.css";
import { greeting } from "assets/portfolio";
// import { darkTheme } from "theme";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer() {
  // const theme = darkTheme;
  return (
    <center>
    <div className="footer-div">
      <div className="fade-up">
        <hr />
        <p className="footer-text">
          Made by {greeting.sub}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </div>
    </div>
    </center>
  );
}
