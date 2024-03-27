import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MyinfoNavList from '../components/MyinfoNavList';
import OrderListCard from '../components/OrderListCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Myinfo = () => {
    const param = useParams()
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        axios.post('/members/loginCheck')
            .then((res) => {
                setName(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    useEffect(() => {
        axios.get(`/orders/orderList?id=${name}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [name])

    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{mb: 3}} variant='h5' fontWeight={600}>주문 내역</Typography>
                <Grid sx={{ width: 700 }}>
                    <OrderListCard />
                </Grid>
            </Box>
        </Box>
    )
}

export default Myinfo;