import React from 'react';
import {expect} from 'chai';
import { mount , shallow } from 'enzyme';
import NavigationHeader from './../../components/AppComponent/NavigationHeader';

describe('<NavigationHeader />', () => {
     const component = mount(<NavigationHeader />);

    it('NavigationHeader Exist', () => {
        expect(component).to.have.length(1);
    });

});
