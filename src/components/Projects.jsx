import React from "react";
import styled from "styled-components";

import projectTemplate1 from "../assets/design JR.png";

// Estilos diretamente no arquivo com Styled Components
const ProjectsSection = styled.section`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 90px;
`;

const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 20px;
  color: #000000;
  font-family: "Josefin Sans", sans-serif;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  gap: 80px;
  font-family: "Josefin Sans", sans-serif;
  background-color: #004e91;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 75vw;
  height: auto;

  @media (max-width: 480px) {
    width: 95vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ImagesCard = styled.img`
  width: 700px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

const CardTextContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 480px) {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o botão */
    text-align: center; /* Garante que o texto também fique centralizado */
  }
`;

const ProjectTitle = styled.h3`
  font-size: 34px;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const ProjectDescription = styled.p`
  width: 30vw;
  font-size: 20px;
  color: #fff;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 20px;
    width: 90vw;
    margin-top: 30px;
  }
`;

const BottomCardContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

const MiniTechCard = styled.div`
  background-color: #979797;
  text-align: center;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 5px;
  font-size: 18px;
  color: white;
  font-weight: bold;
`;

const CardButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 150px;
  background-color: #84ffc6;
  border-radius: 3px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <Title>Projects</Title>
      <ProjectList>
        <ProjectCard>
          <a
            href="https://mauriciojuniortreinador.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImagesCard src={projectTemplate1} />
          </a>
          <CardTextContainer>
            <ProjectTitle>
              MJ Team – Website & Marketing Optimization
            </ProjectTitle>
            <ProjectDescription>
              I worked on the development and optimization of the MJ Team
              website, focusing on improving performance, user experience, and
              conversion rates. My contributions included: Website Development:
              Implemented responsive and high-performance pages integrated with
              APIs. Landing Page Optimization: Applied conversion-focused
              strategies to enhance user engagement. Technical Enhancements:
              Improved load speed, SEO structure, and mobile usability.
              Maintenance & Updates: Provided continuous improvements to ensure
              stability and scalability. By leveraging tools like React,
              Next.js, and TypeScript, along with analytics-driven adjustments,
              I helped refine the website to maximize its impact.
            </ProjectDescription>
            <BottomCardContainer>
              <MiniTechCard>ReactJS</MiniTechCard>
              <MiniTechCard>Git & GitHub</MiniTechCard>
              <MiniTechCard>TypeScript</MiniTechCard>
              <MiniTechCard>FireBase</MiniTechCard>
              <MiniTechCard>CSS</MiniTechCard>
              <MiniTechCard>HTML</MiniTechCard>
              <MiniTechCard>reactjs</MiniTechCard>
            </BottomCardContainer>
            <CardButton href="https://mauriciojuniortreinador.com/">
              Visit Website
            </CardButton>
          </CardTextContainer>
        </ProjectCard>
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;