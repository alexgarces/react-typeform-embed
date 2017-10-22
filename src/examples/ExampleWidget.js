import React from 'react';
import { ReactTypeformEmbed } from '../components';

class ExampleWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ExampleWidget">
        <ReactTypeformEmbed popup={false} url={'https://demo.typeform.com/to/njdbt5'}/>
      </div>
    );
  }
}

export default ExampleWidget;
