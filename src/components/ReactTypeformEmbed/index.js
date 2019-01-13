import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as typeformEmbed from '@typeform/embed';

const styleDefault = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden'
};

class ReactTypeformEmbed extends Component {
  componentDidMount() {
    const {
      url,
      hideHeaders,
      hideFooter,
      opacity,
      buttonText,
      popup,
      mode,
      autoOpen,
      autoClose,
      onSubmit
    } = this.props;

    const options = {
      hideHeaders,
      hideFooter,
      opacity,
      buttonText,
      mode,
      autoOpen,
      autoClose,
      onSubmit
    };

    // Popup Mode
    if (popup) {
      // Load Typeform embed popup
      this.typeform = typeformEmbed.makePopup(url, options);

      // Widget Mode (default)
    } else {
      const elm = this.typeformElm;

      // Load Typeform embed widget
      typeformEmbed.makeWidget(elm, url, options);
    }
  }

  render() {
    const style = Object.assign({}, styleDefault, this.props.style);

    return (
      <div
        className="ReactTypeformEmbed"
        ref={tf => {
          this.typeformElm = tf;
        }}
        style={style}
      />
    );
  }
}

ReactTypeformEmbed.propTypes = {
  style: PropTypes.object,
  url: PropTypes.string.isRequired,
  popup: PropTypes.bool,
  hideHeaders: PropTypes.bool,
  hideFooter: PropTypes.bool,

  // Widget options
  opacity: PropTypes.number,
  buttonText: PropTypes.string,

  // Popup options
  mode: PropTypes.string,
  autoOpen: PropTypes.bool,
  autoClose: PropTypes.number,
  onSubmit: PropTypes.func
};

// Default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
ReactTypeformEmbed.defaultProps = {
  style: {},
  popup: false,
  hideHeaders: false,
  hideFooter: false,
  onSubmit: () => {},

  // Widget options
  opacity: 100,
  buttonText: 'Start',

  // Popup options
  mode: 'popup', // options: "popup", "drawer_left", "drawer_right"
  autoOpen: false,
  autoClose: 5
};

export default ReactTypeformEmbed;
