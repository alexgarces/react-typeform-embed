import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@typeform/embed/build/css/widget.css';
import { Widget } from './components';

class ReactTypeformEmbed extends Component {
  componentDidMount() {
    // const {
    // id,
    // hideHeaders,
    // hideFooter,
    // opacity,
    // buttonText,
    // popup,
    // mode,
    // autoOpen,
    // autoClose,
    // onSubmit,
    // } = this.props;
    // const options = {
    //   hideHeaders,
    //   hideFooter,
    //   opacity,
    //   buttonText,
    //   mode,
    //   autoOpen,
    //   autoClose,
    //   onSubmit,
    // };
    // Popup Mode
    // if (popup) {
    //   // Load Typeform embed popup
    //   this.typeform = typeformEmbed.makePopup(url, options);
    //   // Widget Mode (default)
    // } else {
    // Load Typeform embed widget
    // typeformEmbed.makeWidget(elm, url, options);
    // }
  }

  render() {
    // const style = { ...styleDefault, ...this.props.style };
    const UI = Widget;
    const { id, style } = this.props;

    return <UI className="ReactTypeformEmbed" {...{ id, style }} />;
  }
}

ReactTypeformEmbed.propTypes = {
  style: PropTypes.object,
  id: PropTypes.string.isRequired,
  // popup: PropTypes.bool,
  // hideHeaders: PropTypes.bool,
  // hideFooter: PropTypes.bool,

  // Widget options
  // opacity: PropTypes.number,
  // buttonText: PropTypes.string,

  // Popup options
  // mode: PropTypes.string,
  // autoOpen: PropTypes.bool,
  // autoClose: PropTypes.number,
  // onSubmit: PropTypes.func,
};

// Default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
ReactTypeformEmbed.defaultProps = {
  style: {},
  // popup: false,
  // hideHeaders: false,
  // hideFooter: false,
  // onSubmit: () => {},
  // Widget options
  // opacity: 100,
  // buttonText: 'Start',
  // Popup options
  // mode: 'popup', // options: "popup", "drawer_left", "drawer_right"
  // autoOpen: false,
  // autoClose: 5,
};

export default ReactTypeformEmbed;
