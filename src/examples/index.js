import React from 'react'

import ExampleWidget from './ExampleWidget'
import ExamplePopup from './ExamplePopup'

class Examples extends React.Component {
  constructor (props) {
    super(props)
    this.openForm = this.openForm.bind(this)
  }

  openForm () {
    this.typeformEmbed.typeform.open()
  }

  render () {
    return (
      <div className='Examples'>
        <div className='container'>
          <h1>React Typeform Embed</h1>
          <p>A React wrapper for <a href='https://github.com/alexgarces/react-typeform-embed' target='_blank' rel='noopener noreferrer'>Typeform Embed SDK</a>.</p>
          <p>Visit <a href='https://github.com/alexgarces/react-typeform-embed'>Github</a> repository for more info.</p>
          <br />
          <br />
          <h2>Widget Mode Example</h2>
          <br />
          <div className='Examples__widget-section'>
            <ExampleWidget />
          </div>
          <br />
          <hr />
          <br />
          <h2>Popup Mode Example</h2>
          <br />
          <div className='Examples__popup-section'>
            <ExamplePopup />
          </div>
        </div>
      </div>
    )
  }
}

export default Examples
