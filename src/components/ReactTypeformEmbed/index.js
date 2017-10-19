import React, { Component } from 'react';
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
		const { url, hideHeaders, hideFooter, opacity, buttonText, popup, mode, autoOpen, autoClose } = this.props;
		const options = {
			hideHeaders,
			hideFooter,
			opacity,
			buttonText
		}

		// Popup Mode
		if ( popup ) {
      const popupOptions = {...options, mode, autoOpen, autoClose};

			// Load Typeform embed popup
			typeformEmbed.makePopup(url, popupOptions);

		// Widget Mode (default)
		} else {
      const widgetOptions = {...options, opacity, buttonText};
      const elm = this.refs.typeform;

			// Load Typeform embed widget
			typeformEmbed.makeWidget(elm, url, widgetOptions);
		}

  }

  render() {
    return <div className="ReactTypeformEmbed" ref="typeform" style={this.props.style}/>;
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
  autoClose: PropTypes.number
};

// Most default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
ReactTypeformEmbed.defaultProps = {
  style: {},
	url: '',
  popup: false,
	hideHeaders: false,
	hideFooter: false,

  // Widget options
	opacity: 100,
	buttonText: 'Start',

  // Popup options
  mode: "popup", // mode options: "popup", "drawer_left", "drawer_right"
  autoOpen: false
};

export default ReactTypeformEmbed;
