import React, {useState} from "react";
import {Link} from "react-router-dom";

class Tasks extends React.Component {
    state = {
        tasks: [],
        page: 0
    }
    componentDidMount(){
        fetch('https://127.0.0.1:8000/getTasks/'+ this.state.page)
            .then(res => res.json())
            .then((data) => {
                this.setState({ tasks: data })
            })
            .catch(console.log)
    }

    render() {
        return(
            <div className="tasks-container">
                <h1>
                    Tasks List
                </h1>
                {this.state.tasks.length === 0 ?
                    (<div className="task-list-empty">
                        <form action={"/new"}>
                        <h2>Task list is empty</h2>
                            <p>Click here to create a new task
                                <input type="submit" value="Click here" />
                            </p>
                        </form>
                    </div>
                    ) :
                    (<ul>
                        {this.state.tasks.map(task => (
                            <li id={task.id}>
                                task.title
                            </li>
                        ))}
                    </ul>)
                }

            </div>
        );
    }
}

export default Tasks;