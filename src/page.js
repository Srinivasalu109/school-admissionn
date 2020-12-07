import React from "react";
import "./school.css";
import school from "./school-ad.js"
import {Redirect} from  "reaact-router-dom";
export default function Page1(){
    return(<div id="page1">
        <h1>Choose Your Catogory</h1>
       <button onClick={()=>{<Redirect to="/school-admin"/>}}>student</button>
       <button>school-admin</button>
    </div>)

} 