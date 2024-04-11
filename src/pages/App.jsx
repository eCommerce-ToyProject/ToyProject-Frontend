import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Box } from '@mui/material';
import { LoginProvider } from '../context/LoginContext';
import { SearchProvider } from '../context/SearchContext';

function App() {
  return (
    <>
      <LoginProvider>
        <SearchProvider>
          <Header />
        </SearchProvider>
      </LoginProvider>
      <Box sx={{ width: 1000, m: 'auto', minHeight: 850 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}


export default App;
