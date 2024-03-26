import React from 'react';
import dress from '../assets/dress.jpg';
import { Box, Typography } from '@mui/material';


const OrdersCard = () => {
    return (
        <Box sx={{ border: '1px solid #DEDEDE', borderRadius: 4, p: 2, boxShadow: 1, mb: 3 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>{'order-date'} 주문</Typography>
            <Box sx={{ display: 'flex' }}>
                <img src={dress} alt={dress} style={{ width: '130px', height: '130px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 550 }}>
                    <Box sx={{ height: 100 }}>
                        <Typography sx={{ ml: 3 }}>{"name"}</Typography>
                    </Box>
                    <Box sx={{ ml: 3, display: 'flex' }}>
                        <Typography sx={{ color: 'gray', mr: 5 }}>{'price'}원 - {'qty'}개</Typography>
                        <Typography sx={{ color: 'gray' }}>옵션: {'opt1'}{'opt2'}개</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OrdersCard;