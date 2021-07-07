import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";

import 'react-quill/dist/quill.snow.css';

const NewTask = ({task, submitTask})=>{
    const handleEvent = (event)=>{
        event.preventDefault();
        submitTask(task);
    }

    return(
        <form className="container" onSubmit={handleEvent}>
            <h1>Add a New Task</h1>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" defaultValue={task.title} value={task.title}/>
            <label htmlFor="title">Description:</label>
            <textarea id="description" name="description" rows="4" cols="50" defaultValue={task.description}>
            </textarea>
            <label htmlFor="title">Comments:</label>
            <textarea id="comments" name="comments" rows="4" cols="50" defaultValue={task.comments}>
            </textarea>
            <label htmlFor="dueDate">Comments:</label>
            <input type="date" id="dueDate" name="dueDate" defaultValue={task.dueDate}/>
            <button type="submit">Save</button>
        </form>
    );
}

export default NewTask;