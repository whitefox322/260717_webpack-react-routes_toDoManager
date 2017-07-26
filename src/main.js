import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './app';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/:filter' component={App} />
        </div>
    </Router>,
    document.getElementById('mount-point')
);