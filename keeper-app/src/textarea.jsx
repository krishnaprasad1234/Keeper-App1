import React, { useState } from "react"
import Notes from "./notes.js"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
function TextArea(props){
    const [expand,setExpand]=useState(false)
    const [item,setitem]=useState({
    title:"",   
    description:""
    });
    
    
    function handle(event){
        const {name,value}=event.target;
        
        setitem(prev =>{
            return({
                ...prev,
                [name]:value
            });
        });
    }

    function add_element(event){
        props.onadd(item);
    }
    
    function expand1(){
        setExpand(true);
    }
   return (
    <div>
        <form className="create-note">
         {expand && <input name="title" onChange={handle}  placeholder="Title" value={item.title} />}  
        <textarea onClick={expand1} name="description" onChange={handle}  placeholder="Take a note..." rows={expand ? 3 :1} value={item.description}/>
    
        <Fab onClick={add_element}><AddIcon /></Fab>
       
      </form>
    </div>
   )
}

export default TextArea;
