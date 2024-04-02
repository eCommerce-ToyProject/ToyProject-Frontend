import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useCookies } from 'react-cookie';
import axios from 'axios';


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

const Header = ({ search, setSearch, setProduct }) => {
    const [cookies, removeCookie] = useCookies(['accessToken']);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [searchVal, setSearchVal] = useState('');

    const LinkStyle = {
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'none',
    }

    const Logout = () => {
        removeCookie('accessToken')
        setIsLoggedIn(false)
        setName('');
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchVal !== '') {
            axios.get(`/goods/goodsList?values=${encodeURIComponent(search)}`)
                .then((res) => {
                    setProduct(res.data.content);
                    setSearch(searchVal)
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        } else {
            setSearch('');
        }
        setSearch('')
    };

    useEffect(() => {
        cookies.accessToken !== undefined
            ? axios.get('/members/loginCheck')
                .then((res) => {
                    setName(res.data);
                    setIsLoggedIn(true);
                })
                .catch(() => {
                    setIsLoggedIn(false);
                })
            :
            setIsLoggedIn(false);
    }, [cookies.accessToken, setIsLoggedIn]);

    return (
        <Box>
            <Box sx={{ fontSize: '0.8rem', color: 'lightgrey', textAlign: 'right', width: 900, m: 'auto', mt: 2 }}>
                {
                    isLoggedIn
                        ? (
                            <>
                                <label style={LinkStyle}>{name}님</label> &nbsp;&nbsp; | &nbsp;&nbsp;
                                <NavLink to='/' onClick={Logout} style={LinkStyle}>로그아웃</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
                            </>
                        )
                        : (
                            <>
                                <NavLink to="/signup" style={{
                                    fontWeight: 'bold',
                                    color: '#1976d2',
                                    textDecoration: 'none',
                                }}>회원가입</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
                                <NavLink to="/login" style={LinkStyle}>로그인</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
                            </>
                        )
                }
                <NavLink to="/detail" style={LinkStyle}>고객센터</NavLink>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: 920, m: 'auto', mt: 4, mb: 9 }}>

                {/* 사진 */}
                <Box onClick={() => {
                    setSearch('');
                    setSearchVal('');
                }}>
                    <NavLink to="/" ><img src={logo} alt="logo"
                        style={{
                            width: '100px',
                            height: '40px',
                        }} /></NavLink>
                </Box>

                {/* 검색바 */}
                <Box sx={{
                    width: 405,
                    border: '2px solid #1976d2',
                    borderRadius: '6px',
                    m: 'auto'
                }}>
                    <form>
                        <StyledInput onChange={e => setSearchVal(e.target.value)} value={searchVal} type="text" placeholder="검색어를 입력해주세요" />
                        <StyledButton onClick={handleSearch}><BsSearch size='16' /></StyledButton>
                    </form>
                </Box>

                {/* 아이콘 */}
                <NavLink to={name === '' ? '/login' : '/myinfo'} style={{ color: 'black' }}><BsFillPersonFill size={45} /></NavLink>
            </Box>
        </Box>
    )
}

export default Header;