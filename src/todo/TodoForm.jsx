import React from 'react';

import PageHeader from '../components/PageHeader';
import Grid from '../components/Grid';
import IconButton from '../components/IconButton';


export default props => (
    <React.Fragment>
        <PageHeader name="Add" small="new task" />
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input id="description" type="text"
                    className="form-control"
                    placeholder="Add a task"
                    value={props.description} 
                    onChange={props.handleChange} />
            </Grid>
            <Grid cols="12 2 2">
                <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
            </Grid>
        </div>
    </React.Fragment>
)
