import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { projectsHeader, projectcards } from "assets/portfolio.js";
// import { CardDeck } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { darkTheme } from "theme";

class Projects extends Component {
  render() {
    const theme = darkTheme;
    return (
      <div className="projects-main pb-[2rem]">
        <div className="basic-projects">
          <div className="fade-in">
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
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="repo-cards-div-main">
          <CardDeck className="flex flex-wrap w-[100%] border-1px rounded-lg shadow-xl">
            {projectcards.list.map((proj, index) => {
              return (
                <Card key={index} className="h-auto m-16 w-[20%] border-1px rounded-lg shadow-lg shadow-[#0e0e0e]
                  bg-[#005C99] bg-opacity-20 p-10 hover:bg-opacity-50 transition-all duration-1000 ease-in-out">
                  <Card.Body className="text-gray-400">
                    <Card.Title>
                      <h2 style={{ lineHeight: "1.5", marginTop: "0" }}>
                        {proj.title}
                        <br/>
                        <a
                          className="text-gray-400"
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
                              color: "white",
                            }}
                          >
                            {" "}
                            {demo.lang}
                          </Badge>
                        );
                      })}
                    </div>

                    <Card.Text 
                      className="text-justify text-gray-400 text-[13px] font-light sm:whitespace-normal">
                      {proj.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </CardDeck>
        </div> */}

        <div className="repo-cards-div-main">
          <Row className="flex flex-wrap w-full justify-center items-center border-1px rounded-lg shadow-xl">
            {projectcards.list.map((proj, index) => (
              <Col key={index} className="h-auto m-10 lg:w-4/12 sm-fit">
                <Link to={proj.link} target="_blank" rel="noopener noreferrer">
                  <Card className="border-1px rounded-lg shadow-lg shadow-[#0e0e0e] bg-[#005C99] bg-opacity-20 p-10 
                      hover:bg-opacity-50 transition-all duration-1000 ease-in-out">
                    <Card.Body className="text-gray-400">
                      <Card.Title>
                        <h2 style={{ lineHeight: "1.5", marginTop: "0" }}>
                          {proj.title}
                          <br />
                          <a
                            className="text-gray-400"
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
                        {proj.tags.map((demo, index) => (
                          <Badge
                            key={index}
                            style={{
                              marginRight: "1em",
                              backgroundColor: demo.color,
                              color: "white",
                            }}
                          >
                            {demo.lang}
                          </Badge>
                        ))}
                      </div>

                      <Card.Text className="text-justify mt-2 text-gray-400 text-[13px] font-light sm:whitespace-normal">
                        {proj.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Projects;
