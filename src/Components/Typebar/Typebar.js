import React from 'react'
import { IoSend } from 'react-icons/io5'
import './Typebar.css'


const Typebar = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}><IoSend/></button>
  </form>
)

export default Typebar;