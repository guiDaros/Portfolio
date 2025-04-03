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
`;

const ImagesCard = styled.img`
  width: 700px;
  transition: transform 0.5s ease-in-out; /* Animação suave */

  &:hover {
    transform: scale(1.03); /* Aumenta 10% no hover */
  }
`;
const CardTextContainer = styled.div`
  margin-top: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 34px;
  color: #fff;
`;

const ProjectDescription = styled.p`
  width: 30vw;

  font-size: 20px;
  color: #fff;

  margin-bottom: 30px;
`;

const BottomCardContainer = styled.div`
  width: 20vw;

  display: flex;
  flex-wrap: wrap;
  gap: 7px;

  margin-bottom: 20px;

`;

const MiniTechCard = styled.div`
  background-color: #979797;
  text-align: center;
  padding: 5px 10px; /* Adiciona um espaçamento interno */
  display: inline-block; /* Mantém o tamanho apenas do conteúdo */
  border-radius: 5px; /* Borda arredondada para um visual mais suave */
  font-size: 18px; /* Ajusta o tamanho do texto */
  color: white; /* Cor do texto para contraste */
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
  transition: transform 0.5s ease-in-out; /* Animação suave */

  &:hover {
    transform: scale(1.03); /* Aumenta 10% no hover */
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
              I helped refine the website to maximize its impact
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
        {/* <ProjectCard>
          <ProjectTitle>Projeto 2</ProjectTitle>
          <ProjectDescription>
            Um site de portfólio desenvolvido com React e API externa.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Projeto 3</ProjectTitle>
          <ProjectDescription>
            Outro projeto que desenvolvi utilizando Next.js e GraphQL.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Projeto 4</ProjectTitle>
          <ProjectDescription>
            Aplicação de ecommerce com React e Firebase.
          </ProjectDescription>
        </ProjectCard> */}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
