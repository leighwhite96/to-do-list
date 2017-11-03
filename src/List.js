import React from 'react'
import Button from './Button'

const List = (props) => {
    return (
    <ol>
      {props.todo.map((item,idx) => <li key={idx}>{item.item}<Button handler={props.handler} completed={item.completed}/></li>)}
    </ol>
  )
}

export default List
