import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyinfoNavList from '../components/MyinfoNavList';
import OrderListCard from '../components/OrderListCard';
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
        if (name !== undefined) {
            axios.get(`/orders/orderList?id=${name}`)
                .then((res) => {
                    setOrders(res.data.content)
                })
                .catch((error) => {
                    console.error('Error checking login status:', error);
                });
        }
    }, []);
    console.log(name)
    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{ mb: 3 }} variant='h5' fontWeight={600}>주문 내역</Typography>
                <Grid sx={{
                    width: 700, 
                    overflowY: 'auto', // 세로 스크롤바만 표시되도록 함
                    height: 800,
                    '&::-webkit-scrollbar': {
                        width: '0.4em' // 스크롤바 너비 조정
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)' // 스크롤바 색상 조정
                    }
                }}>
                    {orders.length > 0 ? <OrderListCard product={orders} /> : null}
                </Grid>
            </Box>
        </Box>
    )
}

export default Myinfo;