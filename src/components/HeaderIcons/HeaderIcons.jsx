import React from "react";
import './styles.css';
import perfil from "../../assets/img/perfil.svg"
import sacola from "../../assets/img/sacola.svg"

const icons = [perfil, sacola]

export function HeaderIcons(){
    return(
        <ul className="icons">
            {icons.map( (icon) => (
                <li><img src={icon} alt='icon'/></li>
            ))}
        </ul>
    );
}