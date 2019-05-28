import React from 'react';
import { UserPage } from '../UserPage';
import { shallow, mount } from 'enzyme';
import { StaticRouter, Route } from 'react-router-dom';

describe('Компонента UserPage', () => {
    const wrapper = shallow(<UserPage/>);

    describe('render', () => {
        it('Содержит компонент Switch', () => {
            expect(wrapper.find('div.user-page')).toHaveLength(1);
        });

    });

});