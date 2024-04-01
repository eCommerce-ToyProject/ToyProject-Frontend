import { Box, Typography } from '@mui/material';
import React from 'react';


const SoldOutCard = ({ title, img }) => {
    return (
        <Box sx={{ width: 170, height: 220, wordBreak: 'break-all', cursor: 'pointer', mr: 3, textDecoration: 'none'}}>
            <img src={`/assets/${img}`} alt={img} style={{ width: '170px', height: '170px', filter: 'grayscale(100%)' }} />
            <Typography sx={{ fontSize: 13, color: 'black', textDecoration: 'none' }}>{title}</Typography>
            <Typography sx={{ color: '#ae0000', fontWeight: 700, mt: 1, textDecoration: 'none' }}>품절 !</Typography>
        </Box>
    )
}

export default SoldOutCard;