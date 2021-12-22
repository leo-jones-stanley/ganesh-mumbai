import React from "react";
import './card.style.css';
import Form_view from './form/form.comp'
import Logo_view from './logo/logo.component'
import Card from '@material-ui/core'
// import { Card } from '@mui/material';


const Card_view = (props) => {
    return (
        <div>
        <card className="card">
         <h1>card view</h1>   
         <Logo_view />
         <Form_view />
         </card>
        </div>
    )
}
export default Card_view