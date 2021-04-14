import styled from 'styled-components'

export const ContainerNavBar = styled.div`
    width: 100%;
    height: 100px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;

    @media (max-width: 399px) {
        background-color: #6424FF;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        height: 150px;
        position: relative;
    }
`;

export const LogoNavBar = styled.img`
    width: 100px;
    margin-left: 80px;

    @media (max-width: 399px) {
        margin-left: 0px;
        margin-bottom: 20px;
    }
`;

export const BottonNavBar = styled.button`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    width: 120px;
    height: 35px;
    margin-right: 80px;
    font-size: 15px;
    font-weight: 900;
    border: 0;
    outline: 0 none;

    @media (max-width: 399px) {
     margin-right: 0;   
    }
`;