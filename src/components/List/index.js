import React from 'react'

const List = (props) => {
    return (
    <ol>
      {props.todo.map((item,idx) => <li key={idx}>{item.todo}<button onClick={() => props.onComplete(idx)}>{item.complete ? 'Done' : 'To Do'}</button></li>)}
    </ol>
  )
}

export default List
