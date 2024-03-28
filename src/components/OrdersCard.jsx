import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import dress from '../assets/dress.jpg'

const OrdersCard = ({ price, title, img, qty }) => {
    const _price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return (
        <Box sx={{ display: 'flex', mt: 3, width: '100%', border: '1px solid #DEDEDE', p: 3, borderRadius: 4 }}>
            <img src={`/assets/${img}`} alt={img} style={{ width: 130, height: 130, borderRadius: 15 }} />
            <Box sx={{ ml: 3 }}>
                <NavLink style={{ textDecoration: 'none' }}>
                    <Typography sx={{ lineHeight: 2, mt: 2, color: 'black' }}>{title}</Typography>
                </NavLink>
                <Typography sx={{ lineHeight: 2 }}> {qty}개</Typography>
                <Typography sx={{ lineHeight: 2, fontSize: 20 }} fontWeight={600}>{_price}원</Typography>
            </Box>
        </Box>
    )
}

export default OrdersCard;