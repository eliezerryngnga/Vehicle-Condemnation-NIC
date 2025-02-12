import React from 'react'

import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
   <Routes path="/">
    <Route path="/" element={<Home />}>

        {/* <Route index element={<HomePage />} />
        <Route path="contact-us" element={<ContactUsPage />} /> */}
      </Route>
   </Routes>
  );
}

export default App
