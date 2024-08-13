import React from "react";
import './styles.css';


const textoOptions = ['Categorias', 'Minha Estante', 'Favoritos'];

export function ListaOptions(){
    return (
        <ul className="options">
            {textoOptions.map( (texto) => (
                <li><p>{texto}</p></li>
            ))}
        </ul>
    );
}