import React from "react";
import './styles.css';
import logo from '../../assets/img/logo.svg'

export function Logo(){
    return(
        <div className="logo">
            <img src={logo} alt="Logo from Alura Books" />
            <p><strong>Alura</strong>Books</p>
        </div>
    );
}