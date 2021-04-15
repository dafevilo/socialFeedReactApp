import React, { useState } from "react";
import {
  ContainerConfig,
  InputConfig,
  TextConfig,
  ButtonConfig,
} from "./ConfigStyled";

const Config = ({ changeSetUp, setUp }) => {
  const [input, setInput] = useState({
    link: "",
    cant: setUp.cant,
    id: setUp.id,
  });

  const handlerInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContainerConfig>
      <TextConfig size="2.5rem" weight="800" align="center">
        SetUp
      </TextConfig>
      <TextConfig>Link Feed</TextConfig>
      <InputConfig
        type="text"
        placeholder={setUp.link}
        autoComplete="off"
        value={input.link}
        name="link"
        onChange={handlerInput}
      />
      <TextConfig>Cant</TextConfig>
      <InputConfig
        type="number"
        autoComplete="off"
        value={input.cant}
        name="cant"
        onChange={handlerInput}
      />
      <TextConfig>ID</TextConfig>
      <InputConfig
        type="number"
        autoComplete="off"
        value={input.id}
        name="id"
        onChange={handlerInput}
      />
      <ButtonConfig onClick={() => changeSetUp(input)}>OK</ButtonConfig>
    </ContainerConfig>
  );
};

export default Config;
