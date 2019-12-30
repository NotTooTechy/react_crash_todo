import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

class App extends React.Component {
  state = {
    todos: [
      {
        id : 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id : 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id : 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  updateStateComplete = (id) => {
    const result = this.state.todos.map( (todo) => {
      if (todo.id === id) { todo.completed = ! todo.completed}
      return todo;
    });
    this.setState({todos: result});
  };
  deleteState = (id) => {
    const result = this.state.todos.filter( todo => todo.id !== id);
    this.setState({todos: result});
  };
  addTodo = (title) => {
    let todos = this.state.todos;
    let last_index = 0;
    if (todos.length){
      last_index = todos[todos.length-1].id;
    }
    const new_element = {
      id: last_index + 1,
      title: title,
      completed: false
    }
    todos.push(new_element);
    this.setState({todos: todos});
  };
  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                      todos={this.state.todos}
                      updateStateComplete={this.updateStateComplete}
                      deleteState={this.deleteState}
                    />
                </React.Fragment>
              )}
              />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
