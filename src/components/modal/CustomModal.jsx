import { Box, Modal, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const CustomModal = ({ closeModal, msg, nav }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true)

    const Close = () => {
        setOpen(false)
        closeModal();
        navigate(nav)
    }

    return (
        <Modal
            open={open}
            onClose={Close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" sx={{ mt: 2, textAlign: 'center' }}>
                    {msg}
                </Typography>
                <Button sx={{ width: '100%', mt: 4, fontWeightL: 900 }} size='large' variant="contained" disableRipple onClick={Close}>확인</Button>
            </Box>
        </Modal>
    )
}

export default CustomModal