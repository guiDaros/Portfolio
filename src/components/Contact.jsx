import React from "react";
import styled from "styled-components";

import LinkedinIcon from "../assets/business.png";
import InstagramIcon from "../assets/instagram.png";
import GithubIcon from "../assets/github-sign.png";

const FooterContainer = styled.footer`
  font-family: "Josefin Sans", sans-serif;

  margin-top: 80px;
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: #0078cd;
  color: #fff;
  position: relative;
  bottom: 0;

  @media (max-width: 480px) {
    flex-direction: column;
    height: 200px;
    justify-content: center;
    gap: 30px;
    text-align: center;
  }
`;

const LeftText = styled.p`
  font-size: 0.9rem;
`;

const CenterText = styled.p`
  font-size: 1rem;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.5rem;
`;

const IconLink = styled.a`
  transition: 0.3s;
  &:hover img {
    opacity: 0.7;
    transition: opacity 0.15s ease-in-out;
  }
`;

const IconImage = styled.img`
  width: 30px; /* Ajuste o tamanho conforme necessário */
  height: 30px;
`;

const Contact = () => {
  return (
    <FooterContainer>
      <LeftText>
        &copy; {new Date().getFullYear()} All rights reserved.
      </LeftText>
      <CenterText>Contact With: guilhermevassoller@gmail.com</CenterText>
      <IconsContainer>
        <IconLink
          href="https://www.linkedin.com/in/guilherme-vassoller-daros/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={LinkedinIcon} alt="LinkedIn" />
        </IconLink>
        <IconLink
          href="https://www.instagram.com/guilherme.vdaros/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={InstagramIcon} alt="Instagram" />
        </IconLink>
        <IconLink
          href="https://github.com/guiDaros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={GithubIcon} alt="GitHub" />
        </IconLink>
      </IconsContainer>
    </FooterContainer>
  );
};

export default Contact;
