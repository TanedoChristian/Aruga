import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
