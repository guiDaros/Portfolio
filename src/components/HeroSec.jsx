import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import Arrow from "../assets/seta-para-baixo.png";
import Linkedin from "../assets/business.png";
import Github from "../assets/github-sign.png";
import Instagram from "../assets/instagram.png";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* Define a altura do pulo */
  }
`;

const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 80px;
  width: 100vw;
  height: 80vh;
  padding: 60px 20px;
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-family: "Boldonse", sans-serif, "Tektur", serif;
  margin-top: 150px;
  font-size: 67px;
  transition: transform 0.05s ease-out; /* Animação suave */
  will-change: transform; /* Indica que o transform será alterado */

  color: #0e0e0e;
`;

const HeroSubtitle = styled.p`
  font-family: "Tektur", serif; /* Usando Tektur para o subtítulo */
  font-size: 1.5rem;
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;

  color: #0e0e0e;
`;

const ArrowImg = styled.img`
  align-items: center;
  justify-content: center;

  animation: ${bounceAnimation} 1.2s ease-in-out infinite; /* Aplica a animação */
`;

const SocialContainer = styled.div`
  position: absolute;
  left: 0; /* Ajuste a posição conforme necessário */
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background-color: #0078cd;
  border-radius: 0 10px 10px 0;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
    transition: opacity 0.15s ease-in-out;
  }
`;

const HeroSec = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Atualiza a posição do mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX, // Posição X do mouse
        y: e.clientY, // Posição Y do mouse
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Remove o evento de mouse quando o componente é desmontado
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <HeroWrapper>
      <SocialContainer>
        <a href="https://www.instagram.com/guilherme.vdaros/">
          <SocialIcon src={Instagram} alt="Facebook" />
        </a>
        <a href="https://github.com/guiDaros">
          <SocialIcon src={Github} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-vassoller-daros/">
          <SocialIcon src={Linkedin} alt="LinkedIn" />
        </a>
      </SocialContainer>

      <HeroSection>
        <HeroTitle
          style={{
            transform: `translate(${
              (mousePosition.x - window.innerWidth / 2) / 65
            }px, ${(mousePosition.y - window.innerHeight / 2) / 65}px)`,
          }}
        >
          Guilherme Vassoller Daros
        </HeroTitle>
        <HeroSubtitle>
          A Result-Oriented Developer building and managing Websites and
          Applications that lead to the success of overall products.
        </HeroSubtitle>
        <ArrowImg src={Arrow} alt="Seta para baixo" width={40} height={40} />
      </HeroSection>
    </HeroWrapper>
  );
};

export default HeroSec;
