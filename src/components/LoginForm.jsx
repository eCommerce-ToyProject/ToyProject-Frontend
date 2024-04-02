import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material"
import TextInput from "./TextInput"
import { useAuthContext } from "../context/AuthContext";

const LoginForm = ({ Check, navSignup }) => {
    const {
        loginId,
        setLoginId,
        loginPwd,
        setLoginPwd,
    } = useAuthContext();

    return (
        <form onSubmit={Check}>
            <Stack sx={{ mb: 1 }} gap={2}>
                <TextInput id={"id"} onChange={(e) => setLoginId(e.target.value)} value={loginId} placeholder='아이디' />
                <TextInput id={"pwd"} onChange={(e) => setLoginPwd(e.target.value)} value={loginPwd} placeholder='비밀번호' type='password' />
            </Stack>

            <FormControlLabel
                label="아이디 저장"
                control={<Checkbox disableRipple sx={{
                    '&:hover': { bgcolor: 'transparent' },
                }} />}
            />

            <Button sx={{ width: '100%', mb: 2 }} size='large' variant="contained" disableRipple onClick={Check}>로그인</Button>
            <Button sx={{ width: '100%' }} size='large' variant="outlined" disableRipple onClick={navSignup}>회원가입</Button>
        </form>
    )
}

export default LoginForm;