import React from 'react'
import styled from 'styled-components';
import { BsSearch, BsCart, BsFillPersonFill} from 'react-icons/bs';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';


const StyledInput = styled.input`
    width: 22rem;
    font-size: 16px;
    outline: none;
    height: 2.2rem;
    border: none;
    padding: 5px;
    padding-left: 8px;
    margin-left: 2px;
`

const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0.6rem;
    cursor: pointer;
`

const Header = () => {

    const LinkStyle = {
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'none',
    }

    return (
        <Box>
            {/* 네비게이션 / 나중에 로그인 여부에따라 로그아웃으로 바꾸는 코드 작성(삼항 연산자 사용할 것) */}
            <Box sx={{ fontSize: '0.8rem', color: 'lightgrey', textAlign: 'right', width: 900, m: 'auto', mt: 2 }}>
                <NavLink to="/signup" style={{
                    fontWeight: 'bold',
                    color: '#1976d2',
                    textDecoration: 'none',
                }}>회원가입</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
                <NavLink to="/login" style={LinkStyle}>로그인</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
                <NavLink to="/detail" style={LinkStyle}>고객센터</NavLink>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: 920, m: 'auto', mt: 4, mb: 9 }}>

                {/* 사진 */}
                <NavLink to="/"><img src={logo} alt="logo" style={{
                    width: '100px',
                    height: '40px',
                }} /></NavLink>

                {/* 검색바 */}
                <Box sx={{
                    width: 405,
                    border: '2px solid #1976d2',
                    borderRadius: '6px',
                    m: 'auto'
                }}>
                    <form>
                        <StyledInput type="text" placeholder="검색어를 입력해주세요" />
                        <StyledButton><BsSearch size='16' /></StyledButton>
                    </form>
                </Box>

                {/* 아이콘 */}
                <NavLink to="/myinfo" style={{ color: 'black' }}><BsFillPersonFill size={45}/></NavLink>
            </Box>
        </Box>
    )
}

export default Header;