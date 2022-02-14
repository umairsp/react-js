import React from 'react';

const Custompopup = ({handelColse}) => {
  return (
    <div style={{border:'2px solid',width:'50%',height:'20vh' }}>
      <h1>hii</h1>
      <button onClick={()=>handelColse(false)}>close</button>
    </div>
  );
}

export default Custompopup;



import { useState } from "react";
import CustomPopup from "./CustomPopup";
import './custom-popup.module.css'
 
export default function App() {
  const [visibility, setVisibility] = useState(false);
 
  const popupCloseHandler = () => {
    setVisibility(true);
  };
 
  return (
    <div className="App">
      <button onClick={popupCloseHandler}>Toggle Popup</button>
        {visibility && <CustomPopup handelColse={setVisibility} /> }
    </div>
  );
}
