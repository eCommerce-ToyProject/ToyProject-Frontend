import { Box, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlogout = () => {

    const LinkStyle = {
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'none',
    }

    const Logout = () => {
        localStorage.removeItem('access token')
    }

    return (
        <Box sx={{ fontSize: '0.8rem', color: 'lightgrey', textAlign: 'right', width: 900, m: 'auto', mt: 2}}>
            <label style={LinkStyle}>{}님</label>&nbsp;&nbsp; | &nbsp;&nbsp;
            <NavLink onClick={Logout} style={LinkStyle}>로그아웃</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
            <NavLink to="/detail" style={LinkStyle}>고객센터</NavLink>
        </Box >
    )
}

export default Navlogout;