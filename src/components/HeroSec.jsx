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
    transform: translateY(-10px);
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
  position: relative;
  gap: 80px;
  width: 100vw;
  height: 80vh;
  padding: 60px 20px;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    height: 95vh;
  }
`;

const HeroTitle = styled.h1`
  font-family: "Boldonse", sans-serif, "Tektur", serif;
  margin-top: 150px;
  font-size: 67px;
  transition: transform 0.05s ease-out;
  will-change: transform;
  color: #0e0e0e;

  @media (max-width: 768px) {
    font-size: 50px;
    margin-top: 160px;
  }

  @media (max-width: 480px) {
    font-size: 50px;
    margin-top: 160px;
  }
`;

const HeroSubtitle = styled.p`
  font-family: "Tektur", serif;
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
  animation: ${bounceAnimation} 1.2s ease-in-out infinite;

  @media (max-width: 768px) {
    margin-bottom: 27px;
  }
`;

const SocialContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #0078cd;
  padding: 10px;
  border-radius: 0 10px 10px 0;

  @media (max-width: 768px) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    border-radius: 0 0 10px 10px;
  }
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <HeroWrapper>
      <SocialContainer>
        <a href="https://www.instagram.com/guilherme.vdaros/">
          <SocialIcon src={Instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/guiDaros">
          <SocialIcon src={Github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-vassoller-daros/">
          <SocialIcon src={Linkedin} alt="LinkedIn" />
        </a>
      </SocialContainer>

      <HeroSection>
        <HeroTitle
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 65}px, ${(mousePosition.y - window.innerHeight / 2) / 65}px)`,
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
