import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyinfoNavList from '../components/MyinfoNavList';
import axios from 'axios';
import TextInput from '../components/TextInput';
import AddressModal from '../components/AddressModal';
import DeliveryModal from '../components/DeliveryModal';

const Delivery = () => {
    const [zipCode, setZipcode] = useState('');
    const [roadAddress, setRoadAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [designation, setDesignation] = useState('');
    const [address, setAddress] = useState('');

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

    const handleAddress = () => {
        setAddress(true);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{ mb: 3 }} variant='h5' fontWeight={600}>배송지 추가</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ width: 400 }}>
                        <TextInput size={"small"} onChange={(e) => setZipcode(e.target.value)} value={zipCode} placeholder="우편번호" />
                        <TextInput size={"small"} onChange={(e) => setRoadAddress(e.target.value)} value={roadAddress} placeholder="주소" />
                        <TextInput size={"small"} onChange={(e) => setDetailAddress(e.target.value)} value={detailAddress} placeholder="상세주소" />
                    </Box>
                    <Button variant="contained" disableRipple onClick={handleAddress}>주소찾기</Button>
                </Box>
                <Button variant="contained" disableRipple sx={{ mt: 3 }}>추가하기</Button>
            </Box>
            {
                address ? <AddressModal setRoadAddress={setRoadAddress} setZipcode={setZipcode} setAddress={setAddress} address={address} /> : null
            }
        </Box>
    )
}

export default Delivery;