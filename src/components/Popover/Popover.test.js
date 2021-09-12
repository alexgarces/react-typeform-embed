import React from 'react';
import { shallow, mount } from 'enzyme';
import Popover from './Popover';

const formId = 'njdbt5';

describe('<Popover />', () => {
  it('should render without breaking', () => {
    const wrapper = shallow(<Popover id={formId} />);
    expect(wrapper.length).toEqual(1);
  });

  it('should have the react-typeform-embed className', () => {
    const wrapper = shallow(<Popover id={formId} />);
    expect(wrapper.dive().hasClass('react-typeform-embed')).toEqual(true);
  });

  it('should have the correct id prop', () => {
    const wrapper = mount(<Popover id={formId} />);
    expect(wrapper.props().id).toEqual(formId);
  });

  it('should render children', () => {
    const mockText = 'Click here';

    const wrapper = mount(
      <Popover id={formId}>
        <button>{mockText}</button>
      </Popover>
    );

    expect(wrapper.text()).toEqual(mockText);
  });
});
