import { shallow } from 'enzyme';
import React from 'react';
import NotFound from '../../components/NotFound'

//TEST for NotFound
test('Should render the NotFound component',()=>{
	const wrapper = shallow(<NotFound />)
	expect(wrapper).toMatchSnapshot();

})