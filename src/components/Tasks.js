import React, {useState} from "react";

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
            <div className="tasks container">
                <h1>
                    Tasks List
                </h1>
                {this.state.tasks.length === 0 ?
                    (<h2> Task list is empty</h2>) :
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