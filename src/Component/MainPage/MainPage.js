import React, { useState, useEffect, useRef } from 'react';
import database from '../../firebase';

import TinderCards from '../TinderCards/TinderCards';
import SwipeButtons from '../SwipeButtons/SwipeButtons';

const MainPage = () => {

    const [people, setPeople] = useState([]);
    const tinderCardsRef = useRef();
    useEffect(() => {
        const unsubscribe = database.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const swipe = (dir) => {
        tinderCardsRef.current.buttonSwipe(dir);
    }

    return (
        <div>
            <TinderCards people={people} ref={tinderCardsRef}/>
            <SwipeButtons swipe={swipe}/>
        </div>
    )
};

export default MainPage;