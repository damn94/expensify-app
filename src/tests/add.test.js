import {shallow} from 'enzyme'
import React from 'react'




const multiply = (x,z) => x*z;
//function generate greet
const generateGreeting = (name='Anonymous') => `hello ${name}!`

//test func was provided by jest
//another global func provide by jest (expect)

//test takes two arguments str, Func
test('should mul* two numbers',()=>{
	var result = multiply(5,3)
	expect(result).toBe(15)
})


test('should generate greeting',()=>{
const result = generateGreeting('saliou')
	expect(result).toBe('hello saliou!')

})

test('should greet Anonymous',()=>{
	const result = generateGreeting()
	expect(result).toBe('hello Anonymous!')
})


//PLAYGROUND SPY FUNCTION
test('spy functions ',()=>{

const spyFunc = jest.fn()
const data = {
	name:  'saliou',
	age: 20,
	isMarried: true
}

spyFunc(data)

expect(spyFunc).toHaveBeenCalledWith({
	age: 20,
	name:  'saliou',
	isMarried: true
})
})