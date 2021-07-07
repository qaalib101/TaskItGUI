import React, {useState} from "react";

class Tasks extends React.Component {
    state = {
        tasks: []
    }
    componentDidMount(){
        fetch('https://127.0.0.1:8000/getTasks')
            .then(res => res.json())
            .then((data) => {
                this.setTasks({ tasks: data })
            })
            .catch(console.log)
    }

    render() {
        return(
            <div className="tasks container">
                <h1>
                    Tasks List
                </h1>
                <ul>
                    {this.state.tasks.map(task => (
                        <li key={task.id}>
                            <h2>{task.title}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Tasks;