import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Profile from './Profile';
import TicTacToe from './Tic-Tac-Toe';

const App = (props) => {
  return <div className="app">
    <Profile />
    <div className="dark-mode">
      <h1>Dark Mode</h1>
    </div>
    <div className="tic-tac-toe">
      <TicTacToe />
    </div>
    <div className="todo">
      <h1>Todo</h1>
    </div>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
