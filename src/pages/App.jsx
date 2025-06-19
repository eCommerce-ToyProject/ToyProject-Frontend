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
      <Box
        sx={{
          width: '100%',
          maxWidth: '1500px',
          minHeight: '850px',
          margin: '0 auto',
          paddingX: 2, // 좌우 여백
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}


export default App;
