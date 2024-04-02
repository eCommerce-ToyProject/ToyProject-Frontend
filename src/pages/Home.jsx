import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import SoldOutCard from '../components/SoldOutCard';
import { useSearchContext } from '../context/SearchContext';

const Home = () => {
    const {
        search,
        product,
        setProduct,
    } = useSearchContext();

    useEffect(() => {
        if (search === '') {
            axios.get('/goods/goodsList')
                .then(response => {
                    setProduct(response.data.content);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        } else {
            axios.get(`/goods/goodsList?values=${encodeURIComponent(search)}`)
                .then((res) => {
                    setProduct(res.data.content);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [search, setProduct]);

    return (
        <Box>
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
                }
                )}
            </Grid>
        </Box >
    )
}

export default Home;