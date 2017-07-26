import React from 'react';

import FaClose from 'react-icons/lib/fa/close';
import FaCheck from 'react-icons/lib/fa/check';
import './task.less';

const Task = React.createClass({
    render() {
        let textStyle = "task__text";
        let iconStyle = "task__icon";

        if (this.props.check) {
            textStyle = "task__text--checked";
            iconStyle = "task__icon--checked";
        }

        return (
            <div className="task">
                <div className="task__general" onClick={this.props.checkTask}>
                    <FaCheck className={iconStyle}/>
                    <span className={textStyle}>{this.props.children}</span>
                </div>
                <FaClose className="task__delete" onClick={this.props.deleteTask}/>
            </div>);
    }
});

export default Task;