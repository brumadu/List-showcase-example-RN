import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { S } from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";
import Icon from 'react-native-vector-icons/Feather';
import Search from '../../components/SearchBar';
import HeaderList from '../../components/HeaderList';
import RepoInfo from '../../components/RepoInfo';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setRepo, setUri } from '../../redux/actions/userActions';
import { RootState } from '../../redux/store';
import RepoIcon from '../../components/RepoIcon';

function RepoList({ navigation }) {
    const { repo } = useAppSelector(state => state.userReducer)

    const dispatch = useAppDispatch()
    const getRepositories = () => {
        axios.get(`https://api.github.com/search/repositories?q=tetris&per_page=10`).then(
            res => {
                dispatch(setRepo(res.data.items))
            }).catch(error => {
                if (error.response) {
                    console.log(error.response);
                }
            })
    }

    function handlePress(item: any){
        dispatch(setUri(item.html_url))
        navigation.navigate({name: 'RepoPage'});
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handlePress(item)}>
                <View style={styles.itemWrapperStyle}>
                    <S.Image source={{ uri: item.owner.avatar_url }} />
                    <RepoInfo userRepo={`${item.name}`} stars={`${item.stargazers_count}`} nameRepo={`${item.owner.login}`}></RepoInfo>
                </View>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        getRepositories()
    }, [])

    const styles = StyleSheet.create({
        itemWrapperStyle: {
            flexDirection: "row",
            paddingHorizontal: 16,
            paddingVertical: 16,
        },
        itemNameStyle: {
            width: 100,
            flexDirection: "row",
            justifyContent: "space-between",
        },
    })

    return (
        <View style={{ flex: 1 }}>
            <HeaderList/>
            <FlatList
                data={repo}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </View>
    );


}

export default RepoList;