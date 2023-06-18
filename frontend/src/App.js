import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import HomePage from './Components/HomePage';

function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
      
    
      

   </>
  );
}

export default App;
