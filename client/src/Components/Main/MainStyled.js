import styled from 'styled-components'

export const changeColor = (color) => (
    color === 'black' 
        ? '#000'
        : '#fff'
)

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const ContainerHeader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerInfo = styled.div`
    width: 50%;
    height: 100%;
    background-color: #6424FF;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 828px){
        position: absoulte;
        width: 90%;
        height: 79%;
        margin-top: 10%;
    }

    @media (max-width: 399px){
        margin-top: 0;
    }
`;

export const InfoMain = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 80%;
    min-height: 70%;

    @media (max-width: 828px){
        margin-top: 0px;
    }
`;

export const Subtitle = styled.h6`
    color: ${props => changeColor(props.color)};
    font-size: 15px;
    font-weight: ${props => props.weight || '100'};
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Title = styled.h1`
    color: ${props => changeColor(props.color)};
    font-size: ${props => props.size || '3rem'};
    font-weight: 900;
    margin-top: 10px;
    margin-bottom: 10px;

    position: relative;
    top: ${props => props.pTop || '0px'};

    @media (max-width: 1200px){
        top: 0px;
    }

    @media (max-width: 828px){
        font-size: 2.5rem;
    }

    @media (max-width: 491px){
        font-size: 1.5rem;
    }
`;

export const Text = styled.p`
    color: ${props => changeColor(props.color)};
    font-weight: 300;
    margin-top: ${props => props.top || '10px'};
    margin-bottom: ${props => props.bottom || '10px'};
`;

export const MainButton = styled.button`
    background-color: #06F48A;
    width: 250px;
    height: 60px;
    color: #fff;
    font-size: 25px;
    font-weight: 900;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 0;
    outline: 0 none;
    position: static;

    @media (max-width: 828px){
        align-self: center;
    }
`;

export const ContainerPicture = styled.div`
    display: flex;
    width: 50%;
    min-height: 100%;
    background-image: url('https://imgbox.es/images/2021/04/13/Image5ab67b14a0918f1e.png');
    background-size: cover;
    background-repeat: no-repeat; 

    @media (max-width: 828px){
        position: absolute;
        width: 100%;   
        z-index: -1;
    }
`;

export const InfoPicture = styled.div`
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 60px;
    color: #fff;
    font-size: 12px;
    font-weight: 100;
    text-align: center;
    padding: 10px;
    align-self: flex-end;

    @media (max-width: 828px){
        display: none;   
    }
`;

export const ContainerMagazine = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    min-height: 120px;

    @media (max-width: 499px){
        display: none;
    }
`;

export const DivMagazine = styled.div`
    width: 15%;
`;

export const Picture = styled.img`
    width: ${props => props.size || '100%'};
`;

export const ContainerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 200px;

    @media (max-width: 828px){
        flex-direction: column;
    }
`;

export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    min-height: 150px;
    background-color: #6424FF; 

    @media (max-width: 828px){
        width: 100%;
    }
`;

export const InfoBody = styled.div`
    width: 55%;
    padding: 20px 80px 20px 80px;
    min-height: 300px;

    @media (max-width: 828px){
        width: 90%;
        padding: 5px 10px 5px 10px;
    }
`;

export const PicBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;

    @media (max-width: 828px){
        width: 90%;
    }
`;

export const ContainerBody = styled.div`
    width: 100%;
    min-height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #6424FF;
    text-align: center;
`;

export const BodyButton = styled(MainButton)`
    position: relative;
    top: 40px;

    @media (max-width: 1200px){
        position: static;
    }
`;