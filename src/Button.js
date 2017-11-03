import React from 'react'

const Button = (props) => {
  console.log(props);
  if(props.completed == true){
    return (
      <button onClick={props.handler}>Completed</button>
    )
  }
  return (<button onClick={props.handler}>Not Done</button>)
}

export default Button
