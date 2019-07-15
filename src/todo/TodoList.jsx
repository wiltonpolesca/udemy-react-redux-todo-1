import React from 'react';

import PageHeader from '../components/PageHeader';
import IconButton from '../components/IconButton';

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(item =>
            <tr key={item._id}>
                <td>{item.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handlerRemove(item)}></IconButton>
            </td>
            </tr>
        )
    }

    return (
        <React.Fragment>
            <PageHeader name="List" />
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </React.Fragment>
    )
}
