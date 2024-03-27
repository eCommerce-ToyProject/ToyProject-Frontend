import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import dress from '../assets/dress.jpg'

const OrdersCard = (product) => {
    return (
        <div>
        {product.product.map((item)=>{
            return(
            <Box sx={{ display: 'flex', mt: 3, width: '100%', border: '1px solid #DEDEDE', p: 3, borderRadius: 4 }}>
            <img src={`assets/${item.orderItems[0].goods_no.gimg}`} alt={dress} style={{ width: 130, height: 130, borderRadius: 15 }} />
            <Box sx={{ ml: 3 }}>
                <NavLink style={{ textDecoration: 'none' }} to={`/productdetail/${item.orderItems[0].goods_no.gno}`}>
                    <Typography sx={{ lineHeight: 2, mt: 2, color: 'black' }}>{item.orderItems[0].goods_no.gname}</Typography>
                </NavLink>
                <Typography sx={{ lineHeight: 2 }}> {item.orderItems[0].ordQty}개</Typography>
                <Typography sx={{ lineHeight: 2, fontSize: 20 }} fontWeight={600}>{item.toPrc}원</Typography>
            </Box>
        </Box>
        )})}
        </div>
    )
}

export default OrdersCard;