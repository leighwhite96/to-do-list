import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      todo: []
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      input: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({
      todo: [...this.state.todo,this.state.input]
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input value={this.state.input} onChange={this.onChange}/>
        <button>Add</button>
      </form>
      <List todo={this.state.todo} />
    </div>
    )
  }
}

export default App;
