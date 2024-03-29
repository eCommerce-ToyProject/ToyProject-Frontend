import { Box, Button, Grid, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeliveryCard from './DeliveryCard';
import axios from 'axios';

const DeliveryModal = ({ id, delModal, closeModal, setRoadAddress, setZipcode, setDetailAddress, setDesignation, setDelno }) => {
    const [delivery, setDelivery] = useState([]);

    useEffect(() => {
        if (id !== undefined) {
            axios.get(`/delivery/deliveryList?id=${id}`)
                .then((res) => {
                    setDelivery(res.data.content)
                })
                .catch((error) => {
                    console.error('Error checking login status:', error);
                });
        }
    }, []);



    const Close = () => {
        closeModal()
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 370,
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={delModal}
            onClose={Close}
        >
            <Box sx={style}>
                <Grid sx={{
                    overflowY: 'auto', // 세로 스크롤바만 표시되도록 함
                    height: 300,
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}>
                    {delivery.length > 0 ? <DeliveryCard props={delivery} Close={Close} setDetailAddress={setDetailAddress} setRoadAddress={setRoadAddress} setZipcode={setZipcode} setDesignation={setDesignation} setDelno={setDelno} /> : null}
                </Grid>
                <Button sx={{ width: '100%', fontWeightL: 900, mt: 2 }} size='large' variant="contained" disableRipple onClick={Close}>취소</Button>
            </Box>
        </Modal>
    )
}

export default DeliveryModal;