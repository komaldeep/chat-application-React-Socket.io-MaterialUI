import React from 'react';
import {expect} from 'chai';
import { mount , shallow } from 'enzyme';
import Chatfooter from './../../../../components/Scenes/Chat/Widgits/Chatfooter'


describe('<Chatfooter/>', () => {
    const component = mount(<Chatfooter/>);

    beforeEach(() => {
        component.setState({
            textFieldValue:"hello man how are you"
        })
    });

    it('Chatfooter should be defined', () => {
        expect(component).to.have.length(1);
    });

    it(' textfield should exist', () => {
        expect(component.find('TextField')).to.have.length(1);
    });

    it('RaisedButton should exist ', () => {
        expect(component.find('RaisedButton')).to.have.length(1);
    });

    it('Send button should works properly', () => {
        component.find('RaisedButton').simulate('click');
        component.props('send_button_submit(component.state(textFieldValue)');
        component.setState({
            textFieldValue:""
        })
        expect(component.state("textFieldValue")).to.eql('');
    });

    it('onchange event on text field should work', () => {
        component.find('TextField').simulate('change',component.setState({
            textFieldValue: 'heyo'
        }));

        expect(component.state("textFieldValue")).to.equal('heyo');

    });

});
