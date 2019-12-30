import React from 'react'

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc solid',
      textDecoration: this.props.todoitem.completed ?
      'line-through' : 'none'
    }
  }

  render () {
    // destrucuring
    const { id, title } = this.props.todoitem;
    return(
      <div className="TodoItem" style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.updateStateComplete.bind(this, id)} />{' '}
          {title}
          <button style={btnStyle} onClick={this.props.deleteState.bind(this, id)}>x</button>
        </p>
      </div>
  )
  }
}


const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
export default TodoItem;
