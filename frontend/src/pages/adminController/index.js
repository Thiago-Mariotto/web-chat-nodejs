
import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from "react-icons/fi"
import api from '../../services/api';
import { parseISO, format, } from 'date-fns';

import './style.css';

export default function Login(){

    const [messages, setMessages] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filterDate, setFilterDate] = useState('');

    async function allMessages(e){

       await api.get('messageList')
            .then(response => {
                setMessages(response.data);
        })
    }
  
    window.onload = allMessages;
    window.onclick = allMessages;
    
    function findUser(e){
        e.preventDefault();
        
        if(filterName){
            api.get(`/messageUserName/${filterName}`)
            .then(response => {
            setMessages(response.data);
            })
        }else{
            alert("Campo username vazio.");
            return;
        }
    }
    
    function findDate(e){
        e.preventDefault();
        if(filterName){
            console.log(filterDate);
            api.get(`/messageDate/${filterDate}`)
            .then(response => {
                setMessages(response.data);
            })
        }else{
            alert("Campo data vazio.");
            return;
        }

    }

    useEffect(() => {
        var usernames = [];
        
        messages.forEach(myFunction);

        function myFunction(item, index){
        
            if(usernames.indexOf(item.username) == -1){
                usernames.push(item.username);
            }

            const { username } = messages;
            
        }
    });

   

    async function DeleteMessage( id ){
        
        try {
            await api.delete(`/messageDelete/${id}`, {
                
            });

            setMessages(messages.filter(message => message.id !== id));

        } catch (error) {
            alert('Erro ao deletar o caso, tente novamente.');
        }
    }

    return(
        <div className="chat-container">

            <div className="admin-field">
                
                <h2>Olá, ADM</h2>
                    
                <Link className="back-link" to="/">
                    <FiArrowLeft size={14} color="#E02041"/>Sair
                </Link>
               
                <div className="image-field">
                    
                    <form onSubmit={findUser}>
                        <p>Filtrar usuário</p>
                        <input type="text" 
                            placeholder="Username"
                            value={filterName}
                            onChange={e => setFilterName(e.target.value)}
                        />
                        <button className="button-filter" type="submit">Filtrar por nome</button>
                    </form>
                   
                    <div className="filter-field">

                        <form onSubmit={findDate}>
                            <p>Filtrar data</p>
                            <input type="date" 
                                placeholder="Username"
                                value={filterDate}
                                onChange={e => setFilterDate(e.target.value)}
                            />
                            <button className="button-filter" type="submit">Filtrar por data</button>
                        </form>
                    </div>
                </div>
            </div>

            
            <div className="content">
                <div className="message-field" >
                    <div className="message-received">
                        <ul className="dropdown-menu" >
                            {
                                messages.map(newMessage => (
                                    <li key={newMessage.id}>
                                        <h3>
                                            <button onClick={ () => DeleteMessage(newMessage.id) } type="button">
                                                <FiTrash2 size={15} color="#a8a8b3"/>
                                            </button> 
                                            {' '+newMessage.username }: { newMessage.message} </h3>
                                        <h5>
                                            {format(parseISO(newMessage.created_at), "dd'/'MM'/'yy 'às'  HH:mm'h'") }
                                        </h5>
                                        <br></br>
                                    </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>            
        </div>
    )
}

