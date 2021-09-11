import React from 'react';

import { ExampleWidget, ExamplePopup, ExampleSlider } from './components';

const Examples = () => (
  <div className="examples">
    <div className="container">
      <h1>React Typeform Embed</h1>
      <p>
        {`A React wrapper for `}
        <a href="https://developer.typeform.com/embed/" target="_blank" rel="noopener noreferrer">
          Typeform Embed SDK
        </a>
        .
      </p>
      <p>
        Visit <a href="https://github.com/alexgarces/react-typeform-embed">Github</a> repository for
        more info.
      </p>
      <br />
      <br />
      <h2>Widget Example</h2>
      <br />
      <div className="examples-section">
        <ExampleWidget />
      </div>
      <br />
      <hr />
      <br />
      <h2>Popup Example</h2>
      <br />
      <div className="examples-section">
        <ExamplePopup />
      </div>
      <br />
      <hr />
      <br />
      <h2>Slider Example</h2>
      <br />
      <div className="examples-section">
        <ExampleSlider />
      </div>
    </div>
  </div>
);

export default Examples;
