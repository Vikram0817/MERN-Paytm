import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/signin";
import Dashbord from "./components/Dashbord";
import { RecoilRoot, useRecoilValue } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" 
          element={
          <Signup />
          }>
        </Route>
        <Route path="/signin" 
          element={
            <Signin />
          }>
        </Route>
        <Route path="/dashbord" 
          element={
            <Dashbord />
          }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
