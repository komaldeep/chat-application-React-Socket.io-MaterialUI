import React from 'react';
import {expect} from 'chai';
import { mount , shallow } from 'enzyme';
import Chatconatiner from './../../../components/Scenes/Chat/Index';

describe('<Chatconatiner />', () => {
    const component = mount(<Chatconatiner />);
    it('chatconatiner is defined', () => {
        expect(component).to.have.length(1);
    });

    it('this.state.messages equal to [] at initialising', () => {
        expect(component.state("messages")).to.eql([]);
    });

});

describe('<ChatText/>', () => {

    const component = mount(<Chatconatiner />);

    beforeEach(() => {
        component.setState({
            messages:[{ body:"heyo", from: 'Komaldeep Chahal'}]
        })
    });


    it('length of messages are', () => {
        expect(component.state().messages).to.have.length(1);
    });

    it('rendering of ChatText', () => {
        expect(component.find('ChatText')).to.have.length(1);
    });

    it('length of ChatText props', () => {
        expect(component.find('ChatText','chat_messages')).to.have.length(1);
    });

    it('values of ChatText props', () => {
        expect(component.find('ChatText').text()).to.equal(' Komaldeep Chahal heyo');
    });

});
