import { Box, Typography } from '@mui/material';
import React from 'react';

const DeliveryCard = ({props}) => {
    console.log(props)
    return(
        <div>
        {props.map((item)=>{
            return(
            <Box sx={{ border: '1px solid #DEDEDE', borderRadius: 2, p: 2, mb: 1 }}>
            <Typography fontWeight={600} fontSize={20}>{item.designation}</Typography>
            <Typography>{item.zcode}</Typography>
            <Typography>{item.delPlc}</Typography>
            </Box>
        )})}
        </div>
    )
}

export default DeliveryCard;