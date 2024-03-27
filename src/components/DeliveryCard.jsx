import { Box, Typography } from '@mui/material';
import React from 'react';

const DeliveryCard = () => {
    return(
        <Box sx={{ border: '1px solid #DEDEDE', borderRadius: 2, p: 2, mb: 1 }}>
            <Typography fontWeight={600} fontSize={20}>우리집</Typography>
            <Typography>05043</Typography>
            <Typography>서울 광진구 아차산로53길 47-3</Typography>
        </Box>
    )
}

export default DeliveryCard;