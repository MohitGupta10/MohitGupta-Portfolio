import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/mohit-gupta-5b22a0118/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/MohitGupta10",
    icon: <FaGithub />,
  },
 
];
const About = () => {
  return (
    <Container className="about">
      <br />
      <AboutDiv>
        <Column>
          <Img src="/images/Mohit.webp" alt="my image" />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
              A dedicated Full Stack Web developer with a specialized skill,After completing my graduation, I decided to learn full-stack web development thus I joined Masai School. I am proficient in JavaScript, ExpressJs, Node.js, HTML, and CSS. I also have the proven ability 
              to work efficiently in teams and solve problems analytically.
            </AboutInfoP>
            <AboutInfoP>
              I am problem-solving and analytics, I am passionate about solving
              Algorithmic problems with a good hold on Data Structures.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
      <br />
    </Container>
  );
};

export default About;
