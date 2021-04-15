import React from "react";
import dayjs from "dayjs";
import {
  ContainerMessages,
  BoxMessages,
  TextMessages,
  CloseButton,
} from "./MessagesStyled";

const Messages = ({ remove, message }) => {
  let date = dayjs(message.created_at).format("DD/MM/YYYY HH:MM");

  return (
    <ContainerMessages>
      <CloseButton onClick={() => remove(message.id)}>X</CloseButton>
      <BoxMessages>
        <TextMessages color="#000" size="18px">
          {message.text}
        </TextMessages>
        <TextMessages color="#6424FF" size="15px" weight="500">
          - {message.user.name}
        </TextMessages>
      </BoxMessages>
      <TextMessages size="18px" weigth="500">
        Posted: {date}
      </TextMessages>
    </ContainerMessages>
  );
};

export default Messages;
