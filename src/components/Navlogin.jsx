import { Box } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlogin = () => {

    const LinkStyle = {
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'none',
    }

    return (
        <Box sx={{ fontSize: '0.8rem', color: 'lightgrey', textAlign: 'right', width: 900, m: 'auto', mt: 2 }}>
            <NavLink to="/signup" style={{
                fontWeight: 'bold',
                color: '#1976d2',
                textDecoration: 'none',
            }}>회원가입</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
            <NavLink to="/login" style={LinkStyle}>로그인</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
            <NavLink to="/detail" style={LinkStyle}>고객센터</NavLink>
        </Box>
    )
}

export default Navlogin;