import React from 'react';
import { shallow } from 'enzyme';
import TitleBar from './TitleBar';
import expectExport from 'expect';

it('renders without crashing', ()=>{
    shallow(<TitleBar/>)
});

it('calls onClick when the toggle button is clicked', () =>{
    let wrapper = shallow(<TitleBar />);
    wrapper.find('div.toggle').first().simulate('click', { preventDefault() {}});
   expect(wrapper.find('.toggled'))
})