import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

import "./Header.css"

const Header = () => {
    return (
        // BEM
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="Large"/>
            </IconButton>
            <img 
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt="Tinder Logo" />
            <IconButton>
                <ForumIcon className="header__icon" fontSize="Large"/>
            </IconButton>
        </div>
    )
}

export default Header