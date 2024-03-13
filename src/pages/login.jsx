import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import TextInput from '../components/TextInput';
import LoginModal from '../components/LoginModal';

const Login = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [modal, setModal] = useState(false);

    const Check = () => {
        if(id && pwd == ''){
            setModal(true)
        }else if(id || pwd == ''){
            setModal(true)
        }else{
            console.log('로그인 성공')
        }
    }

    return (
        <Box sx={{
            margin: '0 auto',
            width: '400px',
            height: '300px'
        }}>
            <Typography sx={{ textAlign: 'center', mb: 4 }} variant='h5' component="h5">로그인</Typography>
            <Stack sx={{ mb: 5 }} gap={2}>
                <TextInput onChange={(e) => setId(e.target.value)} value={id} placeholder='아아디' />
                <TextInput onChange={(e) => setPwd(e.target.value)} value={pwd} placeholder='비밀번호' />
            </Stack>

            <Button sx={{ width: '100%', mb: 2 }} size='large' variant="contained" disableRipple onClick={Check}>로그인</Button>
            <Button sx={{ width: '100%' }} size='large' variant="outlined" disableRipple>회원가입</Button>
            {
                modal === true ? <LoginModal/> : null
            }
        </Box >
    )
}

export default Login;