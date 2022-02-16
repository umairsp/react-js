import React from 'react';
const Topright = ({open , setOpen}) => {

    return (open&&
        <div className='topRight' >
            <h2 className='topRight_heading' >hi i am on Top</h2>
            <input placeholder='Enter Your Text Here' className='topRight_input'/>  
            <br/>           
            <button onClick={()=>setOpen(false)} className='topRight_btn'> Close</button>
        </div>


////////////.BtnGroup {
  margin-left: 30%;
}
.topRight {
  border: 2px solid #000;
  width: 30%;
  position: absolute;
  right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.topLeft {
  color: rgb(255, 30, 0);
  border: 2px solid;
  width: 20%;
  position: absolute;
  left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottomRight {
  /* color: rgb(0, 255, 55); */
  border: 2px solid;
  width: 20%;
  position: absolute;
  bottom: 100px;
  right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}
.bottomLeft {
  color: rgb(68, 0, 255);
  border: 2px solid;
  width: 25%;
  position: absolute;
  bottom: 100px;
  left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons{
    color: black;
    padding: 8px 25px;
    font-size: 18px;
    font-weight:700;
    border-radius:5px;
    border:2px solid white;
    cursor: pointer;
}

/* css for Top Right */

.topRight_heading {
  color: #000;
  text-decoration: underline;
}

.topRight_input {
  padding: 10px 0px 10px 35px;
  background: rgb(50, 198, 98, 0.35);
  color: palevioletred;
  box-shadow: inset 0 0px 6px whitesmoke;
  /* border:none; */
  font-style: italic;
  font-weight: 600;
  font-size: 14px;
}
.topRight_btn{
    color: black;
    padding: 8px 25px;
    font-size: 18px;
    font-weight:700;
    border-radius:5px;
    border:2px solid white;
    cursor: pointer;

}

/* css for Top Left */
.topLeft_img{
    width: 80%;
    height: 200px;
}
.topLeft_btns{
    color: black;
    padding: 8px 20px;
    font-size: 18px;
    font-weight:600;
    border-radius:5px;
    border:2px solid white;
    cursor: pointer;
}
/* css for Bottom Left */
.bottomLeft_Input{
    padding: 10px 0px 10px 35px;
    background: rgba(210, 221, 214, 0.35);
    box-shadow: inset 0 0px 6px whitesmoke;
    font-style: italic;
    margin: 10px;
    font-weight: 600;
    font-size: 14px;
}
.bottomLeft_btn{
    color: black;
    padding: 5px 20px;
    font-size: 16px;
    font-weight:600;
    border-radius:5px;
    border:2px solid white;
    cursor: pointer;
    margin: 10px;
}
/*css for Bottom Right */
.bottomRight_textarea{
    width: 200px;
    height: 100px;
}
