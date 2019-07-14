import React from 'react';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Todo from '../todo/Todo';
import About from '../about/About';

export default props => (
    <Router >
        
        <Route path='/todo' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect path='*' to='/todos' />
    </Router>
)