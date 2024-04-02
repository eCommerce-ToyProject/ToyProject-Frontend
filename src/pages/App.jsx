import React, { useState } from 'react';
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
import NotFound from './404';
import Delivery from './Delivery';
import { DeliveryProvider } from '../context/DeliveryContext';
import { AuthProvider } from '../context/AuthContext';

function App() {
  const [search, setSearch] = useState('');
  const [product, setProduct] = useState([]);

  return (
    <>
      <Header search={search} setSearch={setSearch} setProduct={setProduct} />
      <Box sx={{ width: 1000, m: 'auto', minHeight: 850 }}>
        <Routes>
          <Route path='/' element={<Home search={search} product={product} setProduct={setProduct} />} />
          <Route path='/login' element={<AuthProvider><Login /></AuthProvider>} />
          <Route path='/signup' element={<AuthProvider><Signup /></AuthProvider>} />
          <Route path='/myinfo' element={<Myinfo />} />
          <Route path='/myinfo/delivery' element={<DeliveryProvider><Delivery /></DeliveryProvider>} />
          <Route path='/productdetail/:id' element={<ProDetail />} />
          <Route path='/productorder/:id' element={<DeliveryProvider><ProOrder /></DeliveryProvider>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
