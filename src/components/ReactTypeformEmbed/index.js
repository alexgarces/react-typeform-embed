import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as typeformEmbed from '@typeform/embed';
import './ReactTypeformEmbed.css';

class ReactTypeformEmbed extends Component {
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
    return (
      <div className="ReactTypeformEmbed">
        <div ref="typeform" style={{height: 1000}} />
      </div>
    );
  }
}

ReactTypeformEmbed.propTypes = {
  // name: PropTypes.string
};

export default ReactTypeformEmbed;
