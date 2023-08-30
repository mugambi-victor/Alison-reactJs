import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
function Form() {
    const [myCar,setCar]=useState("volvo");
    const handleChange=(event)=>{
        setCar(event.target.value)
    }
  return (
    <div  style={style}>
   <form  >
    <h1>Charana Drag Race</h1>
    <label style={forrm}>Username</label>
    <input type='text' placeholder='username' style={forrm}/> 
    <label style={forrm}>Brand(Dropdown)</label>
    <select value={myCar} onChange={handleChange} style={forrm}>
        <option>Select brand</option>
        <option value="Ford">Ford</option>
        <option value="Audi">Audi</option>
        <option value="Mercedes">Mercedes</option>
    </select>
    <label style={forrm}>Brand</label>
    <textarea name="postContent" rows={4} cols={40} style={forrm}/>
    <label style={forrm}>Sex(select)</label>
    <select style={forrm}>
        <option>Sex</option>
        <option value="m">Male</option>
        <option value="f">Female</option>
    </select>
   </form>
   </div>
  )
}


export default Form

const style={
    width:'300px',
    background:'whitesmoke',
    margin:'auto',
    
}
const forrm={
    width:'90%',
    padding:'3px',
    margin:'10px'
}