import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; //se refiere al enroutador de react pero solo para navegador, no para app mobiles
import logo from './logo.svg';
import './App.css';

import tasks from './sample/tasks.json';
// Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts'

class App extends Component {    
  
  state = {
    tasks: tasks  // datos
  }

  addTask = (title, description) => {
    //console.log('agregando tarea');
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length //length era de la longitud del array
    }
    console.log(newTask)
    this.setState ({
      tasks: [...this.state.tasks, newTask] //le decis al array, agarrá lo que ya tenés y agregale el newTask
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    //console.log(newTasks)
    this.setState({tasks: newTasks})
  }
  
  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }

  render() {  //con este metodo mostras en pantalla
    return <div>
      <Router> 
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <Routes>
         
          <Route exact path="/" element={
            <React.Fragment>
              <TaskForm addTask={this.addTask}/>
              <Tasks 
                tasks={this.state.tasks} 
                deleteTask={this.deleteTask} 
                checkDone={this.checkDone}
              />
            </React.Fragment>
          }>
        </Route>
        <Route  path="/posts/" element={<Posts/>} />
      </Routes>
     </Router>
     
    </div>
  }
}

export default App;

//redux se usa para centralizar los states y no ir pasandolos de componente en componente
//jsonplaceholder te da datos como si fuera una api normal