import React from 'react';
import { shallow, mount } from 'enzyme';
import Sidetab from './Sidetab';

const formId = 'njdbt5';

describe('<Sidetab />', () => {
  it('should render without breaking', () => {
    const wrapper = shallow(<Sidetab id={formId} />);
    expect(wrapper.length).toEqual(1);
  });

  it('should have the react-typeform-embed className', () => {
    const wrapper = shallow(<Sidetab id={formId} />);
    expect(wrapper.dive().hasClass('react-typeform-embed')).toEqual(true);
  });

  it('should have the correct id prop', () => {
    const wrapper = mount(<Sidetab id={formId} />);
    expect(wrapper.props().id).toEqual(formId);
  });

  it('should render children', () => {
    const mockText = 'Click here';

    const wrapper = mount(
      <Sidetab id={formId}>
        <button>{mockText}</button>
      </Sidetab>
    );

    expect(wrapper.text()).toEqual(mockText);
  });
});
