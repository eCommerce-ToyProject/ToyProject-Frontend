import { Box, Modal, Typography, Button } from '@mui/material';
import React, { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

const LoginModal = () => {
    let [open, setOpen] = useState(true)

    const Close = () => {
        setOpen(false)
    }

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                    아이디 또는 비밀번호를 확인해주세요.
                </Typography>
                <Button sx={{ width: '100%', mt: 4 }} size='large' variant="contained" disableRipple onClick={Close}>확인</Button>
            </Box>
        </Modal>
    )
}

export default LoginModal