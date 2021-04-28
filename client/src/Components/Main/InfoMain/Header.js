import React from "react";
import {
  ContainerHeader,
  ContainerInfo,
  InfoMain,
  Subtitle,
  Title,
  Text,
  MainButton,
  ContainerPicture,
  InfoPicture,
} from "../MainStyled";

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerInfo>
        <InfoMain>
          <Subtitle color="#fff">ATTENTION ONLINE ADVERTISERS</Subtitle>
          <Title color="#fff">What´s Your Online Advertising Readiness Rating?</Title>
          <Text color="#fff">
            When you take this quiz, you’ll get a free report that outlines YOUR
            Readiness Rating.
          </Text>
          <MainButton>START QUIZ</MainButton>
          <Text color="#fff">Learn more about Readiness Raitings</Text>
        </InfoMain>
      </ContainerInfo>
      <ContainerPicture>
        <InfoPicture>
          Learning about my rating - and WHAT to do about it, has really changed
          the way I do online advertising. It is all about being a master at
          this craft, and staying there. Andrea - Barranquilla, Colombia.
        </InfoPicture>
      </ContainerPicture>
    </ContainerHeader>
  );
};

export default Header;
