import React from 'react';
import { ReactTypeformEmbed } from '../components';

const Example = (props) => {
  return (
    <div className="Example">
      <ReactTypeformEmbed
				url={'https://demo.typeform.com/to/njdbt5'}
				hideHeaders={true}
				hideFooter={true}
				buttonText="Go!"/>
    </div>
  );
}

export default Example;
