import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import SoldOutCard from '../components/SoldOutCard';
import Paging from '../utill/Paging'
import '../utill/Paging.css';
import { useSearchContext } from '../context/SearchContext';

// Math.floor() : 소수점 이하를 버림한다.
// Math.ceil() : 소수점 이하를 올림한다.
// Math.round() : 소수점 이하를 반올림한다.
const Home = () => {
    const {
        search,
        product,
        setProduct,
        setPage,
        page,
        setLastPage,
        lastPage,
        setTotalItems
    } = useSearchContext();

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber - 1);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (search === '') {
                    response = await axios.get(`/goods/goodsList?page=${page}&size=15`);
                } else {
                    response = await axios.get(`/goods/goodsList?page=${page}&size=15&values=${encodeURIComponent(search)}`);
                    const totalElements = response.data.totalElements;
                    setLastPage(Math.ceil(totalElements / 15));
                    setTotalItems(totalElements);
                }
                setProduct(response.data.content);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [page, search, setProduct, setLastPage, setTotalItems]);


    return (
        <Box sx={{ height: 950 }}>
            <Grid container direction="row" justifyContent="center" gap={2}>
                {product.map(item => {
                    const price = item.gprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    return (
                        item.totQty === 0
                            ? <SoldOutCard key={item.gno} title={item.gname} img={item.gimg} />
                            : <NavLink key={item.gno} style={{ textDecoration: 'none', marginBottom: 70 }} to={`/productdetail/${item.gno}`}>
                                <ProductCard title={item.gname} price={price} img={item.gimg} />
                            </NavLink>
                    )
                })}
            </Grid>

            <Paging page={page} onChange={handlePageChange} lastPage={lastPage} setLastPage={setLastPage} />
        
        </Box>
    )
}

export default Home;