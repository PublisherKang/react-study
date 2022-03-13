import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <MyComponent name={'React'} favoriteNumber={3}>
      리액트
    </MyComponent>
  );
};

export default App;
