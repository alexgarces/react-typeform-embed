'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _embed = require('@typeform/embed');

var typeformEmbed = _interopRequireWildcard(_embed);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleDefault = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden'
};

var ReactTypeformEmbed = function (_Component) {
  _inherits(ReactTypeformEmbed, _Component);

  function ReactTypeformEmbed() {
    _classCallCheck(this, ReactTypeformEmbed);

    return _possibleConstructorReturn(this, (ReactTypeformEmbed.__proto__ || Object.getPrototypeOf(ReactTypeformEmbed)).apply(this, arguments));
  }

  _createClass(ReactTypeformEmbed, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          url = _props.url,
          hideHeaders = _props.hideHeaders,
          hideFooter = _props.hideFooter,
          opacity = _props.opacity,
          buttonText = _props.buttonText,
          popup = _props.popup,
          mode = _props.mode,
          autoOpen = _props.autoOpen,
          autoClose = _props.autoClose,
          onSubmit = _props.onSubmit;


      var options = {
        hideHeaders: hideHeaders,
        hideFooter: hideFooter,
        opacity: opacity,
        buttonText: buttonText,
        mode: mode,
        autoOpen: autoOpen,
        autoClose: autoClose,
        onSubmit: onSubmit
      };

      // Popup Mode
      if (popup) {
        // Load Typeform embed popup
        this.typeform = typeformEmbed.makePopup(url, options);

        // Widget Mode (default)
      } else {
        var elm = this.typeformElm;

        // Load Typeform embed widget
        typeformEmbed.makeWidget(elm, url, options);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = Object.assign({}, styleDefault, this.props.style);

      return _react2.default.createElement('div', {
        className: 'ReactTypeformEmbed',
        ref: function ref(tf) {
          _this2.typeformElm = tf;
        },
        style: style
      });
    }
  }]);

  return ReactTypeformEmbed;
}(_react.Component);

ReactTypeformEmbed.propTypes = {
  style: _propTypes2.default.object,
  url: _propTypes2.default.string.isRequired,
  popup: _propTypes2.default.bool,
  hideHeaders: _propTypes2.default.bool,
  hideFooter: _propTypes2.default.bool,

  // Widget options
  opacity: _propTypes2.default.number,
  buttonText: _propTypes2.default.string,

  // Popup options
  mode: _propTypes2.default.string,
  autoOpen: _propTypes2.default.bool,
  autoClose: _propTypes2.default.number,
  onSubmit: _propTypes2.default.func
};

// Default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
ReactTypeformEmbed.defaultProps = {
  style: {},
  popup: false,
  hideHeaders: false,
  hideFooter: false,
  onSubmit: function onSubmit() {},

  // Widget options
  opacity: 100,
  buttonText: 'Start',

  // Popup options
  mode: 'popup', // options: "popup", "drawer_left", "drawer_right"
  autoOpen: false,
  autoClose: 5
};

exports.default = ReactTypeformEmbed;