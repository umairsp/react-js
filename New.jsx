import React from 'react';
const Topright = ({open , setOpen}) => {

    return (open&&
        <div className='topRight' >
            <h2 className='topRight_heading' >hi i am on Top</h2>
            <input placeholder='Enter Your Text Here' className='topRight_input'/>  
            <br/>           
            <button onClick={()=>setOpen(false)} className='topRight_btn'> Close</button>
        </div>
