import React from "react";
import styled from "styled-components";

const AcademicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const Title = styled.h2`
  width: 100vw;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #0078cd;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin: 0;

  font-family: "Josefin Sans", sans-serif;
  font-size: 43px;
`;

const HighlightedCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1000px;
`;

const CourseCard = styled.div`
  background: #0078cd;
  color: white;
  padding: 20px;
  border-radius: 12px;

  font-size: 18px;
  font-weight: bold;
  font-family: "Tektur", serif;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 400px;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 120, 205, 0.4);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(
      to top,
      rgb(40, 120, 205),
      rgba(40, 120, 205, 0.962),
      rgba(40, 120, 205, 0.7),
      transparent
    );
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const SmallCourseCard = styled(CourseCard)`
  width: 250px;
  height: 350px;
`;

const CourseHeader = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
`;

const CourseTitle = styled.h4`
  font-size: 23px;
  margin-bottom: 5px;
  font-family: "Josefin Sans", sans-serif;

  position: start;
`;

const SecondaryTitle = styled.h3`
  font-family: "Josefin Sans", sans-serif;
  font-size: 34px;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const CourseProvider = styled.p`
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 8px;
`;

const CourseTags = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 12px;
  opacity: 0.9;
`;

const CourseDetails = styled.p`
  font-size: 14px;
  color: white;
  opacity: 0.9;
`;

const CertificateButton = styled.a`
  display: block;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  background: #ffffff;
  z-index: 2;
  border-radius: 6px;

  color: black;
  font-family: "Josefin Sans", sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${CourseCard}:hover &, ${SmallCourseCard}:hover & {
    opacity: 1;
  }
`;

const ComplementaryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  font-size: 14px;
  color: #0078cd;
  opacity: 0.8;
`;

const Academic = () => {
  return (
    <AcademicWrapper>
      <Title>Formação Acadêmica & Certificados</Title>
      <HighlightedCourses>
        <CourseCard>
          <CourseHeader>
            <CourseTitle>Ciência da Computação</CourseTitle>
            <CourseProvider>ATITUS Educação</CourseProvider>
          </CourseHeader>
          <CourseTags>Ciência da Computação</CourseTags>
          <CourseDetails>
            Atualmente estou cursando Ciência da Computação na universidade
            ATITUS em Passo Fundo, RS.
          </CourseDetails>
        </CourseCard>

        <CourseCard>
          <CourseHeader>
            <CourseTitle>Desenvolvedor FullStack</CourseTitle>
            <CourseProvider>DevClub</CourseProvider>
          </CourseHeader>
          <CourseTags>
            JavaScript, TypeScript, Node, React, Bancos de Dados, HTML, CSS
          </CourseTags>
          <CourseDetails>
            Curso de programação do DevClub concluído, cobrindo conceitos
            fundamentais e avançados, boas práticas de codificação e
            desenvolvimento de projetos reais com foco FullStack.
          </CourseDetails>
          <CertificateButton
            href="https://aulas.devclub.com.br/verify/5d7fc5636c75d78390ad142a0ceb5df9aada5e3c"
            target="_blank"
          >
            Acessar Certificado
          </CertificateButton>
        </CourseCard>

        <CourseCard>
          <CourseHeader>
            <CourseTitle>Inglês Avançado</CourseTitle>
            <CourseProvider>CIPEX Idiomas</CourseProvider>
          </CourseHeader>
          <CourseTags>Inglês</CourseTags>
          <CourseDetails>
            Estudei inglês no CIPEX Idiomas por 10 anos, alcançando proficiência
            avançada em gramática, conversação, escrita e compreensão. O curso
            proporcionou uma aprendizagem imersiva, aprimorando minha fluência e
            habilidades de comunicação.
          </CourseDetails>
        </CourseCard>

        <CourseCard>
          <CourseHeader>
            <CourseTitle>Inglês Avançado</CourseTitle>
            <CourseProvider>EC English School</CourseProvider>
          </CourseHeader>
          <CourseTags>Inglês</CourseTags>
          <CourseDetails>
            Estudei inglês em um programa intensivo da EC English School por 1
            mês em Cambridge, Reino Unido, onde atingi o auge da minha
            proficiência. Essa experiência me permitiu uma imersão total no
            idioma, praticando diariamente com falantes nativos e aprimorando
            minhas habilidades comunicativas em situações reais.
          </CourseDetails>
        </CourseCard>
      </HighlightedCourses>

      <SecondaryTitle style={{ color: "#0078cd", marginTop: "20px" }}>
        Additional courses
      </SecondaryTitle>
      <ComplementaryList>
        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>Git e GitHub (com Gist e GitHubPages)</CourseTitle>
            <CourseProvider>Matheus Battisti</CourseProvider>
          </CourseHeader>
          <CourseTags>Versionamento, Git, GitHub</CourseTags>
          <CourseDetails>
            Git e GitHub do básico ao avançado, incluindo controle de versão,
            branches, pull requests, GitHub Pages e Gist para compartilhamento
            prático de código.
          </CourseDetails>
          <CertificateButton
            href="https://ude.my/UC-50d0300d-1c81-43e9-a402-ea4b41843d9f"
            target="_blank"
          >
            Acessar Certificado
          </CertificateButton>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>TypeScript (com React, Express)</CourseTitle>
            <CourseProvider>Matheus Battisti</CourseProvider>
          </CourseHeader>
          <CourseTags>TypeScript, React, Express</CourseTags>
          <CourseDetails>
            TypeScript do básico ao avançado, aplicado em projetos com React e
            Express. Foco em tipagem, interfaces, generics e boas práticas para
            escrever código mais seguro e escalável.
          </CourseDetails>
          <CertificateButton
            href="https://www.udemy.com/certificate/UC-bf0a5a75-cfea-4c11-942a-e5d812b15ead/"
            target="_blank"
          >
            Acessar Certificado
          </CertificateButton>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>AI and Machine Learning in AgTech</CourseTitle>
            <CourseProvider>Udemy</CourseProvider>
          </CourseHeader>
          <CourseTags>AI, Machine Learning, AgTech, Python</CourseTags>
          <CourseDetails>
            Curso sobre aplicação de Inteligência Artificial e Machine Learning
            no setor agrícola, focado em soluções tecnológicas para otimização e
            inovação.
          </CourseDetails>
          <CertificateButton
            href="https://www.udemy.com/certificate/UC-fa595722-be35-4d1f-bf55-eb2024ebeb53/"
            target="_blank"
          >
            Acessar Certificado
          </CertificateButton>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>Bootstrap 5 Avançado</CourseTitle>
            <CourseProvider>Udemy</CourseProvider>
          </CourseHeader>
          <CourseTags>Bootstrap, CSS, Frontend, Design Responsivo</CourseTags>
          <CourseDetails>
            Curso avançado de Bootstrap 5, abordando componentes avançados,
            customização, grid system e melhores práticas para desenvolvimento
            frontend responsivo.
          </CourseDetails>
          <CertificateButton
            href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-239f7be7-ff5d-4b46-bd10-813dc74c8560.pdf"
            target="_blank"
          >
            Acessar Certificado
          </CertificateButton>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>Gulp, CSS e JavaScript</CourseTitle>
            <CourseProvider>Elevor Softwares</CourseProvider>
          </CourseHeader>
          <CourseTags>
            Gulp, CSS, JavaScript, Automação, Frontend, Design Responsivo
          </CourseTags>
          <CourseDetails>
            Curso completo que aborda automação de tarefas com Gulp, fundamentos
            e técnicas avançadas de CSS, além de JavaScript moderno para
            desenvolvimento frontend eficiente.
          </CourseDetails>
          <CertificateButton
            href="https://www.linkedin.com/in/guilherme-vassoller-daros/details/certifications/1752284735442/single-media-viewer/?type=DOCUMENT&profileId=ACoAADxQfIsBfHnZ6a-4Hv3gOxp6Zny5V-UTcRc"
            target="_blank"
          >
            Acessar Certificado
          </CertificateButton>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>
              Futurismo e Tecnologia Ligados à Criatividade
            </CourseTitle>
            <CourseProvider>Even3 - Atitus</CourseProvider>
          </CourseHeader>
          <CourseTags>Futurismo, Tecnologia, Criatividade, Inovação</CourseTags>
          <CourseDetails>
            Curso que explora as tendências futuristas e o impacto da tecnologia
            na criatividade e inovação, estimulando novas formas de pensar e
            criar.
          </CourseDetails>
          <CertificateButton
            href="https://www.linkedin.com/in/guilherme-vassoller-daros/details/certifications/1743209597401/single-media-viewer/?type=IMAGE&profileId=ACoAADxQfIsBfHnZ6a-4Hv3gOxp6Zny5V-UTcRc"
            target="_blank"
          >
            Acessar Certificado
          </CertificateButton>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>Curso de Python</CourseTitle>
            <CourseProvider>Hugo Vasconcelos</CourseProvider>
          </CourseHeader>
          <CourseTags>Python</CourseTags>
          <CourseDetails>
            Fundamentos de Python, incluindo sintaxe, estruturas de dados e
            aplicações práticas.
          </CourseDetails>
          <CertificateButton
            href="https://www.udemy.com/certificate/UC-c9e3cf3f-e77a-4999-bd53-968c91be6bce/"
            target="_blank"
          >
            Acessar Certificado
          </CertificateButton>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>Curso de Oratória</CourseTitle>
            <CourseProvider>Bespeak</CourseProvider>
          </CourseHeader>
          <CourseTags>Comunicação, Oratória, Trabalho em Equipe</CourseTags>
          <CourseDetails>
            Curso intensivo de oratória, comunicação e apresentação, com foco em
            modulação de voz, linguagem corporal e engajamento da audiência para
            apresentações confiantes e impactantes.
          </CourseDetails>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>Curso de React (com Hooks e Redux)</CourseTitle>
            <CourseProvider>Andrew Mead</CourseProvider>
          </CourseHeader>
          <CourseTags>React, Redux</CourseTags>
          <CourseDetails>
            Curso de React, utilizando Hooks, Redux e construção de aplicações
            modernas e escaláveis.
          </CourseDetails>
          <CertificateButton
            href="https://www.udemy.com/certificate/UC-6fd5aa74-4d23-4eb7-a255-264157dffad5/"
            target="_blank"
          >
            Acessar Certificado
          </CertificateButton>
        </SmallCourseCard>
      </ComplementaryList>
    </AcademicWrapper>
  );
};

export default Academic;
