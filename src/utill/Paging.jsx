import React, { useEffect } from 'react';
import Pagination from 'react-js-pagination';
import './Paging.css';
import { useSearchContext } from '../context/SearchContext';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Paging = ({ onChange }) => {
    const searchVal = useSelector(state => state.searchVal);
    const {
        product,
        setTotalItems,
        setLastPage,
        lastPage,
        page,
        totalItems,
    } = useSearchContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (searchVal === '') {
                    response = await axios.get('/goods/goodsList');
                } else {
                    response = await axios.get(`/goods/goodsList?values=${encodeURIComponent(searchVal)}`);
                }
                const totalElements = response.data.totalElements;
                setTotalItems(totalElements);
                setLastPage(Math.ceil(totalElements / 15));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [setLastPage, setTotalItems, searchVal, product]);
    
    return (
        <Pagination
            activePage={page + 1}
            itemsCountPerPage={15}
            totalItemsCount={totalItems}
            pageRangeDisplayed={lastPage}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={onChange}
        />
    );
};

export default Paging;
