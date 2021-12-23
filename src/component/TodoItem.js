import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default class TodoItemTest extends Component {
  constructor(props) {
    super()
    this.state = {
      id: props.id,
      description: props.description || 'N/A',
      editMode: false,
      completed: props.completed || false
    }
  }

  toggleComplete = () => {
    this.setState((prevState, props) => ({
      completed: !prevState.completed
    }))
  }

  handleEdit = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleBlur = (event) => {
    if (event.target.value === '') {
      this._removeItem(this.state.id)
    }
  }

  handleKeyDown = (event) => {
    if (event.keyCode !== 13) return
    event.target.blur()
  }

  _removeItem() {
    this.props._removeItem(this.state.id)
  }

  render() {
    return (
      <div 
        className="p-2 flex justify-between hover:bg-gray-800"
      >
        <input 
            type="checkbox"
            className="w-8 h-8 align-middle"
            checked={this.state.completed}
            onChange={this.toggleComplete}
          />
        <input 
            type="text" 
            className={`text-lg px-2 h-8 flex-auto align-middle bg-transparent text-white ${this.state.completed ? 'line-through text-gray-500' : ''} outline-none`}
            onChange={this.handleEdit}
            onBlur={this.handleBlur}
            onKeyDown={this.handleKeyDown}
            value={this.state.description}
            placeholder='Empty todo item'
          />
        <button 
          className="align-middle active:shadow-outline"
          onClick={() => { this._removeItem()}}
        >
          {/* <FontAwesomeIcon icon={faTrash} /> */}
        </button>
      </div>
    )
  }
}