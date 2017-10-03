import React from 'react';
import { ReactTypeformEmbed } from '../components';

const Example = (props) => {
  return (
    <div className="Example">
      <ReactTypeformEmbed
				url={'https://developerplatform.typeform.com/to/Xc7NMh'}
				hideHeaders={true}
				hideFooter={true}
				opacity={50}
				buttonText="YAS QUEEN"/>
    </div>
  );
}

export default Example;
