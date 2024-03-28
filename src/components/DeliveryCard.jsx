import { Box, Typography } from '@mui/material';
import React from 'react';

const DeliveryCard = ({ props, setZipcode, setRoadAddress, setDetailAddress, setDesignation, Close }) => {
    console.log(props)
    return(
        <div>
        {props.map((item)=>{
            return(
            <Box sx={{ border: '1px solid #DEDEDE', borderRadius: 2, p: 2, mb: 1 }} onClick={() => {
                setZipcode(item.zcode);
                setRoadAddress(item.delPlc);
                setDetailAddress(item.detailAddress);
                setDesignation(item.designation)
                Close();
            }}>
            <Typography fontWeight={600} fontSize={20}>{item.designation}</Typography>
            <Typography>{item.zcode}</Typography>
            <Typography>{item.delPlc}</Typography>
            </Box>
        )})}
        </div>
    )
}

export default DeliveryCard;