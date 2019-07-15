import React, { Component } from 'react';
import axios from 'axios';

//components
import PageHeader from '../components/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { thisExpression } from '@babel/types';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: '',
            list: []
        };

        //Garante que a função está utilizando essa classe como contexto principal
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlerRemove = this.handlerRemove.bind(this);

        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=createdAt`).then(resp => {
            this.setState({ ...this.state, description: 11, list: resp.data })
        });

    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, { description }).then(resp => this.refresh());
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handlerRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh());
    }
    render() {
        return (
            <div>
                <PageHeader name="TO-DO" small="Registry" />
                <TodoForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description} />
                <TodoList list={this.state.list}
                    handlerRemove={this.handlerRemove} />

            </div>
        )
    }
}