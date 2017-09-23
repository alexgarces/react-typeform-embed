import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as typeformEmbed from '@typeform/embed';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const elm = this.refs.typeform;
    console.log('typeformEmbed',typeformEmbed);

    typeformEmbed.makeWidget(elm, 'https://developerplatform.typeform.com/to/Xc7NMh');
  }

  render() {
    console.log('moment',moment);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div ref="typeform" style={{height: 1000}}>

        </div>
      </div>
    );
  }
}

export default App;
