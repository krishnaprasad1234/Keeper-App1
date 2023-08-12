import React, { useState, useEffect } from "react"
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';

function Updatebox(props){
    const [title1,settitle]=useState(props.title);
    const [item, setitem] = useState({
        title: "",
        description: ""
      });
      
      useEffect(() => {
        setitem(prev => ({
          ...prev,
          title: props.title,
          description: props.desc
        }));
        settitle(props.title);
      }, [props.title, props.desc]);
      
    function handleUpdate(){
         
        
        props.update(title1,item.title,item.description);
    
    }
    function handle1(event){
        const {name,value}=event.target;
        
        setitem(prev =>{
            return({
                ...prev,
                [name]:value
            });
        });
    }
    
    return(
        <div>
            <form className="create-note">
            <input name="title" onChange={handle1}  placeholder="Title" value={item.title} /> 
            <textarea name="description" onChange={handle1}  placeholder="Take a note..." value={item.description}/>
            <IconButton onClick={handleUpdate} aria-label="Search">
              <CheckIcon />
            </IconButton>
            
            </form>
        </div>
    )
}

export default Updatebox;
