import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RepoList from './screens/RepoList/repoList';
import RepoPage from './screens/RepoPage/repoPage';

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
