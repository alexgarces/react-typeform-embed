# React Typeform Embed

A React wrapper for [Typeform Embed SDK](https://developer.typeform.com/embed/).

## Usage

```bash
npm install react-typeform-embed
```

```js
import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class App extends React.Component {
  render() {
    return <ReactTypeformEmbed url="https://demo.typeform.com/to/njdbt5" />;
  }
}
```

See the source for more examples.

## Demo

See a [live demo](https://alexgarces.github.io/react-typeform-embed/), or run:

```bash
git clone https://github.com/alexgarces/react-typeform-embed
cd react-typeform-embed
npm install
npm start
open http://localhost:3000
```

## Props

Most props are based on the official parameters from [Typeform Embed SDK](https://developer.typeform.com/embed/)

Prop | Description | Default
---- | ----------- | -------
`url` | The url of the Typeform form to display | `""`
`style` | Additional styles for the component | `{}`
`popup` | `true` if you want to display the form in **popup** mode.<br />By default it is displayed in **widget** mode | `false`
`hideHeaders` | `true` if you want to hide the **header** that displays for question groups and long questions that require scrolling. Otherwise, `false` | `false`
`hideFooter` | `true` if you want to hide the **footer** that displays a progress bar and navigation buttons. Otherwise, `false`. | `false`
`opacity` | Background opacity. Valid values include any integer between `0` (completely transparent) and `100` (completely opaque). Note that this isn't the same as the CSS opacity scale (0-1).<br />*Widget mode option* | `100`
`buttonText` | Text to display in the "Start" button. Displayed only on touch-screen and mobile devices.<br />*Widget mode option* | `"Start"`
`mode` | Identifies how the popup should behave. Valid values are `popup` (full-screen popup), `drawer_left` (popup slides in from the left), and `drawer_right` (popup slides in from the right).<br />*Popup mode option* | `"popup"`
`autoOpen` | `true` if the typeform should open automatically when the page loads. Otherwise, `false`.<br />*Popup mode option* | `false`
`autoClose` | **PRO+ accounts only**. Time until the embedded typeform should automatically close after a respondent clicks the Submit button. Your typeform will automatically close after the time you specify, so respondents won’t have to manually close your typeform popup. In milliseconds.<br />*Popup mode option* | N/A
`onSubmit` | **PRO+ accounts only**. Callback event that will execute immediately after a respondent successfully submits the typeform. <br /> | N/A

## Popup Mode Instance Methods

Use `ref` to call instance methods. See [the source](https://github.com/alexgarces/react-typeform-embed/blob/master/src/examples/ExamplePopup.js) for an example of this.

Method | Description
---- | -----------
`typeform.open()` | Open the popup window
`typeform.close()` | Close the popup window

### License

Code released under the [MIT license](LICENSE.txt).
