import React from "react";  
import perfil from "../../assets/img/perfil.svg"
import sacola from "../../assets/img/sacola.svg"
import styled from "styled-components";

const Icon = styled.li`
    width: 2.5rem;
`
const IconList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`

const icons = [perfil, sacola]

export function HeaderIcons(){
    return(
        <IconList>
            {icons.map( (icon) => (
                <Icon><img src={icon} alt='icon'/></Icon>
            ))}
        </IconList>
    );
}