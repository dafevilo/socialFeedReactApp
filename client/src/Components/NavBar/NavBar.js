import React from 'react'
import {
    ContainerNavBar,
    LogoNavBar,
    BottonNavBar
} from './NavBarStyled'


const NavBar = () => {
    return (    
        <ContainerNavBar>
            <LogoNavBar src='https://imgbox.es/images/2021/04/13/logoTidalc7f1f830cb4b5da2.png'/>  
            <BottonNavBar>START QUIZ</BottonNavBar>
        </ContainerNavBar>
    )
}

export default NavBar
