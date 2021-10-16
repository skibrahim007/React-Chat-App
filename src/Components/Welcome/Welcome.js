import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'
const Welcome = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="welcome-container">
            <h1>Welcome..!</h1>
            <div className="welcome-form">
             <div>
            <label htmlFor="name"> Name : </label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <br/>
            <div>
            <label htmlFor="room"> Room : </label>
                <input type="text" id="room" value={room} onChange={(e) => setRoom(e.target.value)} />
            </div>
            </div>
            <Link onClick={(e)=>(!name || !room) ? e.preventDefault() : null}to={`/Chat?name=${name}&room=${room}`}>
               <button className="welcome-button">Join</button>
            </Link>
        </div>
    )
}

export default Welcome
