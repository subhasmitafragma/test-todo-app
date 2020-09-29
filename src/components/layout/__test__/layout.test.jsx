import React from 'react'
import { shallow,mount } from 'enzyme';
import Layout from '../Layout'

describe('layout component',()=>{
    it('renders children when passed in', () => {
        const wrapper = shallow(<Layout/>);
        expect(wrapper.exists('.header')).toBe(true);
      });
})
