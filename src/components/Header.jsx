import React, { useEffect } from 'react'
import styled from 'styled-components';
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useSearchContext } from '../context/SearchContext';
import { useLoginContext } from '../context/LoginContext';
import CustomModal from './CustomModal';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../redux/login';
import { search } from '../redux/serach';

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector(state => state.name);
    const [cookies, setCookie, removeCookie] = useCookies(["accessToken", "refreshToken"]);
    const {
        setSearch,
        searchVal,
        setSearchVal,
    } = useSearchContext();
    const { modal, setModal } = useLoginContext();

    const LinkStyle = {
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'none',
    }

    const Logout = () => {
        removeCookie("accessToken");
        removeCookie("refreshToken");
        dispatch(logout());
    }

    const closeModal = () => {
        setModal(false);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchVal !== '') {
            dispatch(search(searchVal));
            navigate('/');
        } else {
            dispatch(search(searchVal));
        }
    };

    const RefreshToken = () => {
        axios.post('/members/reissuanceAccessToken', {
            refreshToken: cookies.refreshToken
        })
            .then(res => {
                Logout();
                setCookie("accessToken", res.data.accessToken, { path: '/' });
                setCookie("refreshToken", res.data.refreshToken, { path: '/' });
            })
            .catch(err => {
                if (err.response.status === 400) {
                    Logout();
                    console.log("잘못보냄")
                }
            })
    }

    useEffect(() => {
        axios.get('/members/loginCheck', {
            withCredentials: false,
            headers: {
                Authorization: `Bearer ${cookies.accessToken}`
            }
        })
            .then((res) => {
                dispatch(loginSuccess(res.data));
            })
            .catch((err) => {
                if (err.response.status === 403) {
                    console.log("아이디를 찾을 수 없음")
                } else if (err.response.status === 401) {
                    RefreshToken()
                } else {
                    console.log("다른 에러")
                    Logout();
                }
                console.log(err)
            })
    }, [cookies.accessToken]);


    useEffect(() => {
        // SameSite 속성을 설정하여 쿠키 보호
        setCookie("accessToken", cookies.accessToken, { sameSite: 'none', secure: true });
        setCookie("refreshToken", cookies.accessToken, { sameSite: 'none', secure: true });
    }, [cookies.accessToken, setCookie]);

    return (
        <Box>
            <Box sx={{ fontSize: '0.8rem', color: 'lightgrey', textAlign: 'right', width: 900, m: 'auto', mt: 2 }}>
                {
                    name
                        ? (
                            // 로그인 된 상태
                            <>
                                <label style={LinkStyle}>{name}님</label> &nbsp;&nbsp; | &nbsp;&nbsp;
                                <NavLink to='/' onClick={Logout} style={LinkStyle}>로그아웃</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
                            </>
                        )
                        : (
                            // 로그인 안된 상태
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
                    <NavLink to="/" ><img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo"
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
                <NavLink to={name === '' ? '/login' : '/myinfo/orderlist'} style={{ color: 'black' }}><BsFillPersonFill size={45} /></NavLink>
            </Box>
            {
                modal && <CustomModal closeModal={closeModal} msg={"세션이 만료되었습니다."} />
            }
        </Box>
    )
}

export default Header;