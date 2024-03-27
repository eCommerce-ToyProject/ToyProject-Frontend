import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyinfoNavList from '../components/MyinfoNavList';
import axios from 'axios';
import TextInput from '../components/TextInput';

const Delivery = () => {
    const [zipCode, setZipcode] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [designation, setDesignation] = useState('');

    useEffect(() => {
        axios.get('/deliveryList')
            .then(res => {
                setZipcode();
                setAddress();
                setDetailAddress();
                setDesignation();
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    })

    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{ mb: 3 }} variant='h5' fontWeight={600}>배송지 추가</Typography>
                <Box>
                    <Box sx={{ width: 400 }}>
                        <TextInput size={"small"} onChange={(e) => setZipcode(e.target.value)} value={zipCode} placeholder="우편번호" />
                        <TextInput size={"small"} onChange={(e) => setAddress(e.target.value)} value={address} placeholder="주소" />
                        <TextInput size={"small"} onChange={(e) => setDetailAddress(e.target.value)} value={detailAddress} placeholder="상세주소" />
                    </Box>
                    <Button variant="contained" disableRipple>주소찾기</Button>
                    <Button variant="contained" disableRipple>주소 추가하기</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Delivery;