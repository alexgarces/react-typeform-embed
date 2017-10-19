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
		const { popup, url, hideHeaders, hideFooter, opacity, buttonText } = this.props;
    const elm = this.refs.typeform;
		const options = {
			hideHeaders,
			hideFooter,
			opacity,
			buttonText
		}

		// Popup Mode
		if ( popup ) {
			// Load Typeform embed popup
			typeformEmbed.makePopup(url, options);
      
		// Default: Widget Mode
		} else {
			// Load Typeform embed widget
			typeformEmbed.makeWidget(elm, url, options);
		}

  }

  render() {
    return <div className="ReactTypeformEmbed" ref="typeform" style={this.props.style}/>;
  }
}

ReactTypeformEmbed.propTypes = {
  style: PropTypes.object,
  url: PropTypes.string.isRequired,
	hideHeaders: PropTypes.bool,
	hideFooter: PropTypes.bool,
	opacity: PropTypes.number,
	buttonText: PropTypes.string,
  popup: PropTypes.bool,

  // Only popup options
  mode: PropTypes.string,
  autoOpen: PropTypes.bool,
  autoClose: PropTypes.number
};

// Most default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
ReactTypeformEmbed.defaultProps = {
  style: {},
	url: '',
	hideHeaders: false,
	hideFooter: false,
	opacity: 100,
	buttonText: 'Start',
  popup: false,

  // Only popup options
  mode: "popup", // mode options: "popup", "drawer_left", "drawer_right"
  autoOpen: false
};

export default ReactTypeformEmbed;
