import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }


    render() {
        const {task} = this.props;
        return <p style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                x
            </button>
        </p> 
    }
}

Task.propTypes = { //para decir que tipo de props le paso 
    task: PropTypes.object.isRequired //aca le decimos que si o si tiene que venir un objeto
}

const btnDelete = {
    fontSize: '16px',
    background: '#ddd',
    border: 'none'

}

export default Task;