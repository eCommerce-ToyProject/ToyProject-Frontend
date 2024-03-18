import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import CustomModal from '../components/CustomModal';
import TextInput from '../components/TextInput';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdChk, setPwdChk] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [modal, setModal] = useState(false);
    const [desc, setDesc] = useState('');

    const Check = () => {
        if (!id || !pwd || !email || !name || !phone) {
            setModal(true);
            setDesc("필수 정보들을 작성해주세요.");
        }else if(pwd !== pwdChk){
            setModal(true);
            setDesc("비밀번호가 일치하지 않습니다.");
        }else{
            setModal(true);
            setDesc("회원가입에 성공하였습니다!");
            navigate('/login');
        }
    };

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
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>아아디</Typography>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>비밀번호</Typography>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>비밀번호 확인</Typography>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>이메일</Typography>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>이름</Typography>
                        <Typography sx={{ textAlign: 'center', lineHeight: 3.5, fontWeight: 400 }}>전화번호</Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack sx={{ width: 350 }} gap={2}>
                        <TextInput onChange={(e) => setId(e.target.value)} value={id} placeholder='아아디' />
                        <TextInput onChange={(e) => setPwd(e.target.value)} value={pwd} placeholder='비밀번호' />
                        <TextInput onChange={(e) => setPwdChk(e.target.value)} value={pwdChk} placeholder='비밀번호 확인' />
                        <TextInput onChange={(e) => setEmail(e.target.value)} value={email} placeholder='이메일' />
                        <TextInput onChange={(e) => setName(e.target.value)} value={name} placeholder='이름' />
                        <TextInput onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='전화번호' />
                    </Stack>
                </Box>
                <Box>
                    {/* onClick으로 아이디 중복확인하기 */}
                    <Button sx={{ width: 100, height: 50, ml: 3, mt: 0.2 }} variant="outlined" disableRipple >중복확인</Button>
                </Box>
            </Box>
            {
                modal && <CustomModal closeModal={closeModal} msg={desc} />
            }
            <Button sx={{ width: '100%', mt: 4 }} size='large' variant="contained" disableRipple onClick={Check}>가입하기</Button>
        </Box>
    )
}

export default Signup;