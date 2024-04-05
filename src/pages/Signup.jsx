import { Box, Typography } from '@mui/material';
import React from 'react'
import CustomModal from '../components/CustomModal';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';
import SignUpForm from '../components/SignUpForm';

const Signup = () => {
    const {
        id,
        pwd,
        pwdChk,
        email,
        name,
        phone,
        modal,
        setModal,
        desc,
        setDesc,
        nav,
        setNav,
        checkId,
        SetCheckId
    } = useAuthContext();

    const idRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,25}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

    const Check = async () => {
        if (!id || !pwd || !phone || !name) {
            setModal(true);
            setDesc("필수 정보들을 작성해주세요.");
        } else if (pwd !== pwdChk) {
            setModal(true);
            setDesc("비밀번호가 일치하지 않습니다.");
        } else if (!passwordRegex.test(pwd)) {
            setModal(true);
            setDesc("영문, 숫자, 특수문자를 포함하여 8자 이상을 작성해주세요.")
        } else if (email !== '' && !emailRegex.test(email)) {
            setModal(true)
            setDesc("이메일 형식에 맞춰 작성해주세요.")
        } else if (!checkId) {
            setModal(true)
            setDesc("아이디 중복체크를 해주세요.")
        } else {
            await axios.post('/members/sign-up', {
                id: id,
                password: pwd,
                username: name,
                phone: phone,
                email: email
            })
            setModal(true);
            setDesc("회원가입에 성공하였습니다!");
            setNav('/login')
        }
    }

    const idCheck = async () => {
        axios.get(`members/id/exists?id=${id}`)
            .then(res => {
                if (!idRegex.test(id)) {
                    setModal(true);
                    setDesc("아이디는 영문, 숫자를 한자씩 포함해 6자 이상을 작성해주세요.")
                    SetCheckId(false);
                } else if (res.data === false) {
                    setModal(true)
                    setDesc('사용가능한 아이디입니다.')
                    SetCheckId(true);
                } else if (res.data) {
                    setModal(true)
                    setDesc('중복된 아이디입니다.')
                    SetCheckId(false);
                } else {
                    console.log('에러입니다')
                    SetCheckId(false);
                }
            }).catch(error => {
                console.error('Error fetching data:', error);
            })
    }

    const closeModal = () => {
        setModal(false)
    }
    return (
        <Box sx={{
            m: 'auto',
            mt: 5,
            width: '500px',
            height: '500px',
        }}>
            <Typography sx={{ textAlign: 'center', mb: 4, fontWeight: 500 }} variant='h5' component="h5">회원가입</Typography>

            <SignUpForm Check={Check} idCheck={idCheck} />

            {
                modal && <CustomModal closeModal={closeModal} msg={desc} nav={nav} />
            }
        </Box>
    )
}

export default Signup;