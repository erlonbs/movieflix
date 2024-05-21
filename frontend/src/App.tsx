import React from "react";


import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Login/>
    </>
  );
}

export default App;
