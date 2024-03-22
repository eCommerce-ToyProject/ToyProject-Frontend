import React from 'react';
import dress from '../assets/dress.jpg';
import { Box, Typography } from '@mui/material';


const OrdersCard = () => {
    return (
        <Box sx={{ border: '1px solid #DEDEDE', borderRadius: 4, p: 2, boxShadow: 2, mb: 3 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>{'2024.2.24'} 주문</Typography>
            <Box sx={{ display: 'flex' }}>
                <img src={dress} alt={dress} style={{ width: '150px', height: '150px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 550 }}>
                    <Box sx={{ height: 100 }}>
                        <Typography sx={{ ml: 3 }}>블랙 드레스</Typography>
                    </Box>
                    <Box sx={{ ml: 3 }}>
                        <Typography sx={{ color: 'gray' }}>{'32,000'}원 - {1}개</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OrdersCard;