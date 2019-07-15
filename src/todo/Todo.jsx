import React, { Component } from 'react';
import axios from 'axios';

//components
import PageHeader from '../components/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { thisExpression, throwStatement } from '@babel/types';

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
        this.handlerMarkAsDone = this.handlerMarkAsDone.bind(this);
        this.handlerMarkAsPending = this.handlerMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.refresh();
    }

    refresh(description) {
        const search = description ? `&description__regex=/${description}/` : '';
        console.log(`${URL}?sort=createdAt${search}`);
        axios.get(`${URL}?sort=createdAt${search}`).then(resp => {
            this.setState({ ...this.state, description, list: resp.data })
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
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description));
    }

    handlerMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(resp => this.refresh(this.state.description));
    }

    handlerMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(resp => this.refresh(this.state.description));
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleClear() {
        this.refresh();
    }
    render() {
        return (
            <div>
                <PageHeader name="TO-DO" small="Registry" />
                <TodoForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear = {this.handleClear}
                    description={this.state.description}

                     />

                <TodoList list={this.state.list}
                    handlerRemove={this.handlerRemove}
                    handlerMarkAsDone={this.handlerMarkAsDone}
                    handlerMarkAsPending={this.handlerMarkAsPending} />

            </div>
        )
    }
}