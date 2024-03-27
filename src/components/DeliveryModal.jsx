import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import React from 'react';
import DeliveryCard from './DeliveryCard';

const DeliveryModal = ({ delModal, closeModal }) => {

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
                    <DeliveryCard />
                    <DeliveryCard />
                    <DeliveryCard />
                    <DeliveryCard />
                </Grid>
                <Button sx={{ width: '100%', fontWeightL: 900, mt: 2 }} size='large' variant="contained" disableRipple onClick={Close}>취소</Button>
            </Box>
        </Modal>
    )
}

export default DeliveryModal;