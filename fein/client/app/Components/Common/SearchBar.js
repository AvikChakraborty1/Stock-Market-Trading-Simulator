'use client'

import React, { useState } from 'react';
import './SearchBar.css'
import { MockStocks } from '../../MockData/MockStocks'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchResults from './SearchResults';

const SearchBar = (nav) => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(MockStocks.result);

    const clear = () => {
        setInput('');
        setResults([]);
    };
    const updateResults = () => {
        setResults(MockStocks.result)
    };

    return (
        <>
            <input 
                type="text" value={input} 
                class="search_bar"
                placeholder='Search for a stock...'
                onChange={(event) => setInput(event.target.value)}
            />
            <button
                onClick={updateResults}
            >
                {
                    (nav) ? (
                        <div class="navbar_element"><MagnifyingGlassIcon class="search_icon_nav" /></div>
                    ) : (
                        <div class="navbar_element"><MagnifyingGlassIcon class="search_icon" /></div>
                    )
                }
            </button>
            {input && results.length > 0 ?  <SearchResults results={results}/> : null}
        </>
    );
}

export default SearchBar;