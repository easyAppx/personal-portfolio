import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import { Fade } from "react-reveal";
import { projectsHeader, projectcards } from "assets/portfolio.js";
import { CardDeck, Card } from "react-bootstrap";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { darkTheme } from "theme";

class Projects extends Component {
  render() {
    const theme = darkTheme;
    return (
      <div className="projects-main pb-[2rem]">
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.orange }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          <CardDeck>
            {projectcards.list.map((proj, index) => {
              return (
                <Card key={index} className="h-auto m-16">
                  <Card.Body className="">
                    <Card.Title>
                      <h2 style={{ lineHeight: "1.5", marginTop: "0" }}>
                        {proj.title}
                        <br/>
                        <a
                          style={{ color: theme.text }}
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Site
                        </a>

                        <a
                          style={{ color: theme.text }}
                          href={proj.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className={`fab fa-github`}
                            style={{
                              fontSize: "2em",
                              color: proj.linkcolor,
                              paddingLeft: "10px",
                            }}
                          ></i>
                        </a>
                      </h2>
                    </Card.Title>
                    <div>
                      {proj.tags.map((demo, index) => {
                        return (
                          <Badge
                            key={index}
                            style={{
                              marginRight: "1em",
                              backgroundColor: demo.color,
                            }}
                          >
                            {" "}
                            {demo.lang}
                          </Badge>
                        );
                      })}
                    </div>

                    <Card.Text className="text-center lg:whitespace-pre sm:whitespace-normal">
                      {proj.description}
                    </Card.Text>
                  </Card.Body>

                  {/* <Card.Img
                    variant="top"
                    src={require(`assets/logo/logo-1.png`)}
                  /> */}
                </Card>
              );
            })}
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default Projects;
