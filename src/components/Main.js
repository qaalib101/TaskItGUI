import React from "react";
import { Link } from "react-router-dom";

const Main = ()=>{
    return (
        <div className="main page container">
            <h2>Create and Manage your tasks</h2>
            <p><Link to="/getTasks">Your Tasks</Link></p>
        </div>
    )
}

export default Main;