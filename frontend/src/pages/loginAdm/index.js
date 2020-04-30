import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './style.css';

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const histoy = useHistory();

    async function CheckLogin(e){
        e.preventDefault();
        
        const data = {
            username,
            password
        }
        
        try {
            
            const response = await api.post('adminLogin', data);
            sessionStorage.setItem('userName', response.data.name);

            histoy.push('/AdminController');

        }catch (error) {
            
            setPassword('');
            alert("Erro ao autenticar");
            
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
            
                <form onSubmit={CheckLogin}>
                    <h1 style={{marginBottom: 5}}>Faça seu Login</h1>
                    <h3 style={{marginBottom: 20}}>Área restrita para Administradores</h3>
                    <input style={{marginBottom: 10}} type="text" 
                        placeholder="Seu Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input  type="password" 
                        placeholder="Sua Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                </form>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>Home
                </Link>
            </section>
   
        </div>
    )
}
