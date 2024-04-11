import { Box, Button, Stack, Typography } from "@mui/material"
import TextInput from "./TextInput";
import { useLoginContext } from "../context/LoginContext";
import { useEffect } from "react";

const SignUpForm = ({ Check, idCheck }) => {
    const {
        id,
        setId,
        pwd,
        setPwd,
        pwdChk,
        setPwdChk,
        email,
        setEmail,
        name,
        setName,
        phone,
        setPhone,
    } = useLoginContext();

    // 전화번호 자동 하이픈
    useEffect(() => {
        setPhone(
            phone
                .replace(/-/g, '')
                .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
        );
    }, [phone, setPhone]);

    return (
        <form onSubmit={Check}>
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
                        <TextInput id={"id"} onChange={(e) => setId(e.target.value)} value={id} placeholder='아아디를 입력해 주세요' />
                        <TextInput id={"pwd"} onChange={(e) => setPwd(e.target.value)} value={pwd} placeholder='비밀번호를 입력해 주세요' type='password' />
                        <TextInput id={"pwdChk"} onChange={(e) => setPwdChk(e.target.value)} value={pwdChk} placeholder='비밀번호를 한번더 입력해 주세요' type='password' />
                        <TextInput id={"name"} onChange={(e) => setName(e.target.value)} value={name} placeholder='이름을 입력해 주세요' />
                        <TextInput id={"phone"} onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='숫자만 입력해 주세요' />
                        <TextInput id={"email"} onChange={(e) => setEmail(e.target.value)} value={email} placeholder='이메일을 입력해 주세요' />
                    </Stack>
                </Box>
                <Box>
                    {/* onClick으로 아이디 중복확인하기 */}
                    <Button sx={{ width: 100, height: 50, ml: 3, mt: 0.2 }} variant="outlined" disableRipple onClick={idCheck}>중복확인</Button>
                </Box>
            </Box>
            <Button sx={{ width: '100%', mt: 4 }} size='large' variant="contained" disableRipple onClick={Check}>가입하기</Button>
        </form>
    )
}

export default SignUpForm;