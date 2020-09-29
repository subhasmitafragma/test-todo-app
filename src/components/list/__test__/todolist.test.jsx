import React from 'react'
import { shallow,mount } from 'enzyme';
import TodoList from '../TodoList'

describe('layout component',()=>{
    beforeEach(() => {
         wrapper = shallow(<TodoList/>);
    });

    it('renders list', () => {
        
        expect(wrapper.find("Todo").length).toBe(todos.length);
    })

    it('renders list', () => {
        expect(wrapper.find("TodoListItem").at(0).key()).toBe(true);
    })


})
