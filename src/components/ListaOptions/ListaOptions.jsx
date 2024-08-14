import React from "react";
import styled from "styled-components";

const OptionsList = styled.ul`  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

const textoOptions = ['Categorias', 'Minha Estante', 'Favoritos'];

export function ListaOptions(){
    return (
        <OptionsList>
            {textoOptions.map( (texto) => (
                <li><p>{texto}</p></li>
            ))}
        </OptionsList>
    );
}