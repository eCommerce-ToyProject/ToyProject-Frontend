import OrderUserinfo from "./order/OrderUserInfo";
import OrderPayDetail from "./order/OrderPayDetail";
import {Box, Button} from "@mui/material";
import React from "react";

const OrderBox = ({ userData, price, handleOrder }) => {
    return (
        <Box sx={{ width: '40%' }}>
            <OrderUserinfo userData={userData ? userData : null} />
            <OrderPayDetail price={price} />
            <Button size='large' variant="contained" disableRipple sx={{ width: '114%', mt: 4 }} onClick={handleOrder}>결제하기</Button>
        </Box>
    )
}

export default OrderBox