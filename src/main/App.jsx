import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Menu from '../menu/Menu';
import Todo from '../todo/Todo';
import About from '../about/About';

export default props =>
  <Router >
    <Menu />
    <Switch>
      <Route exact path='/' component={Todo} />
      <Route path='/about' component={About} />
      <Route component={Todo} />
    </Switch>
  </Router>
