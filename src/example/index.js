import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as typeformEmbed from '@typeform/embed';
import moment from 'moment';
import './Example.css';

class Example extends Component {
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
      <div className="Example">
        <div ref="typeform" style={{height: 1000}}>

        </div>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

export default Example;
