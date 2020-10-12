import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './Chat.css'

const Chat = ({ name, message, profilePic, timestamp }) => {
    return (
        <div className="chat">
            <Avatar className="chat__image" src={profilePic} />
            <div className="chat__details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
    );
};

export default Chat;