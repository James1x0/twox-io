import React from 'react'
import ReactDOM from 'react-dom'
// import { browserHistory } from 'react-router'
import Routes from './routes'
import './index.css'

document.window.href = 'https://jamesfrommontana.com';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
)
