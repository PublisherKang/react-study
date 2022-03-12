import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const name = 'react';
  const no = undefined;
  const style = {
    backgroundColor: '#000',
    color: 'aqua',
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '16px',
  };
  return (
    <div>
      {name === '리액트' ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
      <h2>안녕!!</h2>
      <div>{name === '리액트' ? <h1>리액트입니다.</h1> : '아니야'}</div>
      <div style={style}>{no || '리액트'}</div>
      <input type="text" />
    </div>
  );
}

export default App;
