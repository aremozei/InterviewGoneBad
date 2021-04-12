import React from 'react';
import ICardList from '../../interfaces/CardList';
import './CardList.css';
import Card from '../Card/Card';

const CardList: React.FunctionComponent<ICardList> = ({results}) => {
    return (
    <React.Fragment>

        {results.map((recipe, index) => {
            return( 
                <Card key={index} recipe={recipe}/>
            )
        })}
    </React.Fragment> 
    )
};

export default CardList;