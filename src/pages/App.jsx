import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Myinfo from './Myinfo';
import Prodetail from './Pro_detail';
import Header from '../components/Header';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Header />
      <Box sx={{ width: 1000, m: 'auto', minHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/myinfo' element={<Myinfo />} />
          <Route path='/detail' element={<Prodetail />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
