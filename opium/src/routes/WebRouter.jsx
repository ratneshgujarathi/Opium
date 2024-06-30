import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/core/login/Login";

function WebRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<HomePage/>}></Route> */}
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default WebRouter