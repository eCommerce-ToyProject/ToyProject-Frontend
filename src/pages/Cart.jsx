import React, {useCallback, useEffect, useState} from 'react'
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
    const [cartItems, setCartItems] = useState()

    const callCartItemListApi = useCallback(()=>{
        if(name){
        axios.get(`/cart/${name}`)
          .then((res) => {
            setCartItems(res.data)
          })
        }
    },[name])

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

    useEffect(()=>{
      if(name){
        callCartItemListApi()
      }
    },[name])

    useEffect(()=>{
      console.log(cartItems)
    },[cartItems]);

    const callCartDeletedApi = useCallback((cartId)=>{
        axios.delete(`/cart/${name}/items/${cartId}`).then(() =>
            callCartItemListApi(name)
        )
    },[callCartItemListApi, name])

    const onDelete = useCallback((cartId)=>{ 
        if(cartId){
        callCartDeletedApi(cartId)
        }
    },[name])

    return (
        <Box sx={{ width: 900, m: '0 auto' }}>
            <Typography variant='h4' fontWeight={600} sx={{ color: '#1976d2', textAlign: 'center' }}>
                장바구니
            </Typography>

            {/* 주문정보 작성 및 결제 공간 */}
            <Box sx={{ display: 'flex', mt: 7 }}>
                <Box sx={{ width: '60%' }}>
                    {cartItems?.cartItems.map(item=>{
                        return (
                            <CartItem 
                              title={item.goodsName} 
                              price={item.totalItemPrice}
                              quantity={item.itemQty}
                              cartItemId={item.cartItemId} 
                              onDelete={onDelete} 
                              // originalPrice={item.price}
                            />
                        )
                    })}
                </Box>
                <OrderBox />
            </Box>
        </Box>
    )
}

export default Cart