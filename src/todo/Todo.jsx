import React, {Component} from 'react';

import PageHeader from '../components/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
export default class Todo extends Component {
    render() {
        return(
            <div>
                <PageHeader name="TO-DO" small="Registry" />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}