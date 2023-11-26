import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "assets/portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, index) => (
        <a
          key={index}
          href={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper {...media} {...props}>
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
          </IconWrapper>
        </a>
      ))}
    </div>
  );
}
