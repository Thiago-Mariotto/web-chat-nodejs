import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import './style.css';


import { useReducer } from 'react';


export default function Login(){

    sessionStorage.clear();

    return(
        <div className="logon-container">
            <section className="form">
                
                    <h1 style={{marginLeft: 23}}>Desafio FormareTech</h1>
                    
                    <Link className="back-link" to="/ChatHome">
                            <FiArrowRight size={16} color="#E02041" />
                            Chat - (Desafio 1 e 2)
                    </Link>
                    <Link className="back-link" to="/ListUsers">
                            <FiArrowRight size={16} color="#E02041" />
                            Lista - (Desafio 2 e 3)
                    </Link>
                   
            
            </section>

        
        </div>
    )
}
