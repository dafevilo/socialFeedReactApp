import styled from "styled-components";

export const ContainerMessages = styled.div`
  width: 90%;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
`;

export const BoxMessages = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
`;

export const TextMessages = styled.h1`
  color: ${(props) => props.color || "#fff"};
  font-size: ${(props) => props.size || "10px"};
  font-weight: ${(props) => props.weight || "400"};
  margin: 5px;
`;

export const CloseButton = styled.button`
  position: relative;
  top: 25px;
  right: 8px;
  align-self: flex-end;
  width: 20px;
  heigth: 20px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  background-color: red;
  border-radius: 5px;
  border: 0;
  outline: 0 none;

  &:hover {
    color: red;
    font-weight: 900;
    background-color: #fff;
  }
`;
