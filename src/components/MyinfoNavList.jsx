import { Box, Grid, Typography } from "@mui/material"
import MyinfoNavItem from "./MyinfoNavItem"

const MyinfoNavList = () => {

    const Boxstyle = {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
    }

    const Navstyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <Box sx={Boxstyle}>
            <Typography sx={{ fontSize: '1.6rem', fontWeight: 800 }}>My페이지</Typography>
            <Grid style={Navstyle}>
                <ul style={{ listStyleType: 'none' }}>
                    <MyinfoNavItem page={''} title={'주문 내역'} />
                    <MyinfoNavItem page={''} title={'계좌 관리'} />
                    <MyinfoNavItem page={''} title={'찜한 상품'} />
                    <MyinfoNavItem page={''} title={'개인 정보 수정'} />
                </ul>
            </Grid>
        </Box>
    )
}

export default MyinfoNavList