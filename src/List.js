import React from 'react'

const List = (props) => {
    return (
    <ol>
      {props.todo.map((item,idx) => <li key={idx}>{item}</li>)}
    </ol>
  )
}

export default List
