import { Box, Button, NativeSelect, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import Apple from '../assets/images.jpg';

const Prodetail = () => {
    const [qty, setQty] = useState(1);

    return (
        <Box sx={{ display: 'flex' }}>
            <Box>
                <img src={Apple} alt='사과' style={{ width: 400, height: 400 }} />
            </Box>
            <Box sx={{ ml: 7, width: 450, border: '1px solid black' }}>
                <Typography sx={{ wordBreak: 'break-all' }} variant='h5' component='h5'>엄청 맛있는 사과 3개</Typography>
                <Typography sx={{ color: '#ae0000', mt: 3 }} variant='h5' component='h5'>12,000원</Typography>

                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect><br />
                <form style={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex' }}>
                        <TextField sx={{
                            '& .MuiInputBase-root': {
                                "&:hover fieldset": {
                                    borderColor: 'rgb(192, 192, 192);'
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: 'black',
                                    border: '0.5px solid black'
                                }
                            },
                            width: 45,
                        }} value={qty} />
                        <Box sx={{ display: 'grid', width: 65 }}>
                            <Button onClick={() => setQty(qty + 1)} variant="contained" disableRipple>▲</Button>
                            <Button onClick={() => {
                                if (qty === 1) {
                                } else {
                                    setQty(qty - 1)
                                }
                            }} variant="contained" disableRipple>▼</Button>
                        </Box>
                    </Box>
                    <Button sx={{ width: '70%', height: 55, ml: 3 }} size='large' variant="contained" disableRipple>구매하기</Button>
                </form>
            </Box>
        </Box>
    )
}

export default Prodetail;