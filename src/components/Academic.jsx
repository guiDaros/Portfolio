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
      <Title>Academic & Certifieds</Title>
      <HighlightedCourses>
        <CourseCard>
          <CourseHeader>
            <CourseTitle>Computer Science</CourseTitle>
            <CourseProvider>ATITUS Educação </CourseProvider>
          </CourseHeader>
          <CourseTags>Computer Science</CourseTags>
          <CourseDetails>
            I am currently at the first semester of my Bachelor's degree in
            Computer Science in the university ATITUS in Passo Fundo, RS.
          </CourseDetails>
        </CourseCard>

        <CourseCard>
          <CourseHeader>
            <CourseTitle>FullStack Developer</CourseTitle>
            <CourseProvider>DevClub</CourseProvider>
          </CourseHeader>
          <CourseTags>
            JavaScript, TypeScript, Node, React, Databases, HTML, CSS
          </CourseTags>
          <CourseDetails>
            Completed the DevClub programming course, covering fundamental and
            advanced concepts, best coding practices, and real-world project
            development with FullStack projects.
          </CourseDetails>
          <CertificateButton
            href="https://aulas.devclub.com.br/verify/5d7fc5636c75d78390ad142a0ceb5df9aada5e3c"
            target="_blank"
          >
            Acess Certificate
          </CertificateButton>
        </CourseCard>

        <CourseCard>
          <CourseHeader>
            <CourseTitle>Advanced English</CourseTitle>
            <CourseProvider>CIPEX Idiomas</CourseProvider>
          </CourseHeader>
          <CourseTags>English</CourseTags>
          <CourseDetails>
            Studied English at Cipex Idiomas for 10 years, achieving advanced
            proficiency in grammar, conversation, writing, and comprehension.
            The course provided an immersive learning, enhancing fluency and
            communication skills.
          </CourseDetails>
        </CourseCard>

        <CourseCard>
          <CourseHeader>
            <CourseTitle>Advanced English</CourseTitle>
            <CourseProvider>EC English School</CourseProvider>
          </CourseHeader>
          <CourseTags>English</CourseTags>
          <CourseDetails>
            Studied English at EC English School intensive program for 1 month
            in Cambridge, UK, where I reached the peak of my English
            proficiency. This experience allowed me to immerse myself in the
            language, practice daily with native speakers, and refine my
            communication skills in real-world situations.
          </CourseDetails>
        </CourseCard>
      </HighlightedCourses>

      <SecondaryTitle style={{ color: "#0078cd", marginTop: "20px" }}>
        Cursos Complementares
      </SecondaryTitle>
      <ComplementaryList>
        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>Git e GitHub (w/ gist e GitHubPages)</CourseTitle>
            <CourseProvider>Matheus Battisti</CourseProvider>
          </CourseHeader>
          <CourseTags>Versionamento, Git, GitHub</CourseTags>
          <CourseDetails>
            Git and GitHub from basic to advanced, including version control,
            branches, pull requests, GitHub Pages, and Gist for practical code
            sharing.
          </CourseDetails>
          <CertificateButton
            href="https://ude.my/UC-50d0300d-1c81-43e9-a402-ea4b41843d9f"
            target="_blank"
          >
            Acess Certificate
          </CertificateButton>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>TypeScript (w/ React, Express)</CourseTitle>
            <CourseProvider>Matheus Battisti</CourseProvider>
          </CourseHeader>
          <CourseTags>TypeScript, React, Express</CourseTags>
          <CourseDetails>
            TypeScript from basic to advanced, applying it in projects with
            React and Express. Focused on typing, interfaces, generics, and best
            practices for writing safer and more scalable code.
          </CourseDetails>
          <CertificateButton
            href="https://www.udemy.com/certificate/UC-bf0a5a75-cfea-4c11-942a-e5d812b15ead/"
            target="_blank"
          >
            Acess Certificate
          </CertificateButton>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>Python Course</CourseTitle>
            <CourseProvider>Hugo Vasconcelos</CourseProvider>
          </CourseHeader>
          <CourseTags>Python</CourseTags>
          <CourseDetails>
            Python fundamentals, covering syntax, data structures, and practical
            applications.
          </CourseDetails>
          <CertificateButton
            href="https://www.udemy.com/certificate/UC-c9e3cf3f-e77a-4999-bd53-968c91be6bce/"
            target="_blank"
          >
            Acess Certificate
          </CertificateButton>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>Oratory Course</CourseTitle>
            <CourseProvider>Bespeak</CourseProvider>
          </CourseHeader>
          <CourseTags>Comunication, Oratory, Team Work</CourseTags>
          <CourseDetails>
            Completed an intensive course on public speaking, communication, and
            presentation skills, focusing on voice modulation, body language,
            and audience engagement for confident and impactful delivery.
          </CourseDetails>
        </SmallCourseCard>

        <SmallCourseCard>
          <CourseHeader>
            <CourseTitle>
              React Developer Course (w/ Hooks and Redux)
            </CourseTitle>
            <CourseProvider>Andrew Mead</CourseProvider>
          </CourseHeader>
          <CourseTags>React, Redux</CourseTags>
          <CourseDetails>
            React, working with Hooks, Redux, and building modern, scalable
            applications
          </CourseDetails>
          <CertificateButton
            href="https://www.udemy.com/certificate/UC-6fd5aa74-4d23-4eb7-a255-264157dffad5/"
            target="_blank"
          >
            Acess Certificate
          </CertificateButton>
        </SmallCourseCard>
      </ComplementaryList>
    </AcademicWrapper>
  );
};

export default Academic;
