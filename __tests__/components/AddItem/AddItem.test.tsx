import React from 'react';
import renderer from 'react-test-renderer';
import { AddItem } from '../../../src/components/AddItem';

describe('<AddItem />', () =>{
    test('check if the button is adding item', () => {
        const buttonAddItem = renderer.create(<AddItem />);
        expect(buttonAddItem.root.children.length).toEqual(1);
    })
})

