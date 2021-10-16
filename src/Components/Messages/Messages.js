import React from 'react'
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css'
const Messages = ({messages,name}) => {
    return (
        <ScrollToBottom className="messages">
        <div>
            {messages.map(
                (msg , index) => {
                    return <Message key={ index} name={name} message={msg}/>
                }
            )}
        </div>
        </ScrollToBottom>
    )
}

export default Messages
