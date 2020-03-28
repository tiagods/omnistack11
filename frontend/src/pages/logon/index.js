import React from 'react';

import {FiLogIn} from 'react-icons/fi'

import './styles.css';

import heroesImp from '../../assets/heroes.png';
import logoImp from '../../assets/logo.svg';

export default function Logon() {
    return(
       <div className="logon-container">
           <section className="form">
                <img src={logoImp} alt="Be The Hero" />
                <form>
                    <h1> Faça seu logon</h1>
                    <input placeholder="Sua ID"></input>
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register"> 
                        <FiLogIn size="16" color="#E02041" />
                        Não Tenho cadastro</a>
                </form>
           </section>

           <img src={heroesImp} alt="Heroes"/>
       </div>
    )
}