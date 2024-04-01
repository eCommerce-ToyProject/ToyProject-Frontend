import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import SoldOutCard from '../components/SoldOutCard';

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