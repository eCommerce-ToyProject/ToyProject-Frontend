import React from 'react';
import dress from '../assets/dress.jpg';
import { Box, Typography } from '@mui/material';


const OrderListCard = ({ product }) => {
    return (
        <div>
            {product.map((item, key) => {
                const price = item.toPrc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

                return (
                    <Box key={key} sx={{ borderRadius: 4, p: 2, boxShadow: 5, mb: 3 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>{item.ordDt} 주문</Typography>
                        <Box sx={{ display: 'flex', border: '1px solid #DEDEDE', borderRadius: 4, p: 2 }}>
                            <img src={`assets/${item.orderItems[0].goods_no.gimg}`} alt={`assets/${item.orderItems[0].goods_no.gimg}`} style={{ width: '130px', height: '130px' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
                                <Box sx={{ height: 100 }}>
                                    <Typography sx={{ ml: 3 }}>{item.orderItems[0].goods_no.gname}</Typography>
                                </Box>
                                <Box sx={{ ml: 3, display: 'flex' }}>
                                    <Typography sx={{ color: 'gray', mr: 5 }}>{price}원 - {item.orderItems[0].ordQty}개</Typography>
                                    <Typography sx={{ color: 'gray' }}>옵션: {item.orderItems[0].item_no.optVal1} {item.orderItems[0].item_no.optVal2 ? "- " + item.orderItems[0].item_no.optVal2 : null}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ borderLeft: '1px solid #DEDEDE', pl: 3 }}>
                                <Typography sx={{ fontSize: 18, mb:2, }}>배송지</Typography>
                                <Typography>배송지</Typography>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </div>
    )
}

export default OrderListCard;