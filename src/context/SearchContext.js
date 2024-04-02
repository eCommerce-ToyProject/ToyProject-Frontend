// DeliveryContext.js
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [product, setProduct] = useState([]);
    const [searchVal, setSearchVal] = useState('');

    return (
        <SearchContext.Provider value={{
            search,
            setSearch,
            product,
            setProduct,
            searchVal,
            setSearchVal
        }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchContext = () => useContext(SearchContext);
