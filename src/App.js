import React from "react";
// import { setInputTitle, createBlog, setReset } from "../src/Redux/Action/index";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import './App.css';
import Navbar from "./Navbars";
import Side from "./Side"
import Header from "./components/Header";
import Main from "./components/Main"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
function App() {
  return(
<div className="App">
      <Header />
      <Navbar/>
      <Side />
      <Main/>
    </div>
  );
}

export default App;
