import React from 'react';

import PageHeader from '../components/PageHeader';
import IconButton from '../components/IconButton';
import Todo from './Todo';
import './todo.css';

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(item =>
            <tr key={item._id} className={item.done ? 'marked-as-done': ''}>
                <td>{item.description}</td>

                <td >
                    <IconButton style='success' icon='check' hide={item.done}
                        onClick={() => props.handlerMarkAsDone(item)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!item.done}
                        onClick={() => props.handlerMarkAsPending(item)}></IconButton>
                    <IconButton style='danger' icon='trash-o'  
                        onClick={() => props.handlerRemove(item)}></IconButton>
                </td>
            </tr>
        )
    }

    return (
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th className="table-actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </React.Fragment>
    )
}
