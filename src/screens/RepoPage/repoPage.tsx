import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useAppSelector } from '../../hooks/hooks';
import HeaderRepo from '../../components/HeaderRepo';

function RepoPage({ navigation: { goBack }, route }) {
    const repo = useAppSelector(state => state.repo)


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderRepo repoName={ route.params.name } onPress={() => goBack()} />
            <WebView source={{ uri: route.params.url }} />
        </SafeAreaView>
    )
}

export default RepoPage;