import React, { useState } from "react";
import { NavLink , BrowserRouter } from "react-router-dom";
function Side() {
  const [x,y]=useState("0px");
  const [p,q]=useState("flex") ;
  const sidebar = () =>
  {
    y("250px");
    q("none");
    }
  function close() {
   
    y("0px");
    q("flex");
 
  }
    return( <>
     <button id="btnn1" style={{display:p}} onClick={sidebar}>≡</button>

<div class="navigation" style={{width:x}}> 

  <ul>
    <div id="menu" >
      <h1>MENU</h1>
      <button id="btnn"  onClick={close}>✖</button>
    </div>
  <li>  <a href="#"> <i class="fas fa-qrcode"> PROFILE </i></a></li>         
  <li>  <a href="#"> <i class="fas fa-link">BUY PICTURE</i></a></li>
  <li>  <a href="#"> <i class="fas fa-stream">HELP</i></a></li>
  <li>  <a href="#"> <i class="fas fa-envelope">DETAILS</i></a></li>
    </ul>
    </div>
    </>     
);
};


export default Side;
