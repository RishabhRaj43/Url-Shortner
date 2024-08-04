import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Shorten, Expand } from "./components/Shorten";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Shorten />} />
        <Route path="/expand" element={<Expand />} />
      </Routes>
    </>
  );
};

export default App;
