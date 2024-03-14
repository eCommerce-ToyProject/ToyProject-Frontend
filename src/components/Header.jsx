import React from 'react'
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';


const StyledInput = styled.input`
    width: 24rem;
    font-size: 16px;
    outline: none;
    height: 2.2rem;
    border: none;
    padding: 5px;
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
        <Box sx={{ border: '1px solid black' }}>
            <Box sx={{ fontSize: '0.8rem', color: 'lightgrey', textAlign: 'right', width: 900, m: 'auto', mt: 2 }}>
                <NavLink to="/signup" style={{
                    fontWeight: 'bold',
                    color: '#1976d2',
                    textDecoration: 'none',
                }}>회원가입</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
                <NavLink to="/login" style={LinkStyle}>로그인</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
                <NavLink to="/" style={LinkStyle}>고객센터</NavLink>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: 900, m: 'auto', mt: 4, border: '1px solid black' }}>

                사진

                <Box sx={{
                    width: 430,
                    border: '1px solid #1976d2',
                    borderRadius: '6px',
                }}>
                    <form>
                        <StyledInput type="text" placeholder="검색어를 입력해주세요" />
                        <StyledButton><BsSearch size='14' /></StyledButton>
                    </form>
                </Box>

                마이인포
            </Box>
        </Box>
    )
}

export default Header;