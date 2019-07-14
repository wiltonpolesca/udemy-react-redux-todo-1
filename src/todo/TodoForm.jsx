import React from 'react';

import PageHeader from '../components/PageHeader';

export default props => (
    <React.Fragment>
        <PageHeader name="Add" small="new task" />
    <div role="form" className="todoForm">
        <div className="col-xs-12 col-sm-9 col-md-10">
            <input id="description" type="text" className="form-control" placeholder="Add a task"/>
        </div>
        <div className="col-xs-12 col-sm-3 col-sm-2">
            <buton className="btn btn-primary">
                <i className="fa fa-plus"></i>
            </buton>
        </div>
    </div>
    </React.Fragment>
)
