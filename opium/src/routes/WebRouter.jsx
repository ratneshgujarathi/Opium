import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/core/login/Login";
import Register from "../pages/core/register/Register";

function WebRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<HomePage/>}></Route> */}
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default WebRouter