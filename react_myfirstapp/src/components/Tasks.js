import React,{Component} from 'react';
import PropTypes from 'prop-types'; 

import Task from './Task';

class Tasks extends Component {
    render () { //con lo de abajo recorres el array
        return this.props.tasks.map(task => 
        <Task 
            task={task} 
            key={task.id}
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
        />);
    }
}
Tasks.propTypes = { //para decir que tipo de props le paso 
    tasks: PropTypes.array.isRequired //aca le decimos que si o si tiene que venir un objeto
}

export default Tasks; 