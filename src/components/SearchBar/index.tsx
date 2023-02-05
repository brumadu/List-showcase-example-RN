import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/Feather';
import { S } from "./style";
import { useAppDispatch, } from '../../hooks/hooks';
import { setSearch } from "../../redux/actions";
import { Keyboard } from "react-native";

function SearchBar() {
    const dispatch = useAppDispatch()
    const [search, setChangeSearch] = useState('')

    useEffect(() => {
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            handleSearch()
        });

        return () => {
            hideSubscription.remove();
        };
    }, [search]);

    function handleSearch() {
        dispatch(setSearch(search))
    }

    return (
        <S.Container>
            <Icon
                name='search'
                size={20}
                color='#3c3c4399'
            />
            <S.TextInput
                placeholder="Busca por repositórios"
                placeholderTextColor={'#3c3c4399'}
                onChangeText={setChangeSearch}
                value={search}>
            </S.TextInput>
        </S.Container>
    )
}

export default SearchBar;