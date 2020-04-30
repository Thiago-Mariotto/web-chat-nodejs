import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.svg';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"
import api from '../../services/api';

import './style.css';

export default function Profile() {

    const [users, setUsers] = useState([]);
    
    const user = localStorage.getItem('user');
    
    useEffect(() => {
        api.get('listUsers', {

        }).then(response => {
            setUsers(response.data);
        })
    } , [user]);

    return (
        <div className="profile-container">
            <h1>Usuários Cadastrados</h1>
            <Link style={{marginBottom: 20}}className="back-link" to="/">
                            < FiArrowLeft size={16} color="#E02041" />
                            Home
                    </Link>
            <ul>
                {users.map(incident => (
                    <li key={incident.id}>
                    <strong>Pos: {incident.id+1}  Grupo: {incident.group}</strong>
                    <strong>Nome: {incident.text}</strong>
                </li>
                ))}
            </ul>
        </div>
    );
};