import React from 'react'
import Magazine from './Magazines/Magazine'
import magazineItems from './Magazines/MagazineItems'
import {
    Container,
    ContainerHeader,
    ContainerInfo,
    ContainerPicture,
    InfoMain,
    Subtitle,
    Title,
    Text,
    MainButton,
    InfoPicture,
    ContainerMagazine,
    ContainerBox,
    ContainerPost,
    InfoBody,
    PicBody,
    Picture,
    ContainerBody,
    BodyButton,
} from './MainStyled'

const Main = () => {
    return (
        <Container>
            <ContainerHeader>
                <ContainerInfo>
                    <InfoMain>
                        <Subtitle>ATTENTION ONLINE ADVERTISERS</Subtitle>
                        <Title>What´s Your Online Advertising Readiness Rating?</Title>
                        <Text>When you take this quiz, you’ll get a free report that outlines YOUR Readiness Rating.</Text>
                        <MainButton>START QUIZ</MainButton>
                        <Text>Learn more about Readiness Raitings</Text>
                    </InfoMain>
                </ContainerInfo>
                <ContainerPicture>
                    <InfoPicture>Learning about my rating - and WHAT to do about it, has really changed the way I do online advertising. It is all about being a master at this craft, and staying there. Andrea - Barranquilla, Colombia.</InfoPicture>
                </ContainerPicture>   
            </ContainerHeader>
            <ContainerMagazine>
                    {magazineItems 
                        ? 
                            magazineItems.map((item, i) => (
                                <Magazine key={i} pics = {item.url} index={i} />)) 
                        :
                            <Title>There´s not Magazines</Title>
                    }
            </ContainerMagazine> 
            <ContainerBox>
                <ContainerPost>

                </ContainerPost>
            </ContainerBox>  
            <ContainerBox>
                <InfoBody>
                    <Subtitle weight='300' color='black'>WHY IT IS IMPORTANT</Subtitle>
                    <Title color='black'>Knowing Your Online Ads Readiness Raiting...</Title>
                    <Text top='30px' bottom='30px' color='black'>...will help you understand just how bullish you should be with your ad spend and where your blind spots are.</Text>

                    <Text bottom='30px' color='black'>When it comes to online advertising the more informed and ready you are, the more effective your advertising will be (and the greater your chances of a healthy Return on your Ad Spend (ROAS)).</Text>

                    <Text bottom='30px' color='black'>Find Out your Online Advertising Readiness Rating so you can make more money and avoid risks with your online advertising.</Text>
                </InfoBody>
                <PicBody>
                    <Picture size='80%' src='https://imgbox.es/images/2021/04/13/report5de505d7946d72a2.png' /> 
                </PicBody>
            </ContainerBox>  
            <ContainerBody>
                    <Title size='2.5rem' pTop='35px'>Find Out YOUR Online Advertising Readiness Rating!</Title>
                    <BodyButton>START QUIZ</BodyButton>
            </ContainerBody>  
            
            
        </Container> 
    )
};

export default Main;
