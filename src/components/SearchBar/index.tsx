import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import { S } from "./style";


function SearchBar() {
    return (
        <S.Container>
            <Icon
                name='search'
                size={20}
                color='#3c3c4399'
            />
            <S.TextInput placeholder="hello there" placeholderTextColor={'#3c3c4399'} value={""}></S.TextInput>
        </S.Container>
    )
}

export default SearchBar;