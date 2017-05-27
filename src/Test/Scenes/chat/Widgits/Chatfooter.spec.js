import React from 'react';
import {expect} from 'chai';
import { mount , shallow } from 'enzyme';
import Chatfooter from './../../../../components/Scenes/Chat/Widgits/Chatfooter'


describe('<Chatfooter/>', () => {
    const defaultProps = { name: 'Steve' };
    const component = mount(<Chatfooter/>);

    it('Chatfooter is defined', () => {
        expect(component).to.have.length(1);
    });

});
