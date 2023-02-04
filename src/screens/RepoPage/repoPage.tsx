import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useAppSelector } from '../../hooks/hooks';
import HeaderRepo from '../../components/HeaderRepo';

function RepoPage({ navigation: { goBack } }) {
    const { name, uri } = useAppSelector(state => state.userReducer)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderRepo repoName={name} onPress={() => goBack()} />
            <WebView source={{ uri: uri }} />
        </SafeAreaView>
    )
}

export default RepoPage;