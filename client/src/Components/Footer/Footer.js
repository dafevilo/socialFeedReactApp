import React from "react";
import {
  ContainerFooter,
  PicFooter,
  SubtitleFooter,
  TextFooter,
} from "./FooterStyled";

const Footer = () => {
  return (
    <ContainerFooter>
      <TextFooter>©2019 Tidal Traffic. All rights reserved.</TextFooter>
      <TextFooter>©2019 Tidal Traffic. All rights reserved.</TextFooter>
      <TextFooter>About Us | Terms of Service | Privacy Policy</TextFooter>
      <PicFooter src="https://imgbox.es/images/2021/04/13/LogoFooter2e9669d64dd84b24.png" />
      <SubtitleFooter>©2019 Tidal Traffic. All rights reserved.</SubtitleFooter>
    </ContainerFooter>
  );
};

export default Footer;
