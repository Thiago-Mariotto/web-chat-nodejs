import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.css';

export default function Login(){

    sessionStorage.clear();
    const [username, setUsername] = useState('');

    const histoy = useHistory();

    async function CheckUsername(e){
        e.preventDefault();
        
        console.log("user: "+username);
        sessionStorage.setItem('userName', username);

        console.log("ENVIADO PARA PAGINA DE CONVERSA");
        histoy.push('/userChat');
    }

    return(
        <div className="logon-container">
            <section className="form">
                
                <form onSubmit={CheckUsername}>
                    <h1 style={{marginBottom: 20}}>Qual seu nome?</h1>
                    <input type="text" 
                        placeholder="Seu Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/AdminArea">
                            <FiLogIn size={16} color="#E02041" />
                            Login como Administrador
                    </Link>
                   
                </form>
            </section>

        
        </div>
    )
}
