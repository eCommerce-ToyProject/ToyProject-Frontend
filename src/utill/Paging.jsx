import React, { useEffect } from 'react';
import Pagination from 'react-js-pagination';
import './Paging.css';
import { useSearchContext } from '../context/SearchContext';
import axios from 'axios';

const Paging = ({ onChange }) => {
    const {
        product,
        setTotalItems,
        setLastPage,
        lastPage,
        page,
        totalItems,
        search
    } = useSearchContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (search === '') {
                    response = await axios.get('/goods/goodsList');
                } else {
                    response = await axios.get(`/goods/goodsList?values=${encodeURIComponent(search)}`);
                }
                const totalElements = response.data.totalElements;
                setTotalItems(totalElements);
                setLastPage(Math.ceil(totalElements / 15));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [setLastPage, setTotalItems, search, product]);
    
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
