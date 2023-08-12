import React, { useState } from "react"
import Notes from "./notes.js"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search';
function Searchbox(props){
    const [temp,settemp]=useState();
    function handle(event){
        const {value}=event.target
        settemp(value);
    }
    function handleSearch(){
         
       props.onsearch(temp);
    }
    return(
        <div>
            <form className="create-note">
            <input 
                type="text"
                style={{width:'200px', height:'30px'}}
                placeholder="Enter title"
                onChange={handle}
                value={temp}
            />
            <IconButton onClick={handleSearch} aria-label="Search">
              <SearchIcon />
            </IconButton>
            </form>
            </div>
        )
}
export default Searchbox;