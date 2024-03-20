import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CustomModal from '../components/CustomModal';
import TextInput from '../components/TextInput';
import axios from 'axios';

const Signup = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdChk, setPwdChk] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    let [phone, setPhone] = useState('');
    const [modal, setModal] = useState(false);
    const [desc, setDesc] = useState('');

    // 전화번호 자동 하이픈
    useEffect(() => {
        setPhone(
            phone = phone
                .replace(/-/g, '')
                .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
        );
    }, [phone]);

    const Check = async () => {
        if (!id || !pwd || !phone || !name) {
            setModal(true);
            setDesc("필수 정보들을 작성해주세요.");
        } else if (pwd !== pwdChk) {
            setModal(true);
            setDesc("비밀번호가 일치하지 않습니다.");
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
        }
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
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Stack sx={{ width: 120 }} gap={2}>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>아아디<span style={{ color: 'red' }}>*</span></Typography>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>비밀번호<span style={{ color: 'red' }}>*</span></Typography>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>비밀번호 확인<span style={{ color: 'red' }}>*</span></Typography>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>이름<span style={{ color: 'red' }}>*</span></Typography>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>전화번호<span style={{ color: 'red' }}>*</span></Typography>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>이메일</Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack sx={{ width: 350 }} gap={2}>
                        <TextInput onChange={(e) => setId(e.target.value)} value={id} placeholder='아아디를 입력해 주세요' />
                        <TextInput onChange={(e) => setPwd(e.target.value)} value={pwd} placeholder='비밀번호를 입력해 주세요' />
                        <TextInput onChange={(e) => setPwdChk(e.target.value)} value={pwdChk} placeholder='비밀번호를 한번더 입력해 주세요' />
                        <TextInput onChange={(e) => setName(e.target.value)} value={name} placeholder='이름을 입력해 주세요' />
                        <TextInput onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='숫자만 입력해 주세요' />
                        <TextInput onChange={(e) => setEmail(e.target.value)} value={email} placeholder='이메일을 입력해 주세요' />
                    </Stack>
                </Box>
                <Box>
                    {/* onClick으로 아이디 중복확인하기 */}
                    <Button sx={{ width: 100, height: 50, ml: 3, mt: 0.2 }} variant="outlined" disableRipple >중복확인</Button>
                </Box>
            </Box>
            <Button sx={{ width: '100%', mt: 4 }} size='large' variant="contained" disableRipple onClick={Check}>가입하기</Button>
            {
                modal && <CustomModal closeModal={closeModal} msg={desc} />
            }
        </Box>
    )
}

export default Signup;