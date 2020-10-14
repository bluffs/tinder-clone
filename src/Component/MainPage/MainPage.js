import React, { useState, useEffect } from 'react';
import database from '../../firebase';

import TinderCards from '../TinderCards/TinderCards';
import SwipeButtons from '../SwipeButtons/SwipeButtons';

const MainPage = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe = database.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        });

        return () => {
            unsubscribe();
        }
        
    }, []);

    const swipe = () => {
        let tab = [...people];
        tab.pop();
        setPeople(tab);
    }

    return (
        <div>
            <TinderCards people={people}/>
            <SwipeButtons swipe={swipe}/>
        </div>
    )
};

export default MainPage;