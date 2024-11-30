import React from 'react'
import './App.css';
import Home from './pages/Home';
import Test from './pages/Test';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  document.addEventListener('DOMContentLoaded', () => {
    document.dispatchEvent(new Event('render-event'));
  });
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
