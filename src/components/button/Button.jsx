import React from "react";
import { darkTheme } from "theme"
import "./Button.css";
import PropTypes from 'prop-types';

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function Button({ text, className, href, newTab, theme }) {
  theme = darkTheme;
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: theme.text,
          backgroundColor: theme.body,
          border: `solid 0px ${theme.orange}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.orange, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.text, theme.body)}
      >
        {text}
      </a>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
};
