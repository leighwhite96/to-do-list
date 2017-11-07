import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {pink500, pink100} from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    textColor: pink500,
  },
  appBar: {
    color: pink500,
    height: 50,
  },
})


const Page = () => (
  <MuiThemeProvider  muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(<Page />, document.getElementById('root'));
