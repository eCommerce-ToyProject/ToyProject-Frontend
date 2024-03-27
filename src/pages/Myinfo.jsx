import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyinfoNavList from '../components/MyinfoNavList';
import OrdersCard from '../components/OrdersCard';
import axios from 'axios';


const Myinfo = () => {
    const [name, setName] = useState('');
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.post('/members/loginCheck')
            .then((res) => {
                setName(res.data);
            })
            .catch((error) => {
                console.error('Error checking login status:', error);
            });
    });

    useEffect(() => {
        if(name !== undefined){
            axios.get(`/orders/orderList?id=${name}`)
            .then((res) => {
                setOrders(res.data.content)
            })
            .catch((error) => {
                console.error('Error checking login status:', error);
            });
        }
    },[]);
    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{mb: 3}} variant='h5' fontWeight={600}>주문 내역</Typography>
                <Grid sx={{ width: 700 }}>
                    {orders.length > 0? <OrdersCard product={orders}/>:null}
                </Grid>
            </Box>
        </Box>
    )
}

export default Myinfo;