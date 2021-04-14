import styled from 'styled-components';

export const ContainerFooter = styled.div`
    width: 100%;
    min-height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    backgroun-color: #000;
    margin-top: 10px;
    padding: 20px;

    @media (max-width: 828px){
        background-color: #6424FF;
    }
`;

export const TextFooter = styled.h6`
    font-size: 12px;
    font-weight: 400;
    color: #000;
    padding-bottom: 15px;

    @media (max-width: 828px){
        display: none;
    }
`;

export const PicFooter = styled.img`
    width: 20%;
    display: none;
    @media (max-width: 828px){
        display: block;
    }
    @media (max-width: 499px){
        width: 30%;
    }
`;

export const SubtitleFooter = styled.h1`
    display: none;

    @media (max-width: 828px){
        display: block;
        color: #fff;
        width: 40%;
        font-size: 30px;
    }

    @media (max-width: 499px){
        font-size: 20px;
    }

    @media (max-width: 360px){
        font-size: 15px;
    }
`;

