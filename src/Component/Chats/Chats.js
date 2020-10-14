import React from 'react';

import Chat from '../Chat/Chat';
import './Chats.css';

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Maggie"
                message="Yo whats up !"
                timestamp="35 mins ago"
                profilePic="https://www.gstatic.com/tv/thumb/persons/41544/41544_v9_ba.jpg"
            />
            <Chat
                name="Penelope"
                message="Hey!"
                timestamp="1 hour ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/d/d6/Penelope_Cruz_Cannes_2018.jpg"
            />
        </div>
    );
};

export default Chats;