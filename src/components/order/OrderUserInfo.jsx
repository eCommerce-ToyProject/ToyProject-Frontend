import React from 'react';
import { Box, Typography } from "@mui/material";

const OrderUserinfo = ({userData}) => {
    return (
        <Box sx={{ border: '1px solid #1976d2', borderRadius: 2, p: 3, width: '100%' }}>
            <Typography variant='h6' fontWeight={600}>주문자 정보</Typography>
            <Box sx={{ display: 'flex', mt: 2 }}>
                <Box sx={{ width: '40%' }}>
                    <Typography fontSize={17} >주문자 이름</Typography>
                    <Typography fontSize={17} >연락처</Typography>
                </Box>
                <Box>
                    <Typography fontSize={17} fontWeight={600}>{userData!==null?userData[0].username: null}</Typography>
                    <Typography fontSize={17} fontWeight={600}>{userData!==null?userData[0].phone: null}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default OrderUserinfo;