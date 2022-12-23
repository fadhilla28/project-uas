import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../assets/style/main.css";
import Dashboard from "./Dashboard";
import DashProduct from "../components/DashProduct";
import DashCre from "../components/DashCre";
import DashTransDet from "../components/DashTransDet";
import DashTrans from "../components/DashTrans";
import DashSett from "../components/DashSett";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/dashProducts" element={<DashProduct />} />
        <Route path="/admin/dashProductsCre" element={<DashCre />} />
        <Route path="/admin/dashTrans" element={<DashTrans />} />
        <Route path="/admin/dashTransDet" element={<DashTransDet />} />
        <Route path="/admin/dashSet" element={<DashSett />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
