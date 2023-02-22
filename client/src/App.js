import React from "react";
import {BrowserRouter, Routes, Route, Form} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import UserDetails from "./components/UserDetails";
import Footer from "./components/Footer";
import Header from "./components/Header"; 
import Blog from "./components/Blog";
import Notification from "./components/Notification";
import NotificationDetail from "./components/NotificationDetail";
import NotificationSuccess from "./components/NotificationSuccess";
import Ratings from "./components/Ratings";
import Login from "./components/Login";
import LoginOtp from "./components/LoginOtp";
import Frontpage from "./Frontpage";
import Register from "./components/Register";


const App = () => {

  
  


  return (
    <div>
      <BrowserRouter>
        <Routes>
         
          <Route path="/dashboard" element={<div><Dashboard /></div>}></Route>
          <Route path="/user-details" element={<div><Header /><UserDetails /></div>}></Route>
          <Route path="/blog" element={<div><Blog /> <Footer /></div>}></Route>
          <Route path="/notification" element={<Notification /> }></Route>
          <Route path="/notification-detail" element={<div><Header/><NotificationDetail /></div>}></Route>
          <Route path="/notification-success" element={<NotificationSuccess />}></Route>
          <Route path="/ratings" element={<Ratings/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login-otp" element={<LoginOtp />}></Route>
          <Route path="/frontpage" element={<Frontpage />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
