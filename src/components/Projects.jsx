import React from "react";
import styled from "styled-components";

import projectTemplate1 from "../assets/design JR.png";
import projectTemplate2 from "../assets/designpadariadaros.png";
import projectTemplate3 from "../assets/designdevburger.png";

// Estilos com Styled Components
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

  @media (max-width: 1800px) {
    width: 95vw;
  }

  @media (max-width: 1300px) {
    width: 80vw;

    gap: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    width: 95vw;
  }
`;

const ImagesCard = styled.img`
  width: 700px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1300px) {
    width: 75vw;
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

const CardTextContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    margin-top: 0;
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

  @media (max-width: 1300px) {
    margin-top: 50px;
    width: 60vw;
    font-size: 22px;
  }

  @media (max-width: 480px) {
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

  @media (max-width: 1300px) {
    width: 50vw;
    align-items: center;
    justify-content: center;
  }

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

  @media (max-width: 1300px) {
    width: 30vw;
  }
`;
const Projects = () => {
  return (
    <ProjectsSection>
      <Title>Projetos</Title>
      <ProjectList>
        {/* Projeto 1 */}
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
              MJ Team – Otimização de Site e Marketing
            </ProjectTitle>
            <ProjectDescription>
              Atuei no desenvolvimento e otimização do site da MJ Team, com foco
              em performance, experiência do usuário e conversão.
              <br />
              <br />
              <strong>Principais entregas:</strong>
              <br />
              - Páginas responsivas e de alto desempenho integradas com APIs.
              <br />
              - Estratégias de conversão aplicadas em landing pages.
              <br />
              - Melhorias em SEO, velocidade de carregamento e usabilidade
              mobile.
              <br />
              - Manutenção contínua para estabilidade e escalabilidade.
              <br />
              <br />
              Utilizei React, Next.js e TypeScript com apoio de dados analíticos
              para maximizar o impacto do site.
            </ProjectDescription>
            <BottomCardContainer>
              <MiniTechCard>ReactJS</MiniTechCard>
              <MiniTechCard>Git & GitHub</MiniTechCard>
              <MiniTechCard>TypeScript</MiniTechCard>
              <MiniTechCard>Firebase</MiniTechCard>
              <MiniTechCard>CSS</MiniTechCard>
              <MiniTechCard>HTML</MiniTechCard>
            </BottomCardContainer>
            <CardButton href="https://mauriciojuniortreinador.com/">
              Visitar Site
            </CardButton>
          </CardTextContainer>
        </ProjectCard>

        {/* Projeto 2 */}
        <ProjectCard>
          <a
            href="https://padaria-daros-menu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImagesCard src={projectTemplate2} />
          </a>
          <CardTextContainer>
            <ProjectTitle>
              Padaria Daros – Cardápio Digital / Landing Page
            </ProjectTitle>
            <ProjectDescription>
              Criação da página da Padaria Daros para apresentar os produtos de
              forma profissional, com foco em design moderno, porém tradicional
              ao mesmo tempo, além de responsividade e performance.
              <br />
              <br />
              <strong>Destaques:</strong>
              <br />
              - Interface limpa com React e Styled Components.
              <br />
              - Estrutura otimizada para SEO e acessibilidade.
              <br />- Integração direta com o cardápio e navegação fluida.
            </ProjectDescription>
            <BottomCardContainer>
              <MiniTechCard>ReactJS</MiniTechCard>
              <MiniTechCard>JavaScript</MiniTechCard>
              <MiniTechCard>Cloud Storage</MiniTechCard>
              <MiniTechCard>Firebase</MiniTechCard>
              <MiniTechCard>Vite</MiniTechCard>
            </BottomCardContainer>
            <CardButton href="https://padaria-daros-menu.vercel.app/">
              Visitar Site
            </CardButton>
          </CardTextContainer>
        </ProjectCard>

        <ProjectCard>
          <a
            href="https://github.com/guiDaros/Front-end-burger-shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImagesCard src={projectTemplate3} />
          </a>
          <CardTextContainer>
            <ProjectTitle>
              DevBurger / E-commerce – CRUD Completo de Pedidos
            </ProjectTitle>
            <ProjectDescription>
              Aplicação web completa para gerenciamento de pedidos para um
              gerenciamento profissional, com painel administrativo e interface
              do cliente. Projeto focado em operações CRUD, autenticação,
              experiência e segurança do usuário.
              <br />
              <br />
              <strong>Destaques:</strong>
              <br />
              - Interface do cliente e painel do administrador separados e
              seguros
              <br />
              - Funcionalidades de login, cadastro, edição e exclusão de
              produtos e pedidos
              <br />
              - Integração com banco de dados e consumo de API RESTful
              <br />- Design responsivo e usabilidade aprimorada
            </ProjectDescription>
            <BottomCardContainer>
              <MiniTechCard>ReactJS</MiniTechCard>
              <MiniTechCard>Styled Components</MiniTechCard>
              <MiniTechCard>TypeScript</MiniTechCard>
              <MiniTechCard>Node.js</MiniTechCard>
              <MiniTechCard>MongoDB</MiniTechCard>
              <MiniTechCard>PostgreSQL</MiniTechCard>
              <MiniTechCard>JavaScript</MiniTechCard>
            </BottomCardContainer>
            <CardButton href="https://github.com/guiDaros/Front-end-burger-shop">
              Visitar Site
            </CardButton>
          </CardTextContainer>
        </ProjectCard>
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
