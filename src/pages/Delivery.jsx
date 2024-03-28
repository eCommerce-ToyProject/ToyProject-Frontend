import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyinfoNavList from '../components/MyinfoNavList';
import axios from 'axios';
import TextInput from '../components/TextInput';
import AddressModal from '../components/AddressModal';
import DeliveryModal from '../components/DeliveryModal';
import CustomModal from '../components/CustomModal';

const Delivery = () => {
    const [name, setName] = useState('');
    const [zipCode, setZipcode] = useState('');
    const [roadAddress, setRoadAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [designation, setDesignation] = useState('');
    const [address, setAddress] = useState('');
    const [delModal, setDelModal] = useState(false);
    const [modal, setModal] = useState(false);
    const [msg, setMsg] = useState(false);

    const closedelModal = () => {
        setDelModal(false)
    }

    const closeModal = () => {
        setModal(false)
    }

    const handleBringAddress = () => {
        setDelModal(true)
    }

    const addAddress = async () => {
        axios.post("/delivery/createDelivery", {
            delPlc: roadAddress,
            memberId: name,
            zipCode: zipCode,
            detailAddress: detailAddress,
            designation: designation
        })
        .then(() => {
            setModal(true);
            setMsg("배송지를 추가했습니다");
        })
        .catch(() => {
            setModal(true);
            setMsg("배송지 추가를 실패했습니다");
        })
    }

    const handleAddress = () => {
        setAddress(true);
    };

    useEffect(() => {
        axios.post('/members/loginCheck')
            .then((res) => {
                setName(res.data);
            })
            .catch((error) => {
                console.error('Error checking login status:', error);
            });
    });

    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{ mb: 3 }} variant='h5' fontWeight={600}>배송지 추가 / 수정</Typography>
                <Box sx={{ display: 'flex', mt: 3 }}>
                    <Box sx={{ width: 400 }}>
                    <TextInput size={"small"} onChange={(e) => setDesignation(e.target.value)} value={designation} placeholder="배송지명" />
                        <TextInput size={"small"} onChange={(e) => setZipcode(e.target.value)} value={zipCode} placeholder="우편번호" />
                        <TextInput size={"small"} onChange={(e) => setRoadAddress(e.target.value)} value={roadAddress} placeholder="주소" />
                        <TextInput size={"small"} onChange={(e) => setDetailAddress(e.target.value)} value={detailAddress} placeholder="상세주소" />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Button variant="contained" disableRipple sx={{ height: '50%' }} onClick={handleAddress}>주소찾기</Button>
                        <Button variant="contained" disableRipple sx={{ height: '50%' }} onClick={handleBringAddress}>불러오기</Button>
                    </Box>
                </Box>
                    <Button variant="contained" disableRipple sx={{ mt: 3, mr: 2 }} onClick={addAddress}>추가하기</Button>
                    <Button variant="contained" disableRipple sx={{ mt: 3 }}>수정하기</Button>
            </Box>
            {
                address ? <AddressModal setRoadAddress={setRoadAddress} setZipcode={setZipcode} setAddress={setAddress} address={address} /> : null
            }
            {
                modal ? <CustomModal msg={msg} closeModal={closeModal} /> : null
            }
            {
                delModal ? <DeliveryModal delModal={delModal} closeModal={closedelModal} /> : null
            }
        </Box>
    )
}

export default Delivery;