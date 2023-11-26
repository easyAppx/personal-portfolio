import React, { Component } from "react";
import "./SoftwareSkill.css";
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';

class SoftwareSkill extends Component {
  render() {
    const { logos } = this.props;

    if (!logos || logos.length === 0) {
      // Handle the case when logos is undefined or an empty array
      return null; // or return some default content or a message
    }

    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {logos.map((logo) => (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                delay={{ show: 500, hide: 0 }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

SoftwareSkill.propTypes = {
  skillName: PropTypes.array.isRequired,
  logos: PropTypes.array.isRequired,
};

export default SoftwareSkill;
