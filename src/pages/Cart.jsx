import React, {useEffect, useState} from 'react'
import {Box, Button, Typography} from "@mui/material";
import OrderUserinfo from "../components/order/OrderUserInfo";
import OrderPayDetail from "../components/order/OrderPayDetail";
import axios from "axios";
import {useSelector} from "react-redux";
import CartItem from "../components/CartItem";
import OrderBox from "../components/OrderBox";

const Cart = () => {
    const [userData, setUserData] = useState(null)
    const name = useSelector(state => state.name);

    useEffect(() => {
        if(name){
            axios.get(`/members/orderingMyinfo?id=${name}`)
                .then((response) => {
                    setUserData(response.data);
                })
                .catch((err) => {
                    console.error('Error checking login status:', err);
                })
        }
    }, [name]);

    return (
        <Box sx={{ width: 900, m: '0 auto' }}>
            <Typography variant='h4' fontWeight={600} sx={{ color: '#1976d2', textAlign: 'center' }}>
                장바구니
            </Typography>

            {/* 주문정보 작성 및 결제 공간 */}
            <Box sx={{ display: 'flex', mt: 7 }}>
                <Box sx={{ width: '60%' }}>
                    <CartItem />
                </Box>
                <OrderBox />
            </Box>
        </Box>
    )
}

export default Cart