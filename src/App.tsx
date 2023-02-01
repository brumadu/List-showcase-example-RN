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
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";
import Icon from 'react-native-vector-icons/Feather';
import RepoList from './screens/RepoList/view';
import RepoPage from './screens/RepoPage/view';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='RepoList'
        // screenOptions={{
        //   headerShown: false
        // }}
      >
        <Stack.Screen name="RepoList" component={RepoList} />
        <Stack.Screen name="RepoPage" component={RepoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
