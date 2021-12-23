import React, { Component } from 'react'
import TodoItem from './TodoItem'
import TodoNew from './TodoNew';

export default class TodoList extends Component {
  constructor(props) {
    super()
    this.state = {
      items: []
    }    
  }

  _removeItem(id) {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    })
  }

  _addItem = (item) => {
    this.setState({
      items: [...this.state.items, item]
    })
  }

  render() {
    const List = this.state.items.map(item => 
      <TodoItem
        key={item.id}
        id={item.id}
        description={item.description}
        completed={item.completed}
        _removeItem={() => {this._removeItem(item.id)}}
      />
    )
    return (
      <div>
        <div className="divide-y divide-gray-700">
          {List}
        </div>
        <TodoNew _addItem={(item) => {this._addItem(item)}} />
      </div>
    )
  }
}