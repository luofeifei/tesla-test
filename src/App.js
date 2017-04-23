import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header/header';
import TeslaBattery from './containers/teslaBattery';

const counterDefaultVal = {
  speed: {
    title: "速度",
    unit: "迈",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "室外温度",
    unit: "°",
    step: 10,
    min: -10,
    max: 40
  }
};
class App extends Component {

  render() {
    return ( < div className = "App" >
      < Header > < /Header> 
      < TeslaBattery  counterDefaultVal = {counterDefaultVal}/ >
      < /div>
    );
  }
}

export default App;
