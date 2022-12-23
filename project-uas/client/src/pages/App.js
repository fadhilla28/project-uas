import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./LandingPage";
import "../assets/style/main.css";
import Detail from "./Detail";
import Cart from "./Cart";
import Success from "./Success";
import Dashboard from "./Dashboard";
import DashTrans from "../components/DashTrans";
import DashAcc from "../components/DashAcc";
import DashTransDet from "../components/DashTransDet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/success/:id" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashTrans" element={<DashTrans />} />
        <Route path="/dashTransDet" element={<DashTransDet />} />
        <Route path="/dashAcc" element={<DashAcc />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
