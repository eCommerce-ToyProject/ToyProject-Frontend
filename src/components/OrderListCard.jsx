import React from 'react';
import { Box, Typography } from '@mui/material';


const OrderListCard = ({ product }) => {
    return (
        <div>
            {product.map((item, key) => {
                const price = item.toPrc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                const date = item.ordDt.substr(0, 10);

                return (
                    <Box key={key} sx={{ borderRadius: 4, p: 2, boxShadow: 5, mb: 3 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>{date} 주문</Typography>
                            <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2, ml: 45 }}>배송지</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', border: '1px solid #DEDEDE', borderRadius: 4, p: 2 }}>
                            <img src={`assets/${item.orderItem[0].goods_no.gimg}`} alt={`assets/${item.orderItem[0].goods_no.gimg}`} style={{ width: '130px', height: '130px' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
                                <Box sx={{ height: 100 }}>
                                    <Typography sx={{ ml: 3 }}>{item.orderItem[0].goods_no.gname}</Typography>
                                </Box>
                                <Box sx={{ ml: 3, display: 'flex' }}>
                                    <Typography sx={{ color: 'gray', mr: 3 }}>{price}원 - {item.orderItem[0].ordQty}개</Typography>
                                    <Typography sx={{ color: 'gray' }}>옵션: {item.orderItem[0].item_no.optVal1} {item.orderItem[0].item_no.optVal2 ? "- " + item.orderItem[0].item_no.optVal2 : null}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ borderLeft: '1px solid #DEDEDE', pl: 2 }}>
                                <Typography>{item.delivery.zipCode}</Typography>
                                <Typography>{item.delivery.delPlc}</Typography>
                                <Typography>{item.delivery.detailAddress}</Typography>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </div>
    )
}

export default OrderListCard;