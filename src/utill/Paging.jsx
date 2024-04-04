import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import './Paging.css';
import { useSearchContext } from '../context/SearchContext';
import axios from 'axios';

const Paging = ({ page, onChange, lastPage, setLastPage }) => {
    const { setProduct } = useSearchContext();
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                let totalElements;
                response = await axios.get('/goods/goodsList')
                totalElements = response.data.totalElements
                setLastPage(Math.ceil(totalElements % 15 ? totalElements / 15 + 1 : totalElements / 15))
                setProduct(response.data.content);
                setTotalItems(response.data.totalElements);
                console.log(response.data);
                console.log(totalElements);
                console.log(lastPage)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, [setLastPage, setProduct])

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
