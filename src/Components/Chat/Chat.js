import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client';
import './Chat.css'
import Infobar from '../Infobar/Infobar'
import Typebar from '../Typebar/Typebar'
import Messages from '../Messages/Messages'
let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const url = 'https://react-chat-app-sk.herokuapp.com/'
    const errorHandle = (error) => {
        alert(error)
    }
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        
        socket = io(url);
        setName(name);
        setRoom(room);
        socket.emit('add-user', { name: name, room: room }, errorHandle);

        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [url, location.search]);
    // To handle Message
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);
    //to send Message
     const sendMessage =(e) => {
         e.preventDefault();
         if (message) {
             socket.emit('sendMessage',message, ()=>setMessage(''))
         }
      }

    return (
        <div className="outerContainer">
        <div className="chat-box">
            <Infobar room={room}/>
            <Messages messages={messages} name={ name}/>
            <Typebar message={message} setMessage={setMessage} sendMessage={ sendMessage }/>
            </div>
            </div>
    )
}

export default Chat
