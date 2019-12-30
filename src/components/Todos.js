import React from 'react';
import TodoItem from './Todoitems';

class Todos extends React.Component {

  render () {
    return this.props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todoitem={todo}
          updateStateComplete={this.props.updateStateComplete}
          deleteState = {this.props.deleteState}
        />
      )
    )
  }
}

export default Todos;
