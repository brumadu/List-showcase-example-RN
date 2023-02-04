import React from "react";
import { SearchBar } from "react-native-screens";
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<SearchBar/>).toJSON();
    expect(tree).toMatchSnapshot();
})
