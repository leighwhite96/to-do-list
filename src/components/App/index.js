import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import List from '../List'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      todo: []
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  onChange(e){
    this.setState({
      input: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({
      todo: [...this.state.todo,{
        todo: this.state.input,
        complete: false
      }]
    })
  }

  onComplete(i){
    this.setState((prevState) => ({
      todo: [
        ...prevState.todo.slice(0,i),
        {
          todo: prevState.todo[i].todo,
          complete: !prevState.todo[i].complete
        },
        ...prevState.todo.slice(i+1)
      ]
    }))
  }

  render() {

    return (
      <div>
      <AppBar title="To Do List"/>
      <form onSubmit={this.onSubmit}>
        <TextField value={this.state.input} onChange={this.onChange}/>
        <RaisedButton type="submit" secondary={true}>Add</RaisedButton>
      </form>
      <List onComplete={this.onComplete} todo={this.state.todo} />
    </div>
    )
  }
}

export default App;
