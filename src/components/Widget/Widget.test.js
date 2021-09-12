import React from 'react';
import { shallow, mount } from 'enzyme';
import Widget from './Widget';

const formId = 'njdbt5';

describe('<Widget />', () => {
  it('should render without breaking', () => {
    const wrapper = shallow(<Widget id={formId} />);
    expect(wrapper.length).toEqual(1);
  });

  it('should have the react-typeform-embed className', () => {
    const wrapper = shallow(<Widget id={formId} />);
    expect(wrapper.find('div').hasClass('react-typeform-embed')).toEqual(true);
  });

  it('should have the correct id prop', () => {
    const wrapper = mount(<Widget id={formId} />);
    expect(wrapper.props().id).toEqual(formId);
  });
});
