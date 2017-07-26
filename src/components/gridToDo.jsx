import React from 'react';
import {Link} from 'react-router-dom';

import './grid.less';

import Task from './taskToDo';

const Grid = React.createClass({
    getInitialState() {
        return {
            buttons: [
                {
                    "id": 0,
                    "name": "All",
                    "path": "/all",
                    "hawl": "all"
                },
                {
                    "id": 1,
                    "name": "New",
                    "path": "/new",
                    "hawl": "new"
                },
                {
                    "id": 2,
                    "name": "Completed",
                    "path": "/completed",
                    "hawl": "completed"
                },
            ]
        }
    },

    render() {
        var onDelete = this.props.onDelete;
        var onCheck = this.props.onCheck;

        return (
            <div>
                <div className="grid">
                    {
                        this.props.tasks.map(task => {
                            return (
                                <Task
                                    key={task.id}
                                    check={task.isChecked}
                                    deleteTask={onDelete.bind(null, task.id)}
                                    checkTask={onCheck.bind(null, task.id)}>
                                    {task.text}
                                </Task>
                            );
                        })
                    }
                </div>
                <div>
                    {
                        this.state.buttons.map(button => {
                            let filter = this.props.filter;
                            let buttonClass = "grid__btn";
                            if (filter === button.hawl){
                                buttonClass = "grid__btn--active";
                            }
                            return (
                                <Link
                                    key={button.id}
                                    to={button.path}
                                    className={buttonClass}>
                                    {button.name}
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
});

export default Grid;