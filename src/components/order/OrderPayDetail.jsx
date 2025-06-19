import { Box, Typography } from '@mui/material';
import React from 'react';

const OrderPayDetail = ({ price }) => {
    // const _price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    // const total = (price + 2500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    
    const total = price + 2500;

    return (
        <Box sx={{ border: '1px solid #1976d2', borderRadius: 2, p: 3, mt: 3, width: '100%' }}>
            <Typography variant='h6' fontWeight={600}>결제상세</Typography>
            <Box sx={{ display: 'flex', mt: 2}}>
                <Box sx={{ width: '40%' }}>
                    <Typography fontSize={17} >상품금액</Typography>
                    <Typography fontSize={17} >배송비</Typography>
                    <Typography fontSize={20} fontWeight={600} sx={{ mt: 3 }}>총 주문금액</Typography>
                </Box>
                <Box sx={{ ml: 'auto', textAlign: 'right' }}>
                    <Typography fontSize={17}>{price}원</Typography>
                    <Typography fontSize={17}>{'2500'}원</Typography>
                    <Typography fontSize={20} fontWeight={600} sx={{ mt: 3, color: '#1976d2' }}>{total}원</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default OrderPayDetail;