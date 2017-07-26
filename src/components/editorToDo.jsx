import React from 'react';
import './editor.less';

const Editor = React.createClass({
    getInitialState: function () {
        return {
            text: '',
        };
    },

    handleTextChange: function (event) {
        this.setState({
            text: event.target.value
        });
    },

    addTask: function (event) {
        event.preventDefault();

        let newTask = {
            id: Date.now(),
            text: this.state.text,
            isChecked: false
        };
        this.props.onAdd(newTask);
        this.setState({
            text: ''
        });
    },

    render: function () {
        return (
            <form onSubmit={this.addTask}>
                <input type="text"
                       placeholder="What you need to do?"
                       className="editor"
                       value={this.state.text}
                       onChange={this.handleTextChange}/>
            </form>
        );
    }
});

export default Editor;