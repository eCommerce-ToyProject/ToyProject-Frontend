import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';


const ProductCard = ({ title, price, img }) => {
    return (
        <Box sx={{ width: 170, height: 220, wordBreak: 'break-all', cursor: 'pointer', mr: 3, textDecoration: 'none'}}>
            <img src={`/assets/${img}`} alt={img} style={{ width: '170px', height: '170px' }} />
            <Typography sx={{ fontSize: 13, color: 'black', textDecoration: 'none' }}>{title}</Typography>
            <Typography sx={{ color: '#ae0000', fontWeight: 700, mt: 1, textDecoration: 'none' }}>{price}원</Typography>
        </Box>
    )
}

export default ProductCard;