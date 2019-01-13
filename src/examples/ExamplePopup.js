import React from 'react';
import { ReactTypeformEmbed } from '../components';

class ExamplePopup extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="ExamplePopup">
        <ReactTypeformEmbed
          popup={true}
          autoOpen={false}
          url={'https://demo.typeform.com/to/njdbt5'}
          hideHeaders={true}
          hideFooter={true}
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => (this.typeformEmbed = tf)}
        />
        <button className="btn" onClick={this.openForm} style={{ cursor: 'pointer' }}>
          Click to open the popup!
        </button>
      </div>
    );
  }
}

export default ExamplePopup;
