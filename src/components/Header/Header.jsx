import React from "react";
import { Logo } from "../Logo/Logo";
import { ListaOptions } from "../ListaOptions/ListaOptions";
import { HeaderIcons } from "../HeaderIcons/HeaderIcons";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    li {
        list-style: none;
        font-size: 1.2rem;
        cursor: pointer;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

export function Header(){
    return (
        <HeaderContainer>
            <Logo></Logo>
            <ListaOptions></ListaOptions>
            <HeaderIcons></HeaderIcons>
        </HeaderContainer>
    );
}