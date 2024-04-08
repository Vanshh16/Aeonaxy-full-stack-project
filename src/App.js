import { BrowserRouter, Routes, Route } from "react-router-dom";import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignUp1 from "./components/SignUp1.js";
import SignUp2 from "./components/SignUp2.js";
import Verify from "./components/Verify.js";
import Image from "./components/Cloudinary/Cloudinary.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<SignUp />} />
          <Route path="/signup1" element={<SignUp1 />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/image" element={<Image />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
