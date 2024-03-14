import React from "react";
import "../styles/form.css"
import TextField from '@mui/material/TextField';


export default function Form (){
    return(<>
    <div className="form-container">
        <form className="input-form" action="">
        <TextField id="outlined-basic" label="ZIP Code" variant="outlined" />
        <TextField id="outlined-basic" label="" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
    </div>
    
    </>)
}

