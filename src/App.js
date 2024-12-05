
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import { useState } from 'react';
import Loader from './Components/Loader';

function App() {
  const [showLoader, setShowLoader] = useState(false); 
  return (
    <BrowserRouter >
    {showLoader ? <Loader />: null}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
