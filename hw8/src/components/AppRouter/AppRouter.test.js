import React from 'react';
import AppRouter from '../AppRouter';
import { shallow, mount } from 'enzyme';
import { StaticRouter, Route } from 'react-router-dom';
describe('Компонента AppRouter', () => {
    const wrapper = mount(<StaticRouter context={{}}><AppRouter /></StaticRouter>);

    describe('render', () => {
        it('Содержит компонент Switch', () => {
            expect(wrapper.find('Switch')).toHaveLength(1);
        });
    
    });

});
