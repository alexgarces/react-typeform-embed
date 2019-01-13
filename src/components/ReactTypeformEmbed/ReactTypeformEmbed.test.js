import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTypeformEmbed from './index';

const url = 'https://demo.typeform.com/to/njdbt5';

describe('<ReactTypeformEmbed />', () => {
  it('should render without breaking', () => {
    const wrapper = shallow(<ReactTypeformEmbed url={url} popup />);
    expect(wrapper.length).toEqual(1);
  });

  it('should have the className ReactTypeformEmbed', () => {
    const wrapper = shallow(<ReactTypeformEmbed url={url} popup />);
    expect(wrapper.is('.ReactTypeformEmbed')).toEqual(true);
  });

  it('should have the correct url props', () => {
    const wrapper = mount(<ReactTypeformEmbed url={url} />);
    expect(wrapper.props().url).toEqual(url);
  });
});
