import React from 'react';
import SearchBar from '../SearchBar';
import { S } from "./style";



function HeaderList() {
    return (
        <S.Container>
            <S.Text>Repositórios</S.Text>
            <SearchBar/>
        </S.Container>
    )
}

export default HeaderList;