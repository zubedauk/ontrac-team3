import React from 'react';
import Board from './Dashboard/DashBoard.js'
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './index.css';
// import './main.css'



// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 
  < HashRouter>
     <Board />
  </ HashRouter>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
