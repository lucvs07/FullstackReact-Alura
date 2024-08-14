import React from "react";
import logo from '../../assets/img/logo.svg'
import styled from "styled-components";

const LogoBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
`
const LogoName = styled.p`
    font-size: 2rem;
`

export function Logo(){
    return(
        <LogoBox>
            <img src={logo} alt="Logo from Alura Books" />
            <LogoName><strong>Alura</strong>Books</LogoName>
        </LogoBox>
    );
}