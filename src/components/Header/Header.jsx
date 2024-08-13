import React from "react";
import './styles.css';
import { Logo } from "../Logo/Logo";
import { ListaOptions } from "../ListaOptions/ListaOptions";
import { HeaderIcons } from "../HeaderIcons/HeaderIcons";

export function Header(){
    return (
        <header className="app-header">
            <Logo></Logo>
            <ListaOptions></ListaOptions>
            <HeaderIcons></HeaderIcons>
        </header>
    );
}