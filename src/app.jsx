import React from 'react';

import './app.less';

import Editor from './components/editorToDo';
import Grid from './components/gridToDo';

const App = React.createClass({
    getInitialState() {
        return {
            tasks: []
        }
    },

    componentDidMount() {
        let filter = this.props.match.params.filter;
        if (!filter) {
            return this.props.history.push("/all")
        }

        let localTasks = JSON.parse(localStorage.getItem('tasks'));
        if (localTasks) {
            this.setState({
                tasks: localTasks
            });
        }
    },

    componentDidUpdate() {
        this._updateLocalStorage();
    },

    checkTask(id) {
        let tasksArray = this.state.tasks;
        for (var i = 0; i < tasksArray.length; i++) {
            if (tasksArray[i].id === id) {
                tasksArray[i].isChecked = !tasksArray[i].isChecked;
            }
        }
        this.setState({
            tasks: tasksArray
        });
    },

    addTask(newTask) {
        let newTasks = this.state.tasks.slice();
        newTasks.unshift(newTask);
        this.setState({
            tasks: newTasks
        });
    },

    deleteTask(id) {
        let newTasks = this.state.tasks.filter(task => {
            return task.id !== id;
        });
        this.setState({
            tasks: newTasks
        });
    },

    filterTask() {
        let filter = this.props.match.params.filter;
        let localTasks = this.state.tasks.slice();

        if (localTasks) {
            if (filter === "new") {
                return localTasks.filter(task => {
                    return !task.isChecked;
                });
            } else if (filter === "completed") {
                return localTasks.filter(task => {
                    return task.isChecked;
                });
            } else {
                return localTasks;
            }
        }
    },

    render() {
        const displayedTasks = this.filterTask();

        return (
            <div className="content">
                <h1 className="app__text">ToDoManager</h1>
                <div className="app">
                    <Editor onAdd={this.addTask}/>
                    <Grid tasks={displayedTasks}
                          onDelete={this.deleteTask}
                          onCheck={this.checkTask}
                          filter={this.props.match.params.filter}
                    />
                </div>
            </div>
        );
    },

    _updateLocalStorage() {
        let tasks = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks', tasks);
    }
});

export default App;