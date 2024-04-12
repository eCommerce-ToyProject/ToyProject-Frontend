import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import MyinfoNavList from '../components/MyinfoNavList';
import AddressModal from '../components/AddressModal';
import AddDeliModal from '../components/AddDeliModal';
import CustomModal from '../components/CustomModal';
import { useDeliveryContext } from '../context/DeliveryContext';
import axios from 'axios';
import { useSelector } from 'react-redux';
import DeliveryListCard from '../components/DeliveryListCard';
import ModifyDeliModal from '../components/ModifyDeliModal';

const Delivery = () => {
    const name = useSelector(state => state.name);
    const [delivery, setDelivery] = useState([]);
    const {
        address,
        setAddress,
        addDelModal,
        setAddDelModal,
        modDelModal,
        setModDelModal,
        modal,
        setModal,
        msg,
    } = useDeliveryContext();

    const closeModal = () => {
        setModal(false)
    }

    const handleAddAddress = () => {
        setAddDelModal(true);
    }

    const handleAddress = () => {
        setAddress(true);
    }

    const handleModAddress = () => {
        setModDelModal(true);
    }

    useEffect(() => {
        if (name !== undefined) {
            axios.get(`/delivery/deliveryList?id=${name}`)
                .then((res) => {
                    setDelivery(res.data.content)
                })
                .catch((error) => {
                    console.error('Error checking login status:', error);
                });
        }
    }, [name, modal]);

    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{ mb: 3, ml: 3 }} variant='h5' fontWeight={600}>
                    배송지 추가 / 수정
                    <Button variant="contained" disableRipple sx={{ ml: 3 }} onClick={handleAddAddress}>추가하기</Button>
                </Typography>
                <Grid sx={{
                    pr: 3,
                    pl: 3,
                    overflowY: 'auto', // 세로 스크롤바만 표시되도록 함
                    height: 700,
                    '&::-webkit-scrollbar': {
                        width: '0.4em' // 스크롤바 너비 조정
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)' // 스크롤바 색상 조정
                    }
                }}>
                    {delivery.length > 0 ? <DeliveryListCard item={delivery} onClick={handleModAddress}/> : null}
                </Grid>
            </Box>
            {
                address ? <AddressModal /> : null
            }
            {
                modal ? <CustomModal msg={msg} closeModal={closeModal} /> : null
            }
            {
                addDelModal
                    ? <AddDeliModal onAddressSearch={handleAddress} />
                    : null
            }
            {
                modDelModal ? <ModifyDeliModal onAddressSearch={handleAddress} /> : null
            }
        </Box>
    )
}

export default Delivery;