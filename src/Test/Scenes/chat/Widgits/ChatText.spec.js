import React from 'react';
import {expect} from 'chai';
import { mount , shallow } from 'enzyme';
import ChatText from './../../../../components/Scenes/Chat/Widgits/ChatText';


describe('ChatText Children', () => {
    const defaultProps = { chat_messages:{
        body:"heyo", from: 'Komaldeep Chahal'
    }};

    const component = mount(<ChatText {...defaultProps} />);

    it('<ChatText/> passing props should be defined', () => {
        expect(component).to.have.length(1);
    });

});
