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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";
import Icon from 'react-native-vector-icons/Feather';
import { WebView } from 'react-native-webview';
import { useAppSelector } from '../../hooks/hooks';

function RepoPage({}) {
    const { uri } = useAppSelector(state => state.userReducer)
    return (
        <View style={{ flex: 1 }}>
            <WebView source={{ uri: uri }}/>
        </View>
    )
}

export default RepoPage;