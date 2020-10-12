import React from 'react';

import Chat from '../Chat/Chat';
import './Chats.css';

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Yo whats up !hahahahahahahahahahahahahahahaha fburibevjhr e"
                timestamp="35 mins ago"
                profilePic="https://keryjames.fr/wp-content/uploads/2019/09/mockup-kj-facebook-1.jpg"
            />
            <Chat
                name="Paul"
                message="Hey dude !"
                timestamp="1 hour ago"
                profilePic="https://static.fnac-static.com/multimedia/Images/FD/Comete/127351/CCP_IMG_ORIGINAL/1663249.jpg"
            />
        </div>
    );
};

export default Chats;