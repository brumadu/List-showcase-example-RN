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

function RepoList({ navigation }) {
    const [repos, setRepos] = useState([]);

    const getRepositories = () => {
        axios.get(`https://api.github.com/search/repositories?q=TETRISx&per_page=10`).then(
            res => {
                setRepos(res.data.items);
            }).catch(error => {
                if (error.response) {
                    console.log(error.response);
                }
            })
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate({ name: 'RepoPage', uri: "item.html_url" })}>
                <View>
                    <Text> {`${item.name}`} </Text>
                </View>
                <View style={styles.itemWrapperStyle}>
                    <Image style={styles.itemImageStyle} source={{ uri: item.owner.avatar_url }} />
                    <RepoInfo></RepoInfo>
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
        itemImageStyle: {
            width: 50,
            height: 50,
            marginRight: 16,
        },
        itemNameStyle: {
            width: 100,
            flexDirection: "row",
            justifyContent: "space-between",
        },
    })

    return (
        <View style={{ flex: 1 }}>
            <HeaderList />
            <FlatList
                data={repos}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            >

            </FlatList>
        </View>
    );


}

export default RepoList;