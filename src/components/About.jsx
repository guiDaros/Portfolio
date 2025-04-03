import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-bottom: 50px;
  background-color: #0078cd;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 40px;
    padding: 40px 20px;
    height: 120vh;
  }
`;

const Title = styled.h2`
  font-size: 54px;
  margin-bottom: 20px;
  color: #fff;
  font-family: "Josefin Sans", sans-serif;

  @media (max-width: 768px) {
    font-size: 45px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 45px;
  }
`;

const Paragraph = styled.p`
  font-size: 25px;
  color: #fff;
  font-family: "Tektur", serif;
  width: 80vw;
  text-align: center;

  span {
    color: #84ffc6;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    width: 90vw;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    width: 95vw;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <Title>About Me</Title>
      <Paragraph>
        I’m a <span>Software Developer</span> passionate about building responsive,
        user-friendly, problem solving applications.
        <br />
        <br />
        I’ve developed pages with <span>integrated APIs</span> and provide ongoing
        maintenance for smooth performance. <span>To learn more about my projects and
        technical skills, feel free to visit the dedicated sections of my
        portfolio.</span>
        <br />
        <br />
        Focused on performance optimization and clean, maintainable code, I
        enjoy collaborating with teams to bring ideas to life and solve
        challenges. <span>Always eager to grow and deliver high-quality solutions.</span>
      </Paragraph>
    </AboutSection>
  );
};

export default About;
