import styled from "styled-components";

export const ContainerConfig = styled.div`
  width: 50%;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 40px 20px 40px;
  margin: 20px;

  @media (max-width: 828px) {
    width: 80%;
  }

  @media (max-width: 399px) {
    width: 100%;
  }
`;

export const InputConfig = styled.input`
  width: 100%;
  heigth: 10px;
  border: 2px solid #000;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 1em;
`;

export const TextConfig = styled.h1`
  font-size: ${(props) => props.size || "1.6rem"};
  align-self: ${(props) => props.align || "flex-start"};
  font-weight: ${(props) => props.weight};
  margin: 10px;
`;

export const ButtonConfig = styled.button`
  border: 0;
  outline: 0 none;
  width: 160px;
  height: 60px;
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  margin: 15px;
  background-color: #06f48a;
`;

export const ContainerSetUp = styled.div`
  position: fixed;
  top: 0px;
  min-width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
