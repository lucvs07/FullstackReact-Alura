import React from "react";
import './styles.css';
import { Logo } from "../Logo/Logo";
import perfil from "../../assets/img/perfil.svg"
import sacola from "../../assets/img/sacola.svg"

const textoOptions = ['Categorias', 'Minha Estante', 'Favoritos'];
const icons = [perfil, sacola]

export function Header(){
    return (
        <header className="app-header">
            <Logo></Logo>
            <ul className="options">
                {textoOptions.map( (texto) => (
                    <li><p>{texto}</p></li>
                ))}
            </ul>
            <ul className="icons">
                {icons.map( (icon) => (
                    <li><img src={icon} alt='icon'/></li>
                ))}
            </ul>
        </header>
    );
}