import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Myinfo from './Myinfo';
import ProDetail from './Pro_detail';
import Header from '../components/Header';
import { Box } from '@mui/material';
import ProOrder from './Pro_order';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Box sx={{ width: 1000, m: 'auto', minHeight: '80vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/myinfo' element={<Myinfo />} />
          <Route path='/productdetail/:id' element={<ProDetail />} />
          <Route path='/productorder/:id' element={<ProOrder />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
