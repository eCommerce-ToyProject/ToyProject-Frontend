import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('/goods/goodsList')
            .then(response => {
                setProduct(response.data.content);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Box>
            <Grid container direction="row" justifyContent="center">
                {product.map(item => {
                    const price = item.gprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    return (
                        <NavLink key={item.gno} style={{ textDecoration: 'none' }} to={`/detail/${item.gno}`}>
                            <ProductCard title={item.gname} price={price} img={''}/>
                        </NavLink>
                    )
                }
                )}
            </Grid>
        </Box >
    )
}

export default Home;