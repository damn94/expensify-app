
//REPLACE REACTSHALLOWRENDER BY ENZYME
// import ReactShallowRenderer from 'react-test-renderer/shallow';

//need toJson to extract junk  lines in our shallow() function 
// import toJson from 'enzyme-to-json'

import Header from '../../components/Header'
import { shallow } from 'enzyme'
import React from 'react';

test('Should render Header correctly',()=>{

	//create variable for return shallow Func
	const  wrapper = shallow(<Header />)

	//MatchSnapshot with to Json
	// expect(toJson(wrapper)).toMatchSnapshot()

	expect(wrapper).toMatchSnapshot()

//little wthat enzyme can do find selectors
//expect(wrapper.find('h1').text()).toBe('Expensify')
//expect(wrapper.find('button').text()).toBe(3)

})







// //snap shot test ReactShallowRender
// test('should render Header correctly',()=>{
// const renderer = new ReactShallowRenderer;
// renderer.render(<Header />);

// expect(renderer.getRenderOutput()).toMatchSnapshot();
// })
