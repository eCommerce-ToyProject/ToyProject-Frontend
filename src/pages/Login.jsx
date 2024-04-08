import React from 'react'
import { Box, Typography } from '@mui/material';
import CustomModal from '../components/CustomModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import LoginForm from '../components/LoginForm';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const [, setCookie] = useCookies(["accessToken", "refreshToken"]);
    const {
        loginId,
        setLoginId,
        loginPwd,
        setLoginPwd,
        modal,
        setModal,
    } = useAuthContext();

    const Check = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post("members/sign-in", {
                id: loginId,
                password: loginPwd
            })
            console.log(res.data)
            setCookie("accessToken", res.data.accessToken, { path: '/', expires: new Date(Date.now() + 86400 * 1000) });
            setCookie("refreshToken", res.data.refreshToken, { path: '/'});
            navigate('/');
            
        } catch (error) {
            setModal(true)
        }
        setLoginId('');
        setLoginPwd('');
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
            
            <LoginForm  navSignup={navSignup} Check={Check} />
            
            {
                modal && <CustomModal closeModal={closeModal} msg={"아이디 또는 비밀번호를 확인해주세요."} />
            }
        </Box >
    )
}

export default Login;