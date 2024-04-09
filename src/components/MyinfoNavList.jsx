import { Box, Grid, Typography } from "@mui/material"
import MyinfoNavItem from "./MyinfoNavItem"

const MyinfoNavList = () => {

    const Boxstyle = {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
    }

    const Navstyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <Box sx={Boxstyle}>
            <Typography sx={{ fontSize: '1.6rem', fontWeight: 800, mb: 2 }}>My페이지</Typography>
            <Grid style={Navstyle}>
                <MyinfoNavItem page={'/myinfo/orderlist'} title={'주문 내역'} />
                <MyinfoNavItem page={'/myinfo/delivery'} title={'배송지 추가/수정'} />
                <MyinfoNavItem page={''} title={'계좌 관리'} />
                <MyinfoNavItem page={''} title={'찜한 상품'} />
                <MyinfoNavItem page={''} title={'개인 정보 수정'} />
            </Grid>
        </Box>
    )
}

export default MyinfoNavList