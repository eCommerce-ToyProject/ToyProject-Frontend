import { Grid, Typography, Box } from '@mui/material';
import React from 'react'
import MyinfoNavList from '../components/MyinfoNavList';
import OrdersCard from '../components/OrdersCard';

const Myinfo = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{mb: 3}} variant='h5' fontWeight={600}>주문 내역</Typography>
                <Grid sx={{ width: 700 }}>
                    <OrdersCard />
                    <OrdersCard />
                </Grid>
            </Box>
        </Box>
    )
}

export default Myinfo;