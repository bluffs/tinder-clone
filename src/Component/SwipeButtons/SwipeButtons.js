import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import './SwipeButtons.css';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="Large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="Large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="Large" />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="Large" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="Large" />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;