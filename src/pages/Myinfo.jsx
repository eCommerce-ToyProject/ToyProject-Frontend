import { Grid, Typography, Box } from '@mui/material';
import dress from '../assets/dress.jpg';
import React from 'react'
import MyinfoNavList from '../components/MyinfoNavList';

const Myinfo = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{mb: 3}} variant='h5' fontWeight={600}>주문 내역</Typography>
                <Grid sx={{ width: 700 }}>
                    <Box sx={{ border: '1px solid #DEDEDE', borderRadius: 4, p: 2 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>{'2024.2.24'} 주문</Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', width: 600 }}>
                                <img src={dress} alt={dress} style={{ width: '150px', height: '150px' }} />
                                <Typography sx={{ ml: 5 }}>블랙 드레스</Typography>
                            </Box>

                            <Box>{'가격'}</Box>
                            <Box>{'수량'}</Box>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}

export default Myinfo;