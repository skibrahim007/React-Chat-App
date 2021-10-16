import React from 'react'
import ReactEmoji from 'react-emoji'
import './Message.css'

const Message = ({ message: { user ,text}, name }) => {
    let currentUser = false;
    const userName = name.trim().toLowerCase();
    if (userName === user) {
        currentUser = true;
    }
    return (
        (currentUser) ?
            (<div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{userName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>)
            :
            (<div>
             <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
            </div>
            )
    )
}

export default Message
