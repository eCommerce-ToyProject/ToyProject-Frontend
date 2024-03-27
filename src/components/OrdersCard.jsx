import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import dress from '../assets/dress.jpg'

const OrdersCard = () => {
    return (
        <Box sx={{ display: 'flex', mt: 3, width: '100%', border: '1px solid #DEDEDE', p: 3, borderRadius: 4 }}>
            <img src={dress} alt={dress} style={{ width: 130, height: 130, borderRadius: 15 }} />
            <Box sx={{ ml: 3 }}>
                <NavLink style={{ textDecoration: 'none' }} to={`/productdetail/${1}`}>
                    <Typography sx={{ lineHeight: 2, mt: 2, color: 'black' }}>블랙 드레스</Typography>
                </NavLink>
                <Typography sx={{ lineHeight: 2 }}>2개</Typography>
                <Typography sx={{ lineHeight: 2, fontSize: 20 }} fontWeight={600}>500원</Typography>
            </Box>
        </Box>
    )
}

export default OrdersCard;