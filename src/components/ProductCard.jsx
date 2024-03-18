import { Box, Typography } from '@mui/material';
import React from 'react';


const ProductCard = ({ title, price, img }) => {
    return (
        <Box sx={{ width: 170, height: 260, wordBreak: 'break-all', cursor: 'pointer', mr: 3 }}>
            <img src={img} alt={img} style={{ width: '170px', height: '170px' }} />
            <Typography sx={{ fontSize: 13 }}>{title}</Typography>
            <Typography sx={{ color: '#ae0000', fontWeight: 700, mt: 1 }}>{price}원</Typography>
        </Box>
    )
}

export default ProductCard;