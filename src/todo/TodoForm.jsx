import React from 'react';

import PageHeader from '../components/PageHeader';
import Grid from '../components/Grid';
import IconButton from '../components/IconButton';


export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === 'Escape') {
            props.handleClear();
        }
    }

    return (
        <React.Fragment>
            <PageHeader name="Add" small="new task" />
            <div role="form" className="todo-forms">
                <Grid cols="12 9 10">
                    <input id="description" type="text"
                        className="form-control"
                        placeholder="Add a task"
                        value={props.description}
                        onChange={props.handleChange} 
                        onKeyUp={keyHandler} 
                        />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
                    <IconButton style='info' icon='search' onClick={props.handleSearch} />
                    <IconButton style='default' icon='close' onClick={props.handleClear} />
                </Grid>
            </div>
        </React.Fragment>
    );
}