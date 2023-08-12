import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Edit';

function text(props){

    function handle(){
        props.ondelete(props.title)
    }
    function update(){
        props.onupdate(props.title,props.description);
    }
    return(
    <div className="note">
        <h1>{props.title}</h1><p>{props.description}</p>
        <button onClick={handle}><DeleteIcon /></button>
        <button onClick={update}><UpdateIcon /></button>
    </div>);
};  
export default text;