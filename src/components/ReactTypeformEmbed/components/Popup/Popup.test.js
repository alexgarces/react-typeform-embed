import React from 'react';
import { shallow, mount } from 'enzyme';
import Popup from './Popup';

const formId = 'njdbt5';

describe('<Popup />', () => {
  it('should render without breaking', () => {
    const wrapper = shallow(<Popup id={formId} />);
    expect(wrapper.length).toEqual(1);
  });

  it('should have the react-typeform-embed className', () => {
    const wrapper = shallow(<Popup id={formId} />);
    expect(wrapper.dive().hasClass('react-typeform-embed')).toEqual(true);
  });

  it('should have the correct id prop', () => {
    const wrapper = mount(<Popup id={formId} />);
    expect(wrapper.props().id).toEqual(formId);
  });

  it('should render children', () => {
    const mockText = 'Click here';

    const wrapper = mount(
      <Popup id={formId}>
        <button>{mockText}</button>
      </Popup>
    );

    expect(wrapper.text()).toEqual(mockText);
  });
});
