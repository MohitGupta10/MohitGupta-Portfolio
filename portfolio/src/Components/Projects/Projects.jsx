import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
const Projects = () => {
  const projects = [
    {
      id: 1,
      project_name: "Lakme India Clone",
      image: "/project_images/Lakme-India.png",
      project_desc:
        "A web application to purchase high-end cosmetic products.Built using js,css,html",
      deploy_link: "https://lakme-india-clone-jp.netlify.app/",
      repo_link: "https://github.com/12Mohit-Gupta/Consruct-Week-Lakme-Project",
      tech_stack: [<FaJs />, <FaHtml5 />, <FaCss3 />],
    },

    {
      id: 2,
      project_name: "GROWW Clone",
      image: "/project_images/GROWW.png",
      project_desc:
        "An online stocks trading web app. Built using JS, Express, Node js & MongoDB.",
      deploy_link: "https://groww-clone-u3.netlify.app/",
      repo_link: "https://github.com/12Mohit-Gupta/Clone-of-Groww",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
        <FaNodeJs />,
        <SiMongodb />,
        <FaNodeJs />,
      ],
    },
    {
      id: 3,
      project_name: "Meesho-clone",
      image: "project_images/Meesho.png",
      project_desc:
        "This website based on E-Commerce.Built useing Reactjs,Mongodb,Nodejs,Express,Html,Css",
      deploy_link: "https://meesho-two.vercel.app/",
      repo_link: "https://github.com/MohitGupta10/meesho-app",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
        <FaNodeJs />,
        <SiMongodb />,
        <FaNodeJs />,
      ],
    },
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "15px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "15px 20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div className="iconsTechStack">{item}</div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
