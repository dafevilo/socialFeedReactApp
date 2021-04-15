import React from "react";
import {
  ContainerBox,
  InfoBody,
  Subtitle,
  Title,
  Text,
  PicBody,
  Picture,
} from "../MainStyled";

const Body = () => {
  return (
    <ContainerBox>
      <InfoBody>
        <Subtitle weight="300" color="#000">
          WHY IT IS IMPORTANT
        </Subtitle>
        <Title color="#000">Knowing Your Online Ads Readiness Raiting...</Title>
        <Text top="30px" bottom="30px" color="#000">
          ...will help you understand just how bullish you should be with your
          ad spend and where your blind spots are.
        </Text>

        <Text bottom="30px" color="#000">
          When it comes to online advertising the more informed and ready you
          are, the more effective your advertising will be (and the greater your
          chances of a healthy Return on your Ad Spend (ROAS)).
        </Text>

        <Text bottom="30px" color="#000">
          Find Out your Online Advertising Readiness Rating so you can make more
          money and avoid risks with your online advertising.
        </Text>
      </InfoBody>
      <PicBody>
        <Picture
          size="80%"
          src="https://imgbox.es/images/2021/04/13/report5de505d7946d72a2.png"
        />
      </PicBody>
    </ContainerBox>
  );
};

export default Body;
