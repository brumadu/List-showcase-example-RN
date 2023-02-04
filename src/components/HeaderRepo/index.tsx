import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { S } from "./style";

type headerRepo = {
    repoName: String;
    onPress: () => void;
}

function HeaderRepo(props: headerRepo) {
    return (
        <S.Container>
            <Pressable onPress={props.onPress}>
                     <Icon
                    name='left'
                    size={20}
                    color='#0A84FF'
                    />            
                </Pressable>
            <S.Text>{props.repoName}</S.Text>
        </S.Container>
    )
}

export default HeaderRepo;