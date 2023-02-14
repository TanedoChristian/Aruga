import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import UserDetails from "./components/UserDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><Dashboard /> <Footer /></div>}></Route>
          <Route path="/user-details" element={<div><Header /><UserDetails /></div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
