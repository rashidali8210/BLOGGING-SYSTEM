import React from "react";

import './App.css';
import Navbar from "../Components/Navbars";
import Side from "../Components/Side"
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
