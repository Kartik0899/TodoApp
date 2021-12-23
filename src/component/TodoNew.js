import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default class TodoNew extends Component {
  constructor(props) {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    if (event.keyCode !== 13) return
    this._addItem()
  }
  
  _addItem = () => {
    this.props._addItem({
      id: Date.now(),
      description: this.state.value,
      completed: false
    })
    this.setState({
      value: ''
    })
}

  render() {
    return (
      <div className="p-2 border-b border-gray-800 flex justify-between">
        <input 
          type="text"
          className="flex-auto bg-transparent px-2 py-1 mt-1 outline-none"
          placeholder="Enter new todo item"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
        <button
          onClick={this._addItem}
        >
          {/* <FontAwesomeIcon icon={faPlusCircle} /> */}
        </button>
      </div>
    )
  }
}