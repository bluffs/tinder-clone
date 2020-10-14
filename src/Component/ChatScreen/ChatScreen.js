import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

import './ChatScreen.css';

const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Maggie',
            image: 'https://www.gstatic.com/tv/thumb/persons/41544/41544_v9_ba.jpg',
            message: 'Hey whats up !'
        },
        {
            name: 'Maggie',
            image: 'https://www.gstatic.com/tv/thumb/persons/41544/41544_v9_ba.jpg',
            message: 'Hows it going !'
        },
        {
            message: 'Whats up Maggie'
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input }])
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                ) 
            ))}
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message"
                    type="text"
                />
                <button
                    className="chatScreen__inputButton"
                    type="submit"
                    onClick={handleSend}
                >
                    SEND
                </button>
            </form>
        </div>
    )
}

export default ChatScreen;