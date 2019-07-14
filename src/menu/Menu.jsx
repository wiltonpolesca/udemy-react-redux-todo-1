import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
    <div className="navbar navbar-inverse bg-inverse">
        <div className="navbar-header">
            <Link className="navbar-brand" to="/">
                <i className="fa fa-calendar-check-o">To-Do App</i>
            </Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li><Link to="/todos">To-Do</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </div>