import React from "react";
import renderer from 'react-test-renderer';
import RepoInfo from "../src/components/RepoInfo";

test('renders correctly', () => {
    const tree = renderer.create(<RepoInfo/>).toJSON();
    expect(tree).toMatchSnapshot();
})
