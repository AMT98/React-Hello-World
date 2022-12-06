import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Profile from './Profile';
import TicTacToe from './Tic-Tac-Toe';
import DarkMode from './DarkMode';


const App = (props) => {
  return <div className="app">
    <Profile />
    <div className="dark-mode">
      <DarkMode />
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
