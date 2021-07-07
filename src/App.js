import logo from './logo.svg';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";
import './App.css';

class App extends React.Component{
  state = {
    tasks: [],
    page: 0
  };

  submitTask = (task)=>{

    fetch('https://127.0.0.1:8000/newTask', {method: 'POST', body: JSON.stringify(task),
      headers: {
        'Content-type': 'text/plain'
      }})
        .then(res => res.json())
        .then((data) => {
        })
        .catch(console.log)
  }

  componentDidMount(){
    fetch('https://127.0.0.1:8000/getTasks').then(res=>res.json()).then(
        (data)=>{
          this.setState({data, this.state.page});
        }
    )
  }
  render() {
    return (
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route
                  exact
                  path="/new"
                  render={() => <NewTask
                      submitTask={submitTask}
                      task={{title: "",description:"", comments:"",
                        dueDate:"01/01/2000"}}
                  />}
              />
              <Route
                  exact
                  path="/"
                  render={(tasks) => <Tasks tasks={tasks}/>}
              />
            </Switch>
          </div>
        </Router>
    );
  }

}

export default App;
