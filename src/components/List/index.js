import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardHeader} from 'material-ui/Card'
import {pink50} from 'material-ui/styles/colors'


const staticStyle = {

}

const List = (props) => {
  const style = {
    complete: {
      color: 'green'
    },
    incomplete: {
      color: 'red'
    }
  };
  const cardstyle = {
    width: '25vw',
    backgroundColor: pink50
  }
    return (
    <ol>
      {props.todo.map((item,idx) => <li key={idx}><Card style={cardstyle}><CardHeader title={item.todo}/><RaisedButton style={cardstyle} secondary={true} backgroundColor={{...staticStyle, ...style[item.complete ? 'complete' : 'incomplete'],...props.style}} onClick={() => props.onComplete(idx)}>{item.complete ? 'Done' : 'To Do'}</RaisedButton></Card></li>)}
    </ol>
  )
}

export default List
