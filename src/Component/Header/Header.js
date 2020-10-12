import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

import "./Header.css"

const Header = (props) => {
    const history = useHistory();
    return (
        // BEM
        <div className="header">
            {props.backButton ? (
            <IconButton onClick={() => history.replace(props.backButton)}>
                <ArrowBackIosIcon fontSize="Large" className="header__icon" />
            </IconButton>
            ) : (
            <IconButton>
                <PersonIcon className="header__icon" fontSize="Large"/>
            </IconButton>
            )}
            
            <Link to="/">
                <img 
                    className="header__logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                    alt="Tinder Logo" />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="Large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header