import { Box, Grid, Typography } from "@mui/material"
import NavItem from "./NavItem"

const NavList = () => {

    const Boxstyle = {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    }

    const Navstyle = {
        display: 'flex',
        flexDirection: 'column'
    }

    return (
        <Box sx={Boxstyle}>
            <Typography sx={{ fontSize: '1.6rem', fontWeight: 800 }}>My페이지</Typography>
            <Grid style={Navstyle}>
                <ul>
                    <NavItem page={''} title={'주문 내역'} />
                    <NavItem page={''} title={'계좌 관리'} />
                    <NavItem page={''} title={'찜한 상품'} />
                    <NavItem page={''} title={'개인 정보 수정'} />
                </ul>
            </Grid>
        </Box>
    )
}

export default NavList