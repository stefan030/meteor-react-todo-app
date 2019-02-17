import React, { Component } from 'react';

// get tasks from collection via HoC 'withTracker' and Tasks collection
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks';

import Task from './Task.js';

// App component - represents the whole app
class App extends Component {

    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
};

export default withTracker(() => {
    return {
        tasks: Tasks.find({}).fetch()
    };
})(App);