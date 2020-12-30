import _TaskElement from './_TaskElement';
import React, { Component } from 'react';
import SearchBar from './SearchBar';

class TaskList extends Component {
    state = {
        tasks: [{
            "id": 1,
            "title": "LOADING1 !!!",
            "completed": true

        }]
    }

    updateTasks() {
        console.log("Update Tasks called");
        // console.log(this);
        const xhr = new XMLHttpRequest()
        let new_tasks = this.state.tasks;
        // console.log(new_tasks);
        xhr.open('GET', 'https://api.mocki.io/v1/b28d865a')
        xhr.onload = () => {
            new_tasks = JSON.parse(xhr.response);
            this.setState({ tasks: new_tasks });
            // console.log(JSON.parse(xhr.response));
        }
        // console.log(new_tasks);
        xhr.send();
    }

    handleChange(task) {
        let new_tasks = [...this.state.tasks];
        let index = new_tasks.indexOf(task); // -1 return
        new_tasks[index].completed = !new_tasks[index].completed;
        // console.log(new_tasks);
        this.setState({ tasks: new_tasks });

    }
    handleChange2 = (task) => {
        this.handleChange(task);
    }

    handleAdd = (name) => {
        this.handleAdd2(name);
    }

    handleAdd2(name) {
        let new_tasks = [...this.state.tasks];
        new_tasks.push({ id: "99", title: name, completed: true });
        this.setState({ tasks: new_tasks });
    }

    render() {
        const { tasks } = this.state;
        // console.log(tasks);
        return (
            <div>
                <SearchBar onClickAdd={this.handleAdd} />
                <button onClick={() => this.updateTasks()}>Reload</button>
                {tasks.map((task) => <_TaskElement key={task.id} task={task} onchange={this.handleChange2} />)}
            </div>

        );
    }
}

export default TaskList;