import React, { useEffect, useState } from 'react';
import ISearchBar from '../../interfaces/Searchbar'
import  './SearchBar.css'

const SearchBar: React.FunctionComponent<ISearchBar> = props => {

    const { onSearch } = props;

    const [
        searchText, 
        setSearchText
    ] = useState<string>('')

    useEffect(() => {
        let search = props.query;
        if(!search) {
            setSearchText('')
        } else {
            setSearchText(search)
        }
    }, [props.query])

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text);
    }

    const handlePress = (e) => {
        if(e.key === 'Enter') {
            onSearch(searchText);
        }
    }
    
    return(
        <div className="search-input-container">
            <div className="control">
                <input
                    onChange= {handleInput} 
                    onKeyPress= {handlePress}
                    value= {searchText}
                    className="input" 
                    type="text" 
                    placeholder="Search..." />
            </div>
        </div>
    );
};

export default SearchBar;