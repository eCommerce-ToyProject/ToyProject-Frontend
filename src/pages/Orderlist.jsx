import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyinfoNavList from '../components/MyinfoNavList';
import OrderListCard from '../components/OrderListCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';


const OrderList = () => {
    const name = useSelector(state => state.name);
    const [cookies] = useCookies(['accessToken']);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (name !== '' && orders) {
            axios.get(`/orders/myOrderList?id=${name}`, {
                withCredentials: false,
                headers: {
                    Authorization: `Bearer ${cookies.accessToken}`
                }
            })
                .then((res) => {
                    setOrders(res.data.content)
                })
                .catch((error) => {
                    console.error('Error checking login status:', error);
                });
        }
    }, [name, setOrders, cookies.accessToken]);

    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{ mb: 3, ml: 3 }} variant='h5' fontWeight={600}>주문 내역</Typography>
                <Grid sx={{
                    width: 750,
                    pr: 3,
                    pl: 3,
                    overflowY: 'auto', // 세로 스크롤바만 표시되도록 함
                    height: 700,
                    '&::-webkit-scrollbar': {
                        width: '0.4em' // 스크롤바 너비 조정
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)' // 스크롤바 색상 조정
                    }
                }}>
                    {orders ? <OrderListCard product={orders} /> : null}
                </Grid>
            </Box>
        </Box>
    )
}

export default OrderList;