import React from 'react';
import { ReactTypeformEmbed } from '../components';

class ExampleWidget extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="ExampleWidget">
        <ReactTypeformEmbed
          popup={false}
          url={'https://demo.typeform.com/to/njdbt5'}/>
      </div>
    );
  }
}

export default ExampleWidget;
