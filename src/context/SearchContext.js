// DeliveryContext.js
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [product, setProduct] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [totalItems, setTotalItems] = useState(0);
    const [page, setPage] = useState(0);
    const [lastPage, setLastPage] = useState(1);

    return (
        <SearchContext.Provider value={{
            search,
            setSearch,
            product,
            setProduct,
            searchVal,
            setSearchVal,
            totalItems,
            setTotalItems,
            page,
            setPage,
            lastPage,
            setLastPage
        }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchContext = () => useContext(SearchContext);
