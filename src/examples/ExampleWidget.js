import React from 'react';
import { ReactTypeformEmbed } from '../components';

const ExampleWidget = () => {
  return (
    <div className="ExampleWidget">
      <ReactTypeformEmbed popup={false} url={'https://demo.typeform.com/to/njdbt5'}/>
    </div>
  );
}

export default ExampleWidget;
