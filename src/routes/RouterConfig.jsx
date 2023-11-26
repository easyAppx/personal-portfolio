import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, MyProjects, Splash, ContactMe, AboutMe } from "pages";
import { HOME,  MY_PROJECTS, SPLASH, CONTACT_ME, ABOUT_ME } from "./CONSTANTS";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={SPLASH} element={<Splash />} />
        <Route path={MY_PROJECTS} element={<MyProjects/>} />
        <Route path={CONTACT_ME} element={<ContactMe />} />
        <Route path={ABOUT_ME} element={<AboutMe />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
