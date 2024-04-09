import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Box } from '@mui/material';
import { AuthProvider } from '../context/AuthContext';
import { SearchProvider } from '../context/SearchContext';

function App() {
  return (
    <>
      <AuthProvider>
        <SearchProvider>
          <Header />
        </SearchProvider>
      </AuthProvider>
      <Box sx={{ width: 1000, m: 'auto', minHeight: 850 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}


export default App;
