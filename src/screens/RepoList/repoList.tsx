import React from 'react';
import {
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { S } from './style';
import HeaderList from '../../components/HeaderList';
import RepoInfo from '../../components/RepoInfo';
import { useAppSelector } from '../../hooks/hooks';

function RepoList({ navigation }) {
    const repo = useAppSelector(state => state.repo)

    const renderItem = ({ item }) => {
        function handlePress(item: any) {
            navigation.navigate('RepoPage',{ name: item.name, url: item.html_url });
        }
        return (
            <TouchableOpacity onPress={() => handlePress(item)}>
                <S.ContainerList>
                    <S.Image source={{ uri: item.owner.avatar_url }} />
                    <RepoInfo userRepo={`${item.name}`} stars={`${item.stargazers_count}`} nameRepo={`${item.owner.login}`}></RepoInfo>
                </S.ContainerList>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderList />
            <FlatList
                data={repo}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );

}

export default RepoList;