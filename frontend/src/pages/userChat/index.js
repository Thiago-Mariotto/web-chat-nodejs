
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from "react-icons/fi"
import api from '../../services/api';
import { parseISO, format, } from 'date-fns';

import './style.css';

export default function Login(){

    const username = sessionStorage.getItem('userName');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        
        api.get('messageList')
            .then(response => {
                setMessages(response.data);
        })

    } , [messages]);

    
    async function MessageSend(e){
        e.preventDefault();

        const data = {
            message,
            username
        }

            if(message !== ''){
                api.post('messageSend', data );
                
            }
            setMessage(''); 
    }

    async function DeleteMessage( id ){
        
        try {
            await api.delete(`messagesDelete/${id}`, {

            });

            setMessages(messages.filter(message => message.id !== id));

        } catch (error) {
            alert('Erro ao deletar o caso, tente novamente.');
        }
    }   

    return(
        <div className="chat-container">

            <div className="image-field">
                
                    <h2>Olá, {username}</h2>
                    <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02041"/>Sair
                    </Link>
            </div>
             
             <div className="content">

                <div className="message-field">
                    <div id="scroll" className="message-received">
                        <ul class="dropdown-menu">
                            {messages.map(newMessage => (   
                                <li key={newMessage.id}>
                                    
                                    <h3>{newMessage.username}: { newMessage.message} </h3>
                                    <h5>{
                                            format(parseISO(newMessage.created_at), "dd'/'MM'/'yy 'às'  HH:mm'h'")
                                        }</h5>
                                        
                                    <br></br>
                                    
                                </li>
                                
                            ))}
                        </ul>
                    </div>
                    
                    <section className="form">
                        <form onSubmit={MessageSend}>
                            
                        <textarea placeholder="Digite uma mensagem"
                            className="textarea"
                            value={message}
                            onChange={e=> setMessage(e.target.value)}
                        ></textarea>
                        <button className="button" type="submit">Enviar</button>
                            
                        </form>
                    </section>   
                    
                </div>
                
            </div>

        </div>
    )
}

