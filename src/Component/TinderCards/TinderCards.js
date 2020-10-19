import React, { forwardRef, createRef, useImperativeHandle } from 'react'

import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = forwardRef(({ people }, ref) => {

    let cardRefs = new Array(people.length);
    for (let i=0; i<people.length; i++) {
        cardRefs[i] = createRef(null);
    }
    useImperativeHandle(ref, () => ({
        buttonSwipe(dir) {
            cardRefs[cardRefs.length - 1].current.swipe(dir);
        }
    }));
    

    const handleSwipe = () => {
        cardRefs.pop();
    }

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person, i) => {
                    return (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        ref={cardRefs[i]}
                        onSwipe={handleSwipe}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }} 
                            className="card">
                            <h3>
                                {person.name}
                            </h3>
                        </div>
                    </TinderCard>
                )})
                }
            </div> 
        </div>
    )
});

export default TinderCards