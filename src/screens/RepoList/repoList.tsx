import React, { useEffect } from 'react';
import {
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { S } from './style';
import axios from "axios";
import HeaderList from '../../components/HeaderList';
import RepoInfo from '../../components/RepoInfo';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setName, setRepo, setUri } from '../../redux/actions/userActions';

function RepoList({ navigation }) {
    const { repo, search, name } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    const getRepositories = () => {
        axios.get(`https://api.github.com/search/repositories?q=${search}`).then(
            res => {
                dispatch(setRepo(res.data.items))
            }).catch(error => {
                if (error.response) {
                    console.log("error " + error);
                }
            })
    }

    useEffect(() => {
        getRepositories()
    }, [search])

    function handlePress(item: any) {
        dispatch(setName(item.owner.login))
        dispatch(setUri(item.html_url))
        navigation.navigate({ name: 'RepoPage' });
    }

    const renderItem = ({ item }) => {
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