import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import TextInput from '../components/TextInput';
import CustomModal from '../components/CustomModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Login = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [, setCookie] = useCookies();

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [modal, setModal] = useState(false);

    const Check = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("members/sign-in", {
                id: id,
                password: pwd
            });
            setCookie("accessToken", res.data.accessToken, { path: '/' });
            setIsLoggedIn(true);
            navigate('/');
        } catch (error) {
            setModal(true);
        }
    };

    const closeModal = () => {
        setModal(false);
    }

    const navSignup = () => {
        navigate('/signup');
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
                <TextInput onChange={(e) => setId(e.target.value)} value={id} placeholder='아이디' />
                <TextInput onChange={(e) => setPwd(e.target.value)} value={pwd} placeholder='비밀번호' type='password' />
            </Stack>

            <FormControlLabel
                label="아이디 저장"
                control={<Checkbox disableRipple sx={{
                    '&:hover': { bgcolor: 'transparent' },
                }} />}
            />

            <Button sx={{ width: '100%', mb: 2 }} size='large' variant="contained" disableRipple onClick={Check}>로그인</Button>
            <Button sx={{ width: '100%' }} size='large' variant="outlined" disableRipple onClick={navSignup}>회원가입</Button>
            {
                modal && <CustomModal closeModal={closeModal} msg={"아이디 또는 비밀번호를 확인해주세요."} />
            }
        </Box >
    )
}

export default Login;