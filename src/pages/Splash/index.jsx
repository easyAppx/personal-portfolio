import React from "react";
import "./Splash.css";
import { useNavigate } from "react-router-dom";
import { darkTheme } from "theme"
import LoaderLogo from "components/Loader/LoaderLogo.js";

function AnimatedSplash() {

  const theme = darkTheme;

  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: theme.body }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
}

function Splash() {
  const navigate = useNavigate();  // useNavigate hook

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");  // Use navigate to redirect
    }, 1000);

    return () => clearTimeout(timeoutId);  // Cleanup function
  }, [navigate]);

  return  <AnimatedSplash />;
}

export default Splash;
