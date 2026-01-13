import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            <br /><br />
            Hello! My name is <strong>Ashid N</strong>  I'm a recent graduate and aspiring MERN stack developer with a passion for creating seamless and user-friendly web applications. Proficient in React.js, Node.js, and Express, I've applied my skills in various projects, including [mention a significant project]. My academic background, coupled with hands-on experience, has equipped me with a strong foundation in frontend and backend development, as well as database management using MongoDB. Eager to contribute to innovative projects and grow as a developer, I am actively seeking opportunities to join a dynamic team where I can apply my skills, learn from experienced professionals, and contribute to building cutting-edge solutions..
            </ScrollAnimation>

            <br /><br />
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
