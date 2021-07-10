import React from "react";
import { Link } from "react-router-dom";

class Main extends React.Component{
    render() {
        return(
            <div className="main page container">
                <h2>Create and Manage your tasks</h2>
                <p><Link to="/tasks">Your Tasks</Link></p>
            </div>
        )
    }
}

export default Main;