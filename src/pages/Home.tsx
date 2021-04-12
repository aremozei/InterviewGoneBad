import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import {RouteComponentProps, withRouter } from 'react-router-dom';
import Recepies from '../api/Recepies';
import CardList from '../components/CardList/CardList';

const HomePage: React.FunctionComponent<RouteComponentProps<any>> = props => {

    const [
        message, 
        setMessage
    ] = useState<string>('');

    const [
        recipes, 
        setRecipes
    ] = useState<[]>([])

    const onSearch = async(text) => {
        const listOfRecepies = await Recepies.get("/", {
            params: {
              apiKey:"API HERE PLEASE",
              query: text,
              number: 30,
              addRecipeInformation: true
            } 
        });
        setRecipes(listOfRecepies.data.results)
    }

    useEffect(() => {
        let query = props.match.params.query;

        if(query) {
            setMessage(query);
        } else {
            setMessage('');
        }
    }, [props.match.params.query])
    
    return (
        <React.Fragment>
            <SearchBar query= {message} onSearch= {onSearch} />
            <CardList results= {recipes} />
        </React.Fragment>
    );
}

export default withRouter(HomePage);