import React from 'react';
import ICard from '../../interfaces/Card';
import './Card.css'

const Card: React.FunctionComponent<ICard> = (props) => {
    const { recipe } = props;

    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <a href={recipe.sourceUrl} target="_blank">
                        <img src={recipe.image} alt="holder" />
                    </a>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <h3 className="title is-4">{recipe.title}</h3>
                        <p className="subtitle is-6">{recipe.sourceName}</p>
                    </div>
                </div>
                <div className="content">
                    {recipe.summary}
                    <br />
                </div>
                <div className="card-footer">
                        {recipe.vegetarian &&
                            <p>vegetarian safe</p>
                        }
                </div>
            </div>
        </div>
    ); 
};

export default Card;