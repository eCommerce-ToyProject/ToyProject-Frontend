import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import TextInput from '../components/TextInput';
import CustomModal from '../components/CustomModal';

const Login = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [modal, setModal] = useState(false);

    const Check = () => {
        if (!id || !pwd) {
            setModal(true);
        }
    };

    const closeModal = () => {
        setModal(false)
    }

    return (
        <Box sx={{
            m: 'auto',
            mt: 5,
            width: '350px',
            height: '400px'
        }}>
            <Typography sx={{ textAlign: 'center', mb: 4, fontWeight: 500 }} variant='h5' component="h5">로그인</Typography>
            <Stack sx={{ mb: 1 }} gap={2}>
                <TextInput onChange={(e) => setId(e.target.value)} value={id} placeholder='아아디' />
                <TextInput onChange={(e) => setPwd(e.target.value)} value={pwd} placeholder='비밀번호' />
            </Stack>

            <FormControlLabel
                label="아이디 저장"
                control={<Checkbox disableRipple sx={{
                    '&:hover': { bgcolor: 'transparent' },
                }}/>}
            />

            <Button sx={{ width: '100%', mb: 2 }} size='large' variant="contained" disableRipple onClick={Check}>로그인</Button>
            <Button sx={{ width: '100%' }} size='large' variant="outlined" disableRipple>회원가입</Button>
            {
                modal && <CustomModal closeModal={closeModal} msg={"아이디 또는 비밀번호를 확인해주세요."} />
            }
        </Box >
    )
}

export default Login;