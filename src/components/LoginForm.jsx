import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material"
import TextInput from "./TextInput"
import { useLoginContext } from "../context/LoginContext";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const LoginForm = ({ Check, navSignup }) => {
    const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
    const {
        loginId,
        setLoginId,
        loginPwd,
        setLoginPwd,
        isRemember,
        setIsRemember
    } = useLoginContext();

    useEffect(() => {
        if (cookies.rememberUserId !== undefined) {
          setLoginId(cookies.rememberUserId);
          setIsRemember(true);
        }
      }, [cookies.rememberUserId, setLoginId, setIsRemember]);
    
    
    const handleOnChange = (e) => {
        //체크박스 상태 업데이트
        setIsRemember(e.target.checked);
        if (e.target.checked) {
          //쿠키에 userId 값 저장, 유효기간 2000초
          setCookie("rememberUserId", loginId, { maxAge: 2000 });
        } else {
          //체크 안 되어 있으면 쿠키 삭제
          removeCookie("rememberUserId");
        }
      };

    return (
        <form onSubmit={Check}>
            <Stack sx={{ mb: 1 }} gap={2}>
                <TextInput id={"id"} onChange={(e) => setLoginId(e.target.value)} value={loginId} placeholder='아이디' />
                <TextInput id={"pwd"} onChange={(e) => setLoginPwd(e.target.value)} value={loginPwd} placeholder='비밀번호' type='password' />
            </Stack>

            <FormControlLabel
                label="아이디 저장"
                control={<Checkbox disableRipple 
                    checked={isRemember}
                    onChange={handleOnChange}
                    sx={{
                    '&:hover': { bgcolor: 'transparent' },
                }} />}
            />

            <Button sx={{ width: '100%', mb: 2 }} size='large' variant="contained" disableRipple onClick={Check}>로그인</Button>
            <Button sx={{ width: '100%' }} size='large' variant="outlined" disableRipple onClick={navSignup}>회원가입</Button>
        </form>
    )
}

export default LoginForm;