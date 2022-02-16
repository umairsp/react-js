import React from 'react';
// import "./Dialog.css"



const Bottomleft = ({open , setOpen}) => {
    return (open&&
        <>        <div className='bottomLeft' >
           <input placeholder='User Login' className='bottomLeft_Input'/>
           <input placeholder='User Password' className='bottomLeft_Input'/>
           <span>
               <button className='bottomLeft_btn'>Login</button>
               <button className='bottomLeft_btn' onClick={()=>{setOpen(false)}}>Close</button>
           </span>
        </div>
        </>

    );
}

export default Bottomleft;


////////////multi 


import React, { useState } from "react";
import Bottomleft from "./bottomLeft";
import Bottomright from "./bottomRight";
import "./Dialog.css";
import Topleft from "./topLeft";
import Topright from "./TopRight";

const MultiDialog = () => {
  const [topRight, setTopRight] = useState(false);
  const [topLeft, setTopLeft] = useState(false);
  const [bottomLeft, setBottomLeft] = useState(false);
  const [bottomRight, setBottomRight] = useState(false);

  const TopRightHandel = () => {
    setTopRight(!topRight);
    setTopLeft(false);
    setBottomLeft(false);
    setBottomRight(false)

  };
  const TopLeft = () => {
    setTopLeft(!topLeft);
    setTopRight(false);
    setBottomLeft(false)
    setBottomRight(false)

  };

  const bottomLeftHandel=()=>{
    setBottomLeft(!bottomLeft)
    setTopRight(false);
    setTopLeft(false);
    setBottomRight(false)

  }
  const BottomrightHandel=()=>{
    setBottomRight(!bottomRight)
    setTopRight(false);
    setTopLeft(false);
    setBottomLeft(false)
  }

  return (
    <>
      <div className="BtnGroup">
        <button className="buttons" onClick={TopRightHandel}>topRight</button>
        <button className="buttons" onClick={TopLeft}>topLeft</button>
        <button className="buttons" onClick={BottomrightHandel}>BottomRight</button>
        <button className="buttons" onClick={bottomLeftHandel}>BottomLeft</button>
      </div>
      <Topright open={topRight} setOpen={setTopRight} />
      <Topleft open={topLeft} setOpen={setTopLeft} />
      <Bottomleft open={bottomLeft} setOpen={setBottomLeft}/>
      <Bottomright open={bottomRight} setOpen={setBottomRight}/>
    </>
  );
};

export default MultiDialog;


//////////))))))




import React from 'react';

const Bottomright = ({open , setOpen}) => {
    return (
        open&&
        <div className='bottomRight' >
            <textarea className='bottomRight_textarea' placeholder='Enter Feedback'></textarea>
            <button className='bottomLeft_btn'>Submit</button>
        </div>
    );
}

export default Bottomright;



////))))))///////// Top left



import React from 'react';


const Topleft = ({open , setOpen}) => {
    return (open &&
        <div className='topLeft'>
            <img className='topLeft_img' src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            <span>
            <button className='topLeft_btns' >Login</button>
            <button className='topLeft_btns' onClick={()=>setOpen(false)}  >Close</button>
            </span>
        </div>
    );
}

export default Topleft;
