import React from 'react';
import Lista from '../components/Lista';
import './CSS/Tela.css'

const Tela = () => {
    return ( <div className='conteudo'>
        <h1>Minha lista</h1>
        <Lista/>
    </ div> );
}

export default Tela;