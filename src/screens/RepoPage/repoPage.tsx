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


function RepoPage( navigation ) {
    const { uri } =  navigation.params;
    console.log(uri)
    return (
        <View>
            <WebView source={{ uri: String(uri) }}/>
        </View>
    )
}

export default RepoPage;