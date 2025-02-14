import React from 'react'

import { Link, Route, Routes } from 'react-router-dom';

import GuestRoutes from './components/routes/GuestRoutes';
import HomePage from './pages/home/HomePage';
import ContactUsPage from './pages/contactUs/ContactUsPage';

const App = () => {
  return (
   <Routes>
    {/* Guest Routes */}
    <Route path="/" element={<GuestRoutes />}/>
      <Route index element={<HomePage />} />
      <Route path="contact-us" element={<ContactUsPage />} />
   </Routes>
  );
}

export default App
