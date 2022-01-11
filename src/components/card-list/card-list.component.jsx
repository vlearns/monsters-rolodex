import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = props => {
    // console.log(props);
    return (<div className='card-list'>
        {props.monsters.map(monster => (
            // <h1 key={monster.id}>{monster.name}</h1>
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>)
    //squiggly brackets tell that we are going to user JS
};