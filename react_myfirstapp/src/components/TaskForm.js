import React, {Component} from 'react';

export default class TaskForm extends Component {

    state = { //creo 2 estados porque tengo 2 elementos con distintos valores
        title: '',
        description: ''
    }

    onSubmit = (e) => { //con la funcion flecha no hace falta usar el metodo bind / si hay tan solo 1 parametro son al pedo los ()
        //console.log('submitting...');
        e.preventDefault();
        //console.log(this.state);
        this.props.addTask(this.state.title, this.state.description)
    }

    onChange = e => {
        //console.log(e.target.value); //escucha esos valores pero solo queda en la consola, hay que hacer un setState para que lo muestre
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() { //el metodo render debe retornar algo para mostrar, por eso el return
        return (//ese this del form le dice que desde la class de arriba quiero usar el evento onSubmit que está adentro
            <form onSubmit={this.onSubmit }> 
                <input 
                    type="text" 
                    name="title"
                    placeholder="Write a Task" 
                    onChange={this.onChange} 
                    value={this.state.title} />
                <br/>
                <br/>
                <textarea 
                    name="description"
                    placeholder="Write a Description" 
                    onChange={this.onChange} 
                    value={this.state.description} >
                </textarea>
                <button type="submit">
                    Save a Task
                </button>
            </form>
        )
    }
}

// export default TaskForm; se puede poner lo de arriba o poner este