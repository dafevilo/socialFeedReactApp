import React, { useEffect } from "react";
import Magazine from "./Magazines/Magazine";
import magazineItems from "./Magazines/MagazineItems";
import { useDispatch, useSelector } from "react-redux";
import { load, remove, status, setup } from "../../Redux/thunks";
import { getLimitMessages, getSetUp } from "../../Redux/Selectors";
import {
  Container,
  Title,
  ContainerMagazine,
  ContainerBox,
  ContainerPost,
  IconButton,
  IconPic,
} from "./MainStyled";
import Messages from "./Messages/Messages";
import Header from "./InfoMain/Header";
import Body from "./InfoMain/Body";
import FootBody from "./InfoMain/FootBody";
import Config from "./Config/Config";

const Main = () => {
  let limitedMessages = useSelector((state) => getLimitMessages(state));

  let setUp = useSelector((state) => getSetUp(state));

  const dispatch = useDispatch();

  const loadingMessages = (link) => dispatch(load(link));

  const removeMessages = (id) => dispatch(remove(id));

  const changeStatus = () => dispatch(status());

  const changeSetUp = (payload) => dispatch(setup(payload));

  let content =
    limitedMessages[0] !== undefined ? (
      limitedMessages.map((item, i) => (
        <Messages key={i} remove={removeMessages} message={item} />
      ))
    ) : (
      <Title color="#fff">There´s not Messages</Title>
    );

  useEffect(() => {
    loadingMessages(setUp.link);
  }, [setUp]);

  return (
    <Container>
      <Header />
      <ContainerMagazine>
        {magazineItems ? (
          magazineItems.map((item, i) => (
            <Magazine key={i} pics={item.url} index={i} />
          ))
        ) : (
          <Title>There´s not Magazines</Title>
        )}
      </ContainerMagazine>
      <ContainerBox>
        <ContainerPost>
          <IconButton onClick={() => changeStatus()}>
            <IconPic src="https://imgbox.es/images/2021/04/15/settings93865d717b293d72.png" />
          </IconButton>
          {setUp.status ? (
            content
          ) : (
            <Config changeSetUp={changeSetUp} setUp={setUp} />
          )}
        </ContainerPost>
      </ContainerBox>
      <Body />
      <FootBody />
    </Container>
  );
};

export default Main;
