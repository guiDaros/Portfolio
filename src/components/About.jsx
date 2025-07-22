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
      <Title>Sobre Mim</Title>
      <Paragraph>
        Sou um <span>Desenvolvedor de Software</span> apaixonado por criar aplicações responsivas,
        amigáveis ao usuário e voltadas à resolução de problemas.
        <br />
        <br />
        Desenvolvi páginas com <span>APIs integradas</span> e ofereço manutenção contínua
        para garantir desempenho suave. <span>Para saber mais sobre meus projetos e
        habilidades técnicas, fique à vontade para visitar as seções dedicadas do meu
        portfólio.</span>
        <br />
        <br />
        Focado na otimização de performance e em um código limpo e sustentável, gosto
        de colaborar com equipes para dar vida a ideias e resolver desafios.
        <span>Sempre buscando crescer e entregar soluções de alta qualidade.</span>
      </Paragraph>
    </AboutSection>
  );
};

export default About;
