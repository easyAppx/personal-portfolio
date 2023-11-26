import React from 'react'
import './Main.css'
import { darkTheme } from "theme"
import Button from '../button/Button'
import BannerImg from './BannerImg'
import { greeting, competitiveSites } from 'assets/portfolio'
import CompetitiveSites from 'components/competitiveSites/CompetitiveSites'
import Typewriter from "typewriter-effect";
import { Fade } from "react-reveal";

const Main = () => {
  const theme = darkTheme;
  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub">
                I&lsquo;m <span data-entity="ora_uk">{greeting.sub}</span>
              </h1>
              <h1 className="greeting-typewriter" style={{color: '#005C99'}}>  
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Frontend Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Frontend Engineer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Frontend Man")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("All Na Desame")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Just Toying :) ")
                      .pauseFor(200)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}>
                <div className="entities">
                  Passionate <mark data-entity="noun">Frontend Developer</mark> dedicated to{" "}
                  <mark data-entity="verb">crafting</mark> seamless and visually appealing interfaces 
                  that enhance user engagement, with a blend of <mark data-entity="skill">Strong Frontend Expertise.</mark>
                  {/* <h3>
                    {greeting.description}
                  </h3> */}
                </div>
              </span>

              <CompetitiveSites logos={competitiveSites.competitiveSites} />

              <div className="button-greeting-div">
                <Button 
                  text="Contact me" 
                  href="/contact_me" 
                />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
    </div>
  )
}

export default Main