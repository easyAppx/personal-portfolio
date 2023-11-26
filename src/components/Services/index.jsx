import React from 'react'
import "./Services.css";
import { darkTheme } from "theme"
import { Fade } from "react-reveal";
import FullStackImg from "./web/FullStackImg";
import DesignImg from "./ui/DesignImg";
import { skills } from 'assets/portfolio'
import PropTypes from 'prop-types';
import SoftwareSkill from '../softwareSkills/SoftwareSkill';
import '@fortawesome/fontawesome-free/css/all.css';

function GetSkillSvg(props) {
  if (props.fileName === "DesignImg")
    return <DesignImg />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg />;
}

const Services = () => {
  const theme = darkTheme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Solutions
          </h1>
        </Fade>
      </div>
      <div className='mt-14'>
        {skills.data.map((skill, index) => {
          return (
            <div key={index} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName}/>
                </div>
              </Fade>

              <div className="skills-text-div lg:pb-[5rem] pb-0">
                <Fade right duration={1000}>
                  <h3
                    className="skills-heading text-center lg:text-right lg:whitespace-pre whitespace-normal" 
                    style={{ color: theme.textD }}
                  >
                    {skill.title}
                  </h3>
                </Fade>

                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={index}
                          className="subTitle skills-text lg:whitespace-pre sm:whitespace-normal
                            lg:text-right sm:text-center leading-[2]"
                          style={{ color: theme.text }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
      <div className='-mt-[2rem]'>
        {skills.data.map((skill, index) => {
          return (
            <div key={index} className="skills-main-div">
              <Fade right duration={1500}>
                <h3
                  className="skills-heading text-right"
                  style={{ color: theme.textD }}
                >
                  {skill.skillIntro}
                </h3>
              </Fade>
            </div>
          );
        })}
        {skills.data.map((skill, index) => {
          return (
            <div key={index} className="skills-main-div -mt-[22px]">
              <Fade left duration={1500}>
                <div className="text-right">
                  <SoftwareSkill logos={skill.softwareSkills} />
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  )
}

GetSkillSvg.propTypes = {
  fileName: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Services
